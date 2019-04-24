import React from 'react'
import FormField from './FormField'
import {
  Input,
  InputDatePicker,
  InputDateRangePicker,
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
    {...props}
  />

FormField.InputDateRangePicker = props =>
  <FormField
    component={InputDateRangePicker}
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
    defaultValue={false}
    {...props}
  />

export default FormField
