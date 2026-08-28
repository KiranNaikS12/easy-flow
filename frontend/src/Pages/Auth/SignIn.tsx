import MinimalHeader from "../../components/Headers/MinimalHeader"
import { Formik, Form, Field, } from 'formik';
import { baseValidationSchema } from "../../utils/validation";
import OrDivder from "../../components/Auth/OrDivder";
import PasswordField from "../../components/Common/PasswordField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Illustration from "../../components/Auth/Illustration";
import GoogleSignIn from "../../components/Auth/GoogleSignIn";
import AuthRedirect from "../../components/Auth/AuthRedirect";
import ValidationError from "../../components/Common/ValidationError";
import CustomButton from '../../components/Common/CustomButton'
import type { singInFormData } from "../../types/authTypes/userTypes";

const SignIn = () => {
    
    const handleSubmit = async(data: singInFormData) => {
        console.log('called', data)
         try { 
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const response = await res.json();
            console.log(response)

         } catch(error) {
            console.log(error)
         }
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
                            <h1 className="mb-8 font-medium text-3xl">Login</h1>

                            <Formik
                                initialValues={{
                                    email: "",
                                    password: ""
                                }}
                                validationSchema={baseValidationSchema}
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
                                            <ValidationError name="email" />
                                        </div>

                                        {/* Password */}
                                        <PasswordField name="password" label="Password" errors={errors.password} touched={touched.password}/>

                                        {/* Custom reusable button component */}
                                        <CustomButton type="submit" className="mt-2 w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] cursor-pointer">
                                            Sign In
                                        </CustomButton>
                      
                                    </Form>
                                )}
                            </Formik>

                            {/* Bottom section - horizontal orDivder */}
                            <OrDivder />

                            {/* Sign in with google */}
                            <GoogleSignIn onClick={handleGoogleSignIn}/>

                            {/* Signup section */}
                            <AuthRedirect message="Don't have an account?" linkText="Register Here" linkTo="/signup"/>

                        </div>
                    </div>

                    {/* Illustration section */}
                    <Illustration/>
                </div>
            </main>

        </div>
    )
}

export default SignIn
