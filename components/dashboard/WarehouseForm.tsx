"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";
import TextareaInput from "../formInputs/TextareaInput";
import Select, { OptionSelectType } from "../formInputs/SelectInput";

export interface IWarehouseForm {
  title: string;
  description: string;
  location: string;
  type: string;
}
const warehouseType: OptionSelectType[] = [
  {
    label: "Branch",
    value: "branch",
  },
  {
    label: "Main",
    value: "main",
  },
];
export default function WarehouseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IWarehouseForm>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<IWarehouseForm> = async (data) => {
    setLoading(true);
    const url = "http://localhost:3000";
    try {
      const res = await fetch(`${url}/api/warehouse`, {
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
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-center">
        <Select
          register={register}
          placeholder="Select the warehouse type"
          name="type"
          options={warehouseType}
          isRequired
          className="w-full"
        />
        <TextInput
          placeholder="Type the warehouse title"
          errors={errors}
          label="Warehouse title"
          name="title"
          register={register}
          required
          type="text"
          className="w-full"
        />
        <TextInput
          placeholder="Type the warehouse location"
          errors={errors}
          label="Warehouse location"
          name="location"
          register={register}
          required
          type="text"
        />
        <TextareaInput
          errors={errors}
          label="Warehouse description"
          name="description"
          register={register}
          required
        />
      </div>
      <div className="mt-6 sm:col-span-1">
        <SubmitButton loading={loading} title="Warehouse" />
      </div>
    </form>
  );
}
