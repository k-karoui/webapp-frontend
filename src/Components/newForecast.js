import * as React from 'react';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { TextField } from '@mui/material';
import { margin, styled } from '@mui/system';
import { Grid, } from '@mui/material';
import Input from "./controls/Input";
import RadioGroup from "./controls/RadioGroup";
import Select from './controls/Select';
import * as employeeService from "../services/employeeService";
import { useForm, Form } from './useForm';
import Button from '@mui/material/Button';
import Checkbox from './controls/Checkbox';


const CustomBox = styled(Box)({
    border: '1px solid #293846',
    width: '90%',
    //textAlign: 'center',
    display: 'flex', 
    padding: '1em 3em 2em 3em',
    margin: '0em auto',
    backgroundColor: '#fff',
    borderRadius: '4.2px',
    boxShadow: '0px 3px 10px -2px rgba(0, 0, 0, 0.2)'
});

const CustomForm = styled(Form)({
    display:'inline',
  });

const autofill_options = [
  { id: 'min_max_growth', title: 'Fill with M/M growth' },
  { id: 'avg_growth', title: 'Fill with avg. growth' },
]

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  autofill: '',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
}

const NewForecast = () => {

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
}

const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
} = useForm(initialFValues, true, validate);

const handleSubmit = e => {
    e.preventDefault()
    if (validate()){
        employeeService.insertEmployee(values)
        resetForm()
    }
}
  return (

      <CustomBox>
      <CustomForm onSubmit={handleSubmit} >
        <h2 style={{ textAlign: 'center'}}>Create New Forecast</h2>
      <Grid container spacing={2}>
            <Grid item xs={12}>
                <Input
                    name="LandmarkID"
                    label="LandMark ID"
                    value={values.LandmarkID}
                    onChange={handleInputChange}
                    error={errors.LandmarkID}
                />
            </Grid>
            <Grid item xs={6}>
                    <Input
                        label="Start Date"
                        name="startDate"
                        value={values.startDate}
                        onChange={handleInputChange}
                        error={errors.startDate}
                    />
                    <Input
                        label="End Date"
                        name="endDate"
                        value={values.endDate}
                        onChange={handleInputChange}
                        error={errors.endDate}
                    />
            </Grid>

            <Grid item xs={12}>
                <Select
                    name="startingLandmarkID"
                    label="Starting Landmark ID"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={employeeService.getDepartmentCollection()}
                    error={errors.departmentId}
                />
                <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width : '200px' , marginLeft : '10px' }}
                >
                Browse Landmarks
                </Button>
            </Grid>
            <Grid item xs={12}>
            <Select
                    name="histReleaseDate"
                    label="Historical Release Date"
                    value={values.histReleaseDate}
                    onChange={handleInputChange}
                    options={employeeService.getDepartmentCollection()}
                    error={errors.histReleaseDate}
                />
            </Grid>
            
            <Grid item xs={12}>
                <RadioGroup
                    name="autofill"
                    label="Autofill"
                    value={values.autofill}
                    onChange={handleInputChange}
                    items={autofill_options}
                />
                <Input
                        label="Start Date"
                        name="startDateAutofill"
                        value={values.startDateAutofill}
                        onChange={handleInputChange}
                        error={errors.startDateAutofill}
                    />
                    <Input
                        label="End Date"
                        name="endDateAutofill"
                        value={values.endDateAutofill}
                        onChange={handleInputChange}
                        error={errors.endDateAutofill}
                    />
                    <Input
                        
                        label="X%"
                        name="xPercent"
                        value={values.xPercent}
                        onChange={handleInputChange}
                        error={errors.xPercent}
                    />

                    <Checkbox
                        name="useMonthlyAvg"
                        label="Use Monthly Average"
                        value={values.useMonthlyAvg}
                        onChange={handleInputChange}
                    />

            </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, width : '200px',float:'right' }}
        >
        Initialize
      </Button>
      </CustomForm>
    </CustomBox>
    

  );
}
export default NewForecast