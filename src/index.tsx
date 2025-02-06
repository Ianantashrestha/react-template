import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from '@store'
import { ThemeProvider } from '@emotion/react'
import 'react-toastify/dist/ReactToastify.css'
import './global.css'
import { ToastContainer } from 'react-toastify'
import theme from '@utils/theme'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <App />
    </ThemeProvider>
  </Provider>,
)
