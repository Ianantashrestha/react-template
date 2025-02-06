import { Field } from 'formik'
import { ChangeEvent, FC, useRef } from 'react'
import { StyleFormWrapper, StyleLabel } from '../style'
import {
  StyleUploadButton,
  StyleUploadButtonImgPreview,
  StyleUploadButtonWrapper,
  StyleUploadInput,
} from './style'

interface UploadProps {
  varient?: 'button' | 'drag'
  name: string
  placeholder?: string
  onChange?: (value: any) => void
  label?: string
  styleLabel?: string
}
const Upload: FC<UploadProps> = ({
  varient = 'button',
  name,
  label,
  placeholder,
  onChange,
  styleLabel = '',
}) => {
  const uploadInputRef = useRef<HTMLInputElement>(null)
  const handleChange = ({ form, file }: any) => {
    const fileName = file.name
    const extension = fileName.substring(fileName.lastIndexOf('.') + 1)
    const reader = new FileReader()
    reader.onload = function (e: any) {
      const base64String = e?.target?.result
      const splitBase64String = base64String.split(',')
      const obj = {
        base64: splitBase64String[1].replace(/\s+/g, ''),
        extension: extension.toLowerCase(),
        info: splitBase64String[0],
      }

      form.setFieldValue(name, obj)

      onChange && onChange(obj)
    }
    reader.readAsDataURL(file)
  }
  return (
    <Field name={name}>
      {({ form, field, meta }) => {
        const hasError = meta.touched && meta.error
        return (
          <StyleFormWrapper>
            {!!label && varient !== 'drag' && (
              <StyleLabel hasError={hasError} styleLabel={styleLabel}>
                {label}
              </StyleLabel>
            )}
            <StyleUploadInput
              type="file"
              ref={uploadInputRef}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleChange({
                  form,
                  file: event.target.files[0],
                })
                event.target.value = null
              }}
            />
            {varient === 'button' && (
              <StyleUploadButtonWrapper
                onClick={() => {
                  if (uploadInputRef.current) {
                    uploadInputRef.current.click()
                  }
                }}
              >
                <StyleUploadButton>
                  {placeholder || 'Browse File'}
                </StyleUploadButton>
                {!!field?.value && (
                  <StyleUploadButtonImgPreview
                    src={
                      field?.value?.base64
                        ? `${field?.value?.info},${field?.value?.base64}`
                        : field?.value
                    }
                  />
                )}
              </StyleUploadButtonWrapper>
            )}
          </StyleFormWrapper>
        )
      }}
    </Field>
  )
}

export default Upload
