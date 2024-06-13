import * as Yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const contactFormSchema = Yup.object({
name: Yup.string().min(2,"Name too short.").max(20,"Name too long").required("Please enter your name."),
organisation_name: Yup.string().min(2,"Name too short.").max(20,"Name too long").required("Please enter the name of organisation."),
remark: Yup.string().required("Please enter a remark."),
email: Yup.string().email("Invalid email").required("Please enter your email."),
contact_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please enter your contact number."),

})