import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About_us from './Pages/About_us.jsx'
import Categories from './Pages/Categories.jsx'
import Recipe from './Pages/Recipe.jsx'
import App from './App.jsx'
import './index.css'


 const API_URL = "https://api.spoonacular.com/recipes"
 const API_KEY = "847cfcc8a0b34236bcfc2f0693d2e601"

const routes = createBrowserRouter([{
  path:"/",
  element: <App/>,
},
{
  path:"/categories",
  element: <Categories/>,
},
{
  path:"/about_us",
  element: <About_us/>
},
{
  path:"/recipe/:id",
  element: <Recipe url={API_URL} apikey={API_KEY}/>
}])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={routes} />
  // </StrictMode>,
)
