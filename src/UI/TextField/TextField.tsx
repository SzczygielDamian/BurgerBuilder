import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classes  from './TextField.module.css';

export interface TextFieldProps {
    label: string;
    name: string;
    type: string;
}
 
const TextField: React.FC<TextFieldProps> = ({ label, ...props}) => {
    const [field, meta] = useField(props);   
    return (
        <div>
            <label htmlFor={field.name}>{label} </label>
            <input
                autoComplete="off"
                {...field}
                {...props}
            />
            <ErrorMessage component="div" name={field.name} className={classes.Error}/>
        </div>
    )
}
 
export default TextField;

