import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { RouterProvider } from 'react-router-dom'
// import { Routers } from './Routes/Routes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
</BrowserRouter>

)
