import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  className?: string;
  register: UseFormRegister<any>;
  required: boolean;
  errors: FieldErrors<any>;
}
export default function TextareaInput({
  label,
  name,
  register,
  required = true,
  className = "sm:col-span-2",
  errors,
  ...props
}: Props) {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(name, { required: true })}
          id={name}
          name={name}
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
          {...props}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">
            {`${label} is required`}
          </span>
        )}
      </div>
    </div>
  );
}
