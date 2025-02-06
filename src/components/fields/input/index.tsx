import { ChangeEvent, FC } from 'react'
import { StyleFormWrapper, StyleLabel } from '../style'
import { StyleInput } from './style'
import { Field } from 'formik'
import ErrorMessage from '../ErrorMessage'
interface InputProps {
  type?: 'text' | 'password' | 'email' | 'url' | 'date'
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  required?: boolean
  name: string
  styleInput?: string
  styleLabel?: string
  styleWrapper?: string
}
const Input: FC<InputProps> = ({
  type = 'text',
  label,
  name,
  onChange,
  styleWrapper = '',
  styleLabel = '',
  ...restProps
}) => {
  const handleChange = ({ form, value }: any) => {
    onChange && onChange(value)
    form.setFieldValue(name, value)
  }

  return (
    <Field name={name}>
      {({ field, meta, form }) => {
        const hasError = meta.touched && meta.error
        return (
          <StyleFormWrapper styleWrapper={styleWrapper}>
            {!!label && (
              <StyleLabel hasError={hasError} styleLabel={styleLabel}>
                {label}
              </StyleLabel>
            )}
            <StyleInput
              value={field?.value || ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleChange({
                  form,
                  value: event.target.value,
                })
              }}
              hasError={hasError}
              {...restProps}
            />
            {!!hasError && <ErrorMessage message={meta.error} />}
          </StyleFormWrapper>
        )
      }}
    </Field>
  )
}

export default Input
