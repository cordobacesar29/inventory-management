import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  type: string;
  className?: string;
  register: UseFormRegister<any>;
  isRequired?: boolean;
  errors: FieldErrors<any>;
  placeholder?: string;
}

export default function TextInput({
  label,
  name,
  register,
  isRequired,
  type,
  className = "sm:col-span-2",
  errors,
  placeholder,
  ...props
}: Props) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
      >
        {label}
      </label>
      <input
        {...register(name, { required: isRequired })}
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        className="snap-none block w-full h-10 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        {...props}
      />
      {errors[`${name}`] && (
        <span className="text-sm text-red-600 ">{`${label} is required`}</span>
      )}
    </div>
  );
}
