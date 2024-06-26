"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";

export interface IBrandForm {
  title: string;
}
export default function BrandForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBrandForm>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<IBrandForm> = async (data) => {
    setLoading(true);
    const url = "http://localhost:3000";
    try {
      const res = await fetch(`${url}/api/brands`, {
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
          label="Brand title"
          name="title"
          register={register}
          required
          type="text"
          placeholder="Type the brand title"
        />
      </div>
      <div className="mt-6 sm:col-span-1">
        <SubmitButton loading={loading} title="Brand" />
      </div>
    </form>
  );
}
