"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import TextareaInput from "../formInputs/TextareaInput";
import { useState } from "react";

export interface ICategoryForm {
  title: string;
  description: string;
}
export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ICategoryForm>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<ICategoryForm> = async (data) => {
    setLoading(true);
    const url = "http://localhost:3000";
    try {
      const res = await fetch(`${url}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          errors={errors}
          label="Category title"
          name="title"
          register={register}
          required
          type="text"
          placeholder="Type the category title"
        />
        <TextareaInput
          errors={errors}
          label="Category description"
          name="description"
          register={register}
          required
        />
      </div>
      <div className="mt-6 sm:col-span-1">
        <SubmitButton loading={loading} title="Category" />
      </div>
    </form>
  );
}
