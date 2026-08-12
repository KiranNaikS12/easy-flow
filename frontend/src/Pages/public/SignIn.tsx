import MinimalHeader from "../../components/Headers/MinimalHeader"
import { Formik, Form, Field, } from 'formik';
import { signupValidationSchema } from "../../utils/validation";
import { Link } from "react-router-dom";
import OrDivder from "../../components/common/OrDivder";
import PasswordField from "../../components/common/PasswordField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const SignIn = () => {


    const handleSubmit = () => {

    }


    const handleGoogleSignIn = () => {

    }

    return (
        <div className="min-h-screen flex flex-col">
            <MinimalHeader />

            <main className="flex-1 flex items-center justify-center px-6  lg:px-12">
                <div className="flex w-full max-w-275 h-150 overflow-hidden rounded-[30px] bg-green-100">

                    {/* Form section */}
                    <div className="flex flex-1 items-center px-8 lg:px-14">
                        <div className="w-full max-w-md">
                            <h1 className="mb-8 font-medium text-3xl">Create an account</h1>

                            <Formik
                                initialValues={{
                                    username: "",
                                    email: "",
                                    password: "",
                                    confirmPassword: ""
                                }}
                                validationSchema={signupValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="flex w-full flex-col gap-5">

                                        {/* Email */}
                                        <div className="relative flex flex-col gap-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                                Email*
                                            </label>
                                             <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className={`absolute transform -translate-y-1/2 top-13 left-4 ${errors.email && touched.email
                                                            ? "text-red-400"
                                                            : "text-gray-400"
                                                        }`}
                                                />

                                            <Field id="email" name="email" type="email" placeholder="Eg: you@gmail.com" className={`w-full pl-12 placeholder-gray-400  placeholder:font-thin rounded-xl border ${errors.email && touched.email ? "border-red-400": "border-gray-300"} px-4 py-3 text-sm outline-none transition focus:border-b-theme focus:ring-2 focus:ring-theme/20`} />
                                        </div>

                                        {/* Password */}
                                        <PasswordField name="password" label="Password" errors={errors.password} touched={touched.password}/>

                                        <button type="submit" className="mt-2 w-full rounded-xl bg-theme px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] cursor-pointer">
                                            Sign In
                                        </button>

                                    </Form>
                                )}

                            </Formik>



                            {/* Bottom section - horizontal orDivder */}
                            <OrDivder />

                            {/* Sign in with google */}
                            <div className="flex items-center justify-center mt-4">
                                <img src="images/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                                <span
                                    className="text-sm cursor-pointer text-themeColor hover:text-blue-600"
                                    onClick={handleGoogleSignIn}
                                >
                                    Sign up with Google
                                </span>
                            </div>

                            {/* Login section */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{" "}
                                    <Link to="/signup" className="text-themeColor text-blue-600">
                                        Register Here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Illustration section */}
                    <div className="relative hidden w-105 shrink-0 bg-theme lg:block">

                        {/* Top shape */}
                        <div className="absolute -top-12 -left-12 h-32 w-125 -rotate-8 rounded-[30px] bg-[#61d9ad]" />

                        {/* Bottom shape */}
                        <div className="absolute -bottom-20 -left-5 h-72 w-150 rotate-[-24deg] rounded-[30px] bg-[#61d9ad]" />

                    </div>

                </div>
            </main>

        </div>
    )
}

export default SignIn
