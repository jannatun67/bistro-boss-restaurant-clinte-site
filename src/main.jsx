import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/router'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider, { AuthContext } from './Provider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
