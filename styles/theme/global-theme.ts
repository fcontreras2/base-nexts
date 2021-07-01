export type Colors = {
  [color: string]: string | {}
}

export type Fonts = {
  [font: string]: string
}

export type Theme = {
  colors: Colors,
  fonts: Fonts
}

const theme: Theme = {
  colors: {
    primary: '#1D62E6',
    secondary: '#00A2FF',
    gray: '#F9F9F9',
    black: '#000000',
    states: {
      error: '#FF4A44',
      success: '#65D543',
      alert: '#FFDF41',
    }
  },
  fonts: {
    regular: '\'Telefonica-Regular\', sans-serif',
    regularLight: '\'Telefonica-RegularItalic\', sans-serif',
    light: '\'Telefonica-Light\', sans-serif',
    extraLight: '\'Telefonica-ExtraLight\', sans-serif',
    bold: '\'Telefonica-Bold\', sans-serif',
    hand: '\'Telefonica-Hand\', sans-serif',
  },
};

export default theme;
