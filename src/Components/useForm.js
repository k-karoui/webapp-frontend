import React, { useState } from 'react'
//import { styled } from '@mui/system';
// import { makeStyles } from "@mui/styles";

export function useForm(initialFValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}


export function Form(props) {

    const { children, ...other } = props;
    return (
        <form autoComplete="off" {...other}>
        {props.children}
        </form>
    )
}