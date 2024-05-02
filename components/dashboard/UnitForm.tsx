"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";

export interface IUnitForm {
  title: string;
  abbreviation: string;
}
export default function UnitForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUnitForm>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<IUnitForm> = async (data) => {
    setLoading(true);
    const url = "http://localhost:3000";
    try {
      const res = await fetch(`${url}/api/units`, {
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
          label="Unit title"
          name="title"
          register={register}
          required
          type="text"
          className="w-full"
          placeholder="Type the unit title"
        />
        <TextInput
          errors={errors}
          label="Unit Abbreviation"
          name="abbreviation"
          register={register}
          required
          type="text"
          className="w-full"
          placeholder="Type the unit abbreviation"
        />
      </div>
      <div className="mt-6 sm:col-span-1">
        <SubmitButton loading={loading} title="Unit" />
      </div>
    </form>
  );
}
