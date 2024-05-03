import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface OptionSelectType {
  value: string;
  label: string;
}

interface Props {
  name: string;
  placeholder: string;
  className?: string;
  isRequired?: boolean;
  register: UseFormRegister<any>;
  options: OptionSelectType[];
  errors: FieldErrors<any>;
}
export default function Select({
  name = "select",
  options,
  placeholder = "Select",
  className = "sm:col-span-2",
  register,
  isRequired,
  errors,
}: Props) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-white"
      >
        {placeholder}
      </label>
      <select
        {...register(name, { required: isRequired })}
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[`${name}`] && (
        <span className="text-sm text-red-600 ">You must select one</span>
      )}
    </div>
  );
}
