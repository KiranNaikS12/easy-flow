import * as Yup from 'yup';

// Regex:
const fullNameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
const phoneRegex = /^(?!.*(\d)\1{6})\d{10}$/;
const divisionRegex = /^[A-Za-z]$/

export const clientRegisterSchema = Yup.object({
    fullName: Yup.string()
    .matches(fullNameRegex, 'Full Name should only contain letters')
    .required('Full Name is required'),
    email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
    phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required('phone number is required'),
    dob: Yup.date().max(new Date(), 'Date of birth must be in the past'),
    category: Yup.string()
    .required('Please select the batch'),
    division: Yup.string()
    .matches(divisionRegex, 'Invalid division format')
    .required('Please select the division'),
    parentContact: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required('phone number is required'),
})