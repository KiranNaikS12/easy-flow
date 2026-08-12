import * as Yup from 'yup';

const nameRegex = /^[a-zA-Z]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const baseValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      passwordRegex,
      'Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('Password is required'),
});


export const signupValidationSchema = baseValidationSchema.shape({
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Confirm password does not match").required("Confirm password is required") 
})