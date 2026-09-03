import { Field, Form, Formik } from "formik"
import { clientRegisterSchema } from "../../utils/validations/clientRegisterValidation"
import ValidationError from "../Common/ValidationError"
import { CATEGORY_OPTIONS } from "../../constants/categoryOptions"
import CustomButton from "../Common/CustomButton"
import CustomFormField from "./CustomFormField"



const ClientEntrollmentModal = () => {

    const handleSubmit = () => {

    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 ">
            <div className="flex flex-col w-[75vw] h-[75vh] max-h-175 rounded-lg bg-white  px-8 py-10">

                {/* Modal Header */}
                <h2 className="font-semibold text-xl">
                    Enroll Clients:
                </h2>

                {/* Modal Content */}
                <div className="flex-1 ">
                    <Formik
                        initialValues={{
                            fullName: "",
                            email: "",
                            phone: "",
                            dob: "",
                            category: "",
                            division: "",
                            parentContact: "",
                        }}
                        validationSchema={clientRegisterSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="relative grid h-full grid-cols-2 gap-5 px-0 py-10">

                                {/* Full Name */}
                                <CustomFormField
                                    name="fullName"
                                    label="Full Name*"
                                    type="text"
                                    placeholder="Eg: John Doe"
                                    errors={errors.fullName}
                                    touched={touched.fullName}
                                />

                                {/* Email */}
                                <CustomFormField
                                    name="email"
                                    label="Email*"
                                    type="email"
                                    placeholder="Eg: your@gmail.com"
                                    errors={errors.fullName}
                                    touched={touched.fullName}
                                />

                                {/* Phone */}
                                <CustomFormField
                                    name="phone"
                                    label="Phone Number*"
                                    type="tel"
                                    placeholder="Eg: 9876543210"
                                    errors={errors.fullName}
                                    touched={touched.fullName}
                                />


                                {/* Date of Birth */}
                                <CustomFormField
                                    name="dob"
                                    label="Date of Birth*"
                                    type="date"
                                />


                                {/* Category */}
                                <div className="relative flex flex-col gap-2">
                                    <label
                                        htmlFor="category"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        category*
                                    </label>

                                    <Field
                                        as="select"
                                        id="category"
                                        name="category"
                                        className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${errors.category && touched.category
                                            ? "border-red-400"
                                            : "border-gray-300"
                                            } focus:border-theme focus:ring-2 focus:ring-theme/2 `}
                                    >
                                        <option value="">Select Category</option>

                                        {CATEGORY_OPTIONS.map((category) => (
                                            <option key={category.label} value={category.value}>
                                                {category.value}
                                            </option>
                                        ))}
                                    </Field>

                                    <ValidationError name="category" />
                                </div>

                                {/* Division */}
                                <CustomFormField
                                    name="division"
                                    label="Division*"
                                    type="text"
                                    placeholder="Eg: A"
                                    errors={errors.fullName}
                                    touched={touched.fullName}
                                />

                                {/* Parent Contact */}
                                <CustomFormField
                                    name="parentContact"
                                    label="Parent Contact*"
                                    type="tel"
                                    placeholder="Eg: 9876543210"
                                    errors={errors.fullName}
                                    touched={touched.fullName}
                                />
                               
                                <CustomButton type="submit" className="absolute bottom-0 right-0 bg-black px-6 font-semibold rounded-lg text-lg py-2 w-56 text-white transition hover:opacity-90 active:scale-[0.98] cursor-pointer">
                                    Register
                                </CustomButton>

                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default ClientEntrollmentModal
