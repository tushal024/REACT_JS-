import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main_route from './Routes/Main_route.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

      <Main_route/>
      
 </BrowserRouter>
)
