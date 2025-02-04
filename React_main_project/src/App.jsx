import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Link } from 'react-router-dom'
import Home from './Pages/Home'
import RecipeForm from './Components/RecipeForm'
import RecipeList from './Components/RecipeList'
import MainRoute from './Routes/MainRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
    <nav class="bg-[gray] p-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
         
            <div class="text-white text-xl font-semibold">
                {/* <a href="#">RecipeApp</a>
                <a href="#">RecipeApp</a> */}
                <Link  to={""} >  RecipeApp </Link>
            </div>

          
            <div class="flex space-x-6">

                <Link  to={"/"}  className='text-white hover:text-gray-200' >Home   </Link>
                <Link  to={"/RecipeList"}  className='text-white hover:text-gray-200' >Recipe List   </Link>
                <Link  to={"/RecipeForm"}  className='text-white hover:text-gray-200' >Recipe Form   </Link>
               </div>

           
            <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200">
               Login
            </button>
            
        </div>
    </nav>
<MainRoute/>

    </div>


    </>
  )
}

export default App
