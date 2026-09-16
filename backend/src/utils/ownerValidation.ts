import * as Yup from 'yup';


const phoneRegex = /^(?!.*(\d)\1{6})\d{10}$/;

export const accountSetupValidationSchema = Yup.object({
  institutionName: Yup.string()
    .required('Institution name is required')
    .min(2, 'Institution name must be at least 2 characters')
    .max(100, 'Institution name cannot exceed 100 characters'),

  institutionType: Yup.string().required('Institution type is required'),

  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required('phone number is required'),

  description: Yup.string()
    .required('Description is required')
    .min(20, 'Description must contain alteast 10 characters')
    .max(500, 'Description cannot exceed 100 characters'),

  services: Yup.array()
    .required('Services required')
    .min(1, 'Add at least one offering'),
});
