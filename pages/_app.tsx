import { AppProps } from 'next/app';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as ThemeProviderMui } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeGlobal, themeMui } from 'styles/theme';
import 'styles/base/normalize.css';
import 'styles/base/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={themeGlobal}>
        <ThemeProviderMui theme={{...themeMui}}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProviderMui>
      </ThemeProvider>
    </StylesProvider>
  )
}
export default MyApp
