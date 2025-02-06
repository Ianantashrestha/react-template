import styled from '@emotion/styled'

export const StyleUploadButtonWrapper = styled.div<any>`
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 10px;
  cursor: pointer;
  overflow: hidden;
`

export const StyleUploadButton = styled.div<any>`
  background: ${(props) => props.theme.colors.primary};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  padding: 0px 30px;
  border-radius: 4px;
  font-size: 12px;
`

export const StyleUploadInput = styled.input`
  display: none;
`

export const StyleUploadButtonImgPreview = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 4px;
`
