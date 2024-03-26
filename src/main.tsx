import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomRouterProvider from './router.tsx'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppProvider from './context/app_context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
    <CustomRouterProvider/>
    </AppProvider>
  </React.StrictMode>,
)
