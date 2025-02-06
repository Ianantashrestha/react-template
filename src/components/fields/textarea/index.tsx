import { FC, ChangeEvent } from 'react'
import { Field } from 'formik'
import { StyleFormWrapper, StyleLabel } from '../style'
import { StyleTextArea } from './style'
import ErrorMessage from '../ErrorMessage'
interface TextAreaProps {
  name: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  rows?: number
  cols?: number
  required?: boolean
  styleInput?: string
  styleLabel?: string
  styleWrapper?: string
}
const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  onChange,
  styleWrapper = '',
  styleLabel = '',
  ...restProps
}) => {
  const handleChange = ({ form, event }: any) => {
    const value = event.target.value
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
            <StyleTextArea
              hasError={hasError}
              onChange={(event: ChangeEvent) => {
                handleChange({
                  form,
                  event,
                })
              }}
              value={field?.value || ''}
              {...restProps}
            />
            {!!hasError && <ErrorMessage message={meta.error} />}
          </StyleFormWrapper>
        )
      }}
    </Field>
  )
}

export default TextArea
