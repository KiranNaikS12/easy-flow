import { useField } from "formik";
import ValidationError from "../Common/ValidationError";

type CustomFormFieldProps = {
    name: string;
    label?: string;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    as? : "input" | "textarea";
    rows?: number;
};

const CustomFormField = ({
    name,
    label,
    type,
    placeholder,
    as = "input",
    rows,
}: CustomFormFieldProps) => {
    const [field, meta] = useField(name);

    const hasError = meta.error && meta.touched;

    return (
        <>
            <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            {as === "textarea" ? (
                <textarea
                    {...field}
                    id={name}
                    placeholder={placeholder}
                    rows={rows}
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
                        ${
                            hasError
                                ? "border-red-400"
                                : "border-gray-300"
                        }
                        focus:border-theme focus:ring-2 focus:ring-theme/20
                    `}
                />
            ) : (
                <input
                    {...field}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
                        ${
                            hasError
                                ? "border-red-400"
                                : "border-gray-300"
                        }
                        focus:border-theme focus:ring-2 focus:ring-theme/20
                    `}
                />
            )}

            <ValidationError name={name} />
        </>
    );
};

export default CustomFormField;
