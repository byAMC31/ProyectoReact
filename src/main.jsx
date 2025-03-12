import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import { RouterProvider, createBrowserRouter } from 'react-router'
import SignInSide from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Astros from './components/Astros/Astros'

const router = createBrowserRouter([
  //Definiciòn de path y componentes
  { 
    path: '/', element: <App/>
  },
  {
    path: 'login', element: <SignInSide/>
  },
  {
    path: 'astros', element: <Astros/>
  },
  {
    path: '*', element: <NotFound/>
  }
  
]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router }/>
  </StrictMode>,
)

