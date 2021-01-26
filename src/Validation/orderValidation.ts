import * as Yup from 'yup';

const validate = Yup.object({
    firstName: Yup.string()
    .max(15, 'Mus be 15 characters or less')
    .min(3, 'Must be min 3 characters')
    .required('Required'),
    lastName: Yup.string()
    .max(20, 'Mus be 20 characters or less')
    .min(3, 'Must be min 3 characters')
    .required('Required'),
    deliveryMethod: Yup.string()
    .required('Required'),
    city: Yup.string()
    .max(15, 'Mus be 15 characters or less')
    .min(3, 'Must be min 3 characters')
    .required('Required'),
    address: Yup.string()
    .max(15, 'Mus be 15 characters or less')
    .min(5, 'Must be min 3 characters')
    .required('Required'),
    phoneNumber: Yup.string()
    .max(9, 'Mus be 9 characters or less')
    .min(9, 'Must be min 3 characters')
    .required('Required'),
})

export default validate