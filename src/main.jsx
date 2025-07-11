import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router"
import { Layout } from './Layout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
)
