import styled from '@emotion/styled'
export const StyleDropDownWrapper = styled.div<any>`
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 10px;
`

export const StyleDropDownOptionWrapper = styled.ul<any>`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  min-height: 100px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
`
export const StyleDropDownOption = styled.li<any>`
  padding: 7px 10px;
  font-size: 12px;
  background: ${(props) =>
    props.isActive ? props.theme.colors.inputBorder : props.theme.colors.white};
  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.black};
  &:hover {
    background: ${(props) => props.theme.colors.inputBorder};
    color: ${(props) => props.theme.colors.white};
  }
`

export const StyleSelectedValue = styled.p<any>`
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
`
export const StyleDropDownSearchWrapper = styled.div<any>`
  padding: 10px 10px;
`
export const StyleDropDownSearchInput = styled.input<any>`
  width: 100%;
  border-radius: 4px;
  height: 40px;
  text-indent: 10px;
  padding: 0px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  outline: none;
  font-size: 14px;
  &::placeholder {
    font-size: 12px;
    color: ${(props) => props.theme.colors.placeholder};
    font-family: Poppins;
  }
`
