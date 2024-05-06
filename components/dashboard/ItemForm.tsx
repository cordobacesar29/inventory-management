"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";
import TextareaInput from "../formInputs/TextareaInput";
import Select, { OptionSelectType } from "../formInputs/SelectInput";
import { UploadButton } from "@/lib/uploadthing";
import { ClientUploadedFileData } from "uploadthing/types";
import { ItemType } from "@/constants/items.types";
import UploadImageComponent from "./UploadImageComponent";

export default function ItemForm() {
  const categoriesSelectOptions: OptionSelectType[] = [
    { label: "Bebidas", value: "drinks" },
    { label: "Entradas", value: "appetizers" },
    { label: "Platos Fuertes", value: "main_courses" },
    { label: "Ensaladas", value: "salads" },
    { label: "Sopas", value: "soups" },
  ];
  const unitsSelectOptions: OptionSelectType[] = [
    { label: "Bebidas", value: "drinks" },
    { label: "Entradas", value: "appetizers" },
  ];
  const brandsSelectOptions: OptionSelectType[] = [
    { label: "Bebidas", value: "drinks" },
    { label: "Entradas", value: "appetizers" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ItemType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
  const onSubmit: SubmitHandler<ItemType> = async (data) => {
    data.imageUrl = imageUrl ?? "";
    console.log(data)
    const url = "http://localhost:3000";
    try {
      const res = await fetch(`${url}/api/items`, {
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

  const handleUpoadImageComplete = (
    res: ClientUploadedFileData<{ uploadedBy: string }>[]
  ) => {
    if (res) return setImageUrl(res[0].url);
    return;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-center">
        <TextInput
          name="name"
          label="Name"
          type="text"
          className="w-full"
          placeholder="Type the item name"
          errors={errors}
          register={register}
          isRequired
        />
        <Select
          name="categoryId"
          placeholder="Select the category"
          className="w-full"
          errors={errors}
          register={register}
          options={categoriesSelectOptions}
          isRequired
        />
        <TextInput
          name="sku"
          label="SKU"
          type="number"
          className="w-full"
          placeholder="Type the item sku"
          errors={errors}
          register={register}
        />
        <TextInput
          name="barcode"
          label="Barcode"
          type="number"
          className="w-full"
          placeholder="Type the item barcode"
          errors={errors}
          register={register}
        />
        <TextInput
          name="quantity"
          label="Quantity"
          type="number"
          className="w-full"
          placeholder="Type the item quantity"
          errors={errors}
          register={register}
        />
        <Select
          name="unitId"
          placeholder="Select the item unit"
          className="w-full"
          errors={errors}
          register={register}
          options={unitsSelectOptions}
          isRequired
        />
        <TextInput
          name="buyingPrice"
          label="Buying Price"
          type="number"
          className="w-full"
          placeholder="Type the buying price"
          errors={errors}
          register={register}
          isRequired
        />
        <TextInput
          name="sallingPrice"
          label="Salling Price"
          type="number"
          className="w-full"
          placeholder="Type the sale price"
          errors={errors}
          register={register}
          isRequired
        />
        <Select
          name="supplierId"
          placeholder="Select the item suppier"
          className="w-full"
          errors={errors}
          register={register}
          options={brandsSelectOptions}
          isRequired
        />
        <TextInput
          name="reOrderPoint"
          label="Re-Order Point"
          type="number"
          className="w-full"
          placeholder="Type the sale price"
          errors={errors}
          register={register}
          isRequired
        />
        <Select
          name="warehouseId"
          placeholder="Select the Item Warehouse"
          className="w-full"
          errors={errors}
          register={register}
          options={brandsSelectOptions}
          isRequired
        />
        <TextInput
          name="weight"
          label="Item Weight in Kgs"
          type="number"
          className="w-full"
          placeholder="Type the item weight"
          errors={errors}
          register={register}
        />
        <Select
          name="brandId"
          placeholder="Select the item brand"
          className="w-full"
          errors={errors}
          register={register}
          options={brandsSelectOptions}
          isRequired
        />
        <TextInput
          name="dimensions"
          label="Item Dimensions in cm (ej 20 x 30 x 100)"
          type="text"
          className="w-full"
          placeholder="Type the item dimensions"
          errors={errors}
          register={register}
        />
        <UploadImageComponent label="Upload Image" imageUrl={imageUrl} setImageUrl={setImageUrl}/>
        <TextInput
          name="taxRate"
          label="Item Tax  Rate in %"
          type="number"
          className="w-full"
          placeholder="Type the item dimensions"
          errors={errors}
          register={register}
        />
        <TextareaInput
          name="description"
          errors={errors}
          register={register}
          label="Item Description"
          className="w-full"
        />
        <TextareaInput
          name="notes"
          errors={errors}
          register={register}
          label="Item Notes"
          className="w-full"
        />
      </div>
      <div className="mt-6 sm:col-span-1">
        <SubmitButton loading={loading} title="Item" />
      </div>
    </form>
  );
}
