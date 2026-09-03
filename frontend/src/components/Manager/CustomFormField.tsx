import { Field } from "formik";
import ValidationError from "../Common/ValidationError";

type CustomFormFieldProps = {
    name: string;
    label: string;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    errors?: string;
    touched?: boolean;
};

const CustomFormField = ({
    name,
    label,
    type,
    placeholder,
    errors,
    touched,
}: CustomFormFieldProps) => {
    return (
        <div className="relative flex flex-col gap-2">
            <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            <Field
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition
                    ${
                        errors && touched
                            ? "border-red-400"
                            : "border-gray-300"
                    }
                    focus:border-theme focus:ring-2 focus:ring-theme/20
                `}
            />

            <ValidationError name={name} />
        </div>
    );
};

export default CustomFormField;
