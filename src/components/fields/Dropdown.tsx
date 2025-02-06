import { Field } from 'formik'
import { FC } from 'react'
import { StyleDropDownWrapper, StyleFormWrapper, StyleLabel } from './style'
import ErrorMessage from './ErrorMessage'

interface DropDownProps {
  options: Array<any>
  onChange?: (value: any) => void
  label?: string
  placeholder?: string
  valueAsKey: string
  titleAsKey: string
  name: string
  isMultiple?: boolean
  styleWrapper?: string
  styleLabel?: string
}
const DropDown: FC<DropDownProps> = ({
  options,
  label,
  onChange,
  placeholder,
  valueAsKey,
  titleAsKey,
  isMultiple = false,
  name,
}) => {
  return (
    <Field name={name}>
      {({ field, meta, form }) => {
        const hasError = meta.touched && meta.error
        return (
          <StyleFormWrapper>
            {!!label && <StyleLabel>{label}</StyleLabel>}
            <StyleDropDownWrapper></StyleDropDownWrapper>
            {!!hasError && <ErrorMessage message={meta.error} />}
          </StyleFormWrapper>
        )
      }}
    </Field>
  )
}

export default DropDown
