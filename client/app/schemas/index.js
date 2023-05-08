import * as yup from 'yup';

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
// password must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 number
const phoneRules = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
// phone number must be valid

export const registerSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    phone: yup.string().min(10, 'phone no. must be 10 characters').matches(phoneRules, 'Phone number is not valid').required(),
    password: yup.string().matches(passwordRules, 'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 number').required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()
})

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    phone: yup.string().min(10, 'phone no. must be 10 characters').matches(phoneRules, 'Phone number is not valid').required(),
    password: yup.string().matches(passwordRules, 'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 number').required()
})