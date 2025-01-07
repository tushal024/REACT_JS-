import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import{Tushal} from './Redux/store.js'
// import { legacy_createStore } from 'redux'

createRoot(document.getElementById('root')).render(
 
  <Provider store={Tushal}   >
  
    <App />
  
  </Provider>

)
