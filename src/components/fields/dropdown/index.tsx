import { Field } from 'formik'
import { FC, useState, useRef, useEffect, ChangeEvent } from 'react'
import { StyleFormWrapper, StyleLabel, StylePlaceholder } from '../style'
import {
  StyleDropDownWrapper,
  StyleDropDownOptionWrapper,
  StyleDropDownOption,
  StyleSelectedValue,
  StyleDropDownSearchInput,
  StyleDropDownSearchWrapper,
  StyleDropDownOptionItems,
} from './style'
import ErrorMessage from '../ErrorMessage'
import Svg from '@components/svg'
import debounce from '@utils/debounce'
interface DropDownProps {
  options: Array<any>
  onChange?: (value: any) => void
  onSearch?: (value: any) => void
  label?: string
  placeholder?: string
  valueAsKey: string
  titleAsKey: string
  name: string
  isMultiple?: boolean
  isServerside?: boolean
  hasSearch?: boolean
  styleWrapper?: string
  styleLabel?: string
  styleInput?: string
}
const DropDown: FC<DropDownProps> = ({
  options,
  label,
  onChange,
  onSearch,
  placeholder,
  valueAsKey,
  titleAsKey,
  isMultiple = false,
  isServerside = false,
  hasSearch = false,
  name,
  styleInput = '',
  styleLabel = '',
  styleWrapper = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const handleChange = ({ form, value }) => {
    setIsOpen(false)
    onChange && onChange(value)
    form.setFieldValue(name, value)
  }
  const handleSearch = debounce((value: string) => {
    if (!isServerside) {
      setSearch(value)
    }
    onSearch && onSearch(value)
  }, 600)
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <Field name={name}>
      {({ field, meta, form }) => {
        const hasError = meta.touched && meta.error

        return (
          <StyleFormWrapper ref={dropdownRef} styleWrapper={styleWrapper}>
            {!!label && (
              <StyleLabel hasError={hasError} styleLabel={styleLabel}>
                {label}
              </StyleLabel>
            )}
            <StyleDropDownWrapper
              hasError={hasError}
              onClick={() => setIsOpen(!isOpen)}
              styleInput={styleInput}
            >
              {!!placeholder && !field?.value ? (
                <StylePlaceholder>{placeholder}</StylePlaceholder>
              ) : (
                <StyleSelectedValue>
                  {
                    options?.find(
                      (option: any) => option[valueAsKey] == field?.value,
                    )?.[titleAsKey]
                  }
                </StyleSelectedValue>
              )}
              <Svg svg="chevronDown" size={15} />
            </StyleDropDownWrapper>
            {!!isOpen && (
              <StyleDropDownOptionWrapper>
                {!!hasSearch && (
                  <StyleDropDownSearchWrapper>
                    <StyleDropDownSearchInput
                      type="text"
                      placeholder="Search"
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSearch(event.target.value)
                      }
                    />
                  </StyleDropDownSearchWrapper>
                )}
                <StyleDropDownOptionItems>
                  {options
                    ?.filter((option) =>
                      option[titleAsKey]
                        .toLowerCase()
                        .includes(search.toLowerCase()),
                    )
                    .map((option) => (
                      <StyleDropDownOption
                        isActive={field.value === option[valueAsKey]}
                        key={option[valueAsKey]}
                        onClick={() => {
                          handleChange({
                            form,
                            value: option[valueAsKey],
                          })
                        }}
                      >
                        {option[titleAsKey]}
                      </StyleDropDownOption>
                    ))}
                </StyleDropDownOptionItems>
              </StyleDropDownOptionWrapper>
            )}
            {!!hasError && <ErrorMessage message={meta.error} />}
          </StyleFormWrapper>
        )
      }}
    </Field>
  )
}

export default DropDown
