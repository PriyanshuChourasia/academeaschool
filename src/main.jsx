import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Routes.jsx'
import './styles/Global.css'
import NavabarContextProvider from './components/Navbar/NavbarContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavabarContextProvider>
      <RouterProvider router={router} />
    </NavabarContextProvider>
  </React.StrictMode>,
)
