import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classes  from './SelectField.module.css';

export interface SelectFieldProps {
    label: string;
    name: string;
    type: string;
}
 
const SelectField: React.FC<SelectFieldProps> = ({ label, ...props}) => {
    const [field, meta] = useField(props);   
    return (
        <div>
             <label htmlFor={field.name} className={classes.label}>{label} </label>
            <select {...field} {...props} className={classes.SelectElement}/>
            <ErrorMessage component="div" name={field.name} className={classes.Error}/>
        </div>
    )
}
 
export default SelectField;
