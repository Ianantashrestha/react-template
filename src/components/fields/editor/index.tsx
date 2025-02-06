import { FC } from 'react'
import { Field } from 'formik'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { StyleFormWrapper, StyleLabel } from '../style'
import ErrorMessage from '../ErrorMessage'
interface EditorProps {
  name: string
  onChange?: (value: any) => void
  label?: string
  styleWrapper?: string
  styleLabel?: string
}
const Editor: FC<EditorProps> = ({
  name,
  label,
  onChange,
  styleLabel,
  styleWrapper,
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
          <StyleFormWrapper hasError={hasError} styleWrapper={styleWrapper}>
            {!!label && (
              <StyleLabel hasError={hasError} styleLabel={styleLabel}>
                {label}
              </StyleLabel>
            )}
            <ReactQuill
              theme="snow"
              value={field?.value || ''}
              onChange={(value: string) => {
                handleChange({
                  form,
                  value,
                })
              }}
            />
            {!!hasError && <ErrorMessage message={meta.error} />}
          </StyleFormWrapper>
        )
      }}
    </Field>
  )
}

export default Editor
