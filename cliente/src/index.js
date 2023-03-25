import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContextProvider } from 'context/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
)
