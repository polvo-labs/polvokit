import React from 'react'
import FormField from './FormField'
import {
  Input,
  InputDatePicker,
  InputDateRangePicker,
  InputFile,
  Textarea,
  Select,
  Calendar,
  Switch
} from '../..'

FormField.Input = props =>
  <FormField
    component={Input}
    {...props}
  />

FormField.InputDatePicker = props =>
  <FormField
    component={InputDatePicker}
    defaultValue={null}
    {...props}
  />

FormField.InputDateRangePicker = props =>
  <FormField
    component={InputDateRangePicker}
    defaultValue={{
      start: null,
      end: null
    }}
    {...props}
  />

FormField.InputFile = props =>
  <FormField
    component={InputFile}
    defaultValue={null}
    {...props}
  />

FormField.Textarea = props =>
  <FormField
    component={Textarea}
    {...props}
  />

FormField.Select = props =>
  <FormField
    component={Select}
    {...props}
  />

FormField.Switch = ({ label, ...props }) =>
  <FormField
    component={Switch}
    defaultValue={false}
    componentProps={{
      label,
      ...props.componentProps
    }}
    {...props}
  />

FormField.Calendar = props =>
  <FormField
    component={Calendar}
    defaultValue={null}
    {...props}
  />

export default FormField
