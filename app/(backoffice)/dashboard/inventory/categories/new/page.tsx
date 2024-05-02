import CategoryForm from "@/components/dashboard/CategoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { ROUTES } from "@/constants/routes";

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New category" href={ROUTES.inventory} />
      <CategoryForm />
    </div>
  );
}
