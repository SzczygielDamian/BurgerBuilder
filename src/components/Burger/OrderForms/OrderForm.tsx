import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

export interface OrderFormProps {
    
}

interface Values {
    firstName: string;
    lastName: string;
    deliveryMethod: string;
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
                phoneNumber: '',
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                
            }}
            >
            {formik => (
                <Form>
                    
                </Form>
            )}
            </Formik>
        </div>
     );
}
 
export default OrderForm;