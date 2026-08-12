import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Field } from "formik"
import { useState } from "react";
import type { PasswordFieldProps } from "../../types/passwordFieldTypes";




const PasswordField = ({ name, label, errors, touched }: PasswordFieldProps) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className=" relative flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                {label}*
            </label>

            <FontAwesomeIcon
                icon={faLock}
                className={`absolute transform -translate-y-1/2 top-13 left-4 ${errors && touched
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}
            />

            <Field id="confirmPassword" name={name} type={showPassword ? "text" : "password"} placeholder="Confirm password" className={`w-full pl-12 placeholder-gray-400  placeholder:font-thin rounded-xl border ${errors && touched ? "border-red-400": "border-gray-300"} px-4 py-3 text-sm outline-none transition focus:border-b-theme focus:ring-2 focus:ring-theme/20`} />
            <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword((prev) => !prev)}
                className=" absolute text-gray-400 transform  cursor-pointer top-11 right-4"
            />
        </div>
    )
}

export default PasswordField
