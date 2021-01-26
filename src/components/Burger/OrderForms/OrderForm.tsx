import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import TextField  from '../../../UI/TextField/TextField';
import SelectField from '../../../UI/SelectField/SelectField'; 

import validate  from '../../../Validation/orderValidation';

export interface OrderFormProps {
    
}

interface Values {
    firstName: string;
    lastName: string;
    deliveryMethod: string;
    city: string;
    address: string;
    phoneNumber: string;
}
  
const OrderForm: React.FC<OrderFormProps> = () => {
   
    return ( 
        <div>
            <h4>SHIPPING FORM</h4>
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                deliveryMethod: '',
                city: '',
                address: '',
                phoneNumber: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
            >
            {formik => (
             <div>
                    {console.log(formik)}
                    <Form>
                        <TextField label="First name" name="firstName" type="text"/>
                        <TextField label="Last name" name="lastName" type="text"/>
                        <TextField label="Phone Number" name="phoneNumber" type="text"/>
                        <TextField label="City" name="city" type="text"/>
                        <TextField label="Address" name="address" type="text"/>
                        <SelectField label="Delivery Method" name="deliveryMethod" type="select">
                            <option value="fastest">Fastest</option>
                            <option value="cheapest">Cheapest</option>
                        </SelectField>
                        <button type="submit">Send</button>
                        {/* <button></button> */}
                    </Form>
             </div>
               
            )}
            </Formik>
        </div>
     );
}
 
export default OrderForm;