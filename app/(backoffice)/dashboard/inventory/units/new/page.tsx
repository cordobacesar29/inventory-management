import FormHeader from "@/components/dashboard/FormHeader";
import UnitForm from "@/components/dashboard/UnitForm";
import { ROUTES } from "@/constants/routes";
import React from "react";

export default function NewUnit() {
  return (
    <div>
      <FormHeader title="New Unit" href={ROUTES.inventory} />
      <UnitForm/>
    </div>
  );
}
