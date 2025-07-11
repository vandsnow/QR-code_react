import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router"
import { QrCodeGenerator } from "./QrCodeGenerator"
import { QrCodeScanner } from "./QrCodeScanner"
import { Layout } from './Layout'

/*let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>
  },
  {
    path: "/generate",
    element: <QrCodeGenerator/>
  },
  {
    path: "/scan",
    element: <QrCodeScanner/>
  }
]);*/



ReactDOM.createRoot(document.getElementById('root')).render(
  //<RouterProvider router={router} />
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
)
