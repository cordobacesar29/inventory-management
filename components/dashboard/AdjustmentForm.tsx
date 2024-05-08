"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";
import TextareaInput from "../formInputs/TextareaInput";
import Select, { OptionSelectType } from "../formInputs/SelectInput";
import { IAdjustmentForm } from "@/constants/items.types";


const branchesOptions: OptionSelectType[] = [
  {
    label: "Branch A",
    value: "branchA",
  },
  {
    label: "Branch B",
    value: "BranchB",
  },
];

export default function AdjustmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAdjustmentForm>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<IAdjustmentForm> = async (data) => {
    setLoading(true);
    const url = "http://localhost:3000";
    try {
      const res = await fetch(`${url}/api/adjustments`, {
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
        <TextInput
          placeholder="Type the enter amount of stock to transfer"
          label="Enter Amount of Stock to Transfer"
          name="transferStockQuantity"
          type="number"
          className="w-full"
          errors={errors}
          register={register}
          isRequired
        />
        <Select
          placeholder="Select the Branch that will receive the stock"
          name="recivingBranchId"
          className="w-full"
          errors={errors}
          register={register}
          options={branchesOptions}
          isRequired
        />
        <TextareaInput
          label="Adjustment Notes"
          name="notes"
          errors={errors}
          register={register}
          isRequired
        />
      </div>
      <div className="mt-6 sm:col-span-1">
        <SubmitButton loading={loading} title="Adjustment" />
      </div>
    </form>
  );
}
