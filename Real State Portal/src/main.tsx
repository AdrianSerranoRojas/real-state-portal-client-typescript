import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import ReduxProvider from "./redux/Provider"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider>

    <App />
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
)
