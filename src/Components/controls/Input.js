import React from 'react'
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
    padding:'5px',
  });

export default function Input(props) {

    const { name, label, value,error=null, onChange } = props;
    return (
        <CustomTextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
