import BrandForm from "@/components/dashboard/BrandForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { ROUTES } from "@/constants/routes";
import React from "react";

export default function NewBrand() {
  return (
    <div>
      <FormHeader href={ROUTES.inventory} title="New Brand" />
      <BrandForm />
    </div>
  );
}
