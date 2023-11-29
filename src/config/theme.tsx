import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto'

const theme = extendTheme({
  colors: {
    old: {
      text: '#f7f0f5',
      background: '#433633',
      primary: '#8f857d',
      secondary: '#5c5552',
      accent: '#ad804f',
    },
    darkMode: {
      text: '#FFFFFF',
      background: '#131313',
      elevation: '#212121',
      primary: '#8E5BB9',
      secondary: '#AF92C3',
      accent: '#C95DAC',
      white: '#FFFFF',
      black: '#00000',
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
})

/* // These are the default breakpoints
const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
} 

// Internally, we transform to this
const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em'] */

export { theme }
