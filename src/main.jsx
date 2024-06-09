import ReactDOM from 'react-dom/client'
import App from './page/App'
import "./assets/style/Root.scss"
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
)
