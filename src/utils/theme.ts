export type Sizes = {
  zero?: number
  xs: number
  sm: number
  md: number
  lg: number
  xlg?: number
  '1x': number
  '2x': number
  '3x': number
  '4x': number
  '5x'?: number
  '6x'?: number
  '7x'?: number
  auto: string
}

export const fontSizes: Sizes = {
  zero: 0,
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  '1x': 20,
  '2x': 24,
  '3x': 30,
  '4x': 40,
  '5x': 50,
  '6x': 60,
  '7x': 64,
  auto: 'auto',
}

export const colors: any = {
  primary: '#5AA06E',
  primary50: '#EFF6F1',
  danger: '#ED4337',
}

export const fontFamily: any = {
  primary: 'Poppins',
  secondary: 'Montserrat',
}

export const createTheme = () => {
  const theme = {
    colors: colors,
    fontSizes,
    fontFamily,
  }

  return theme
}

const theme = createTheme()
export default theme
