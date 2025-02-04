import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
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
            {/* <a href="#" class="text-white hover:text-gray-200">Home</a>
            <a href="#" class="text-white hover:text-gray-200">Recipe List</a>
                <a href="#" class="text-white hover:text-gray-200">Recipe Form</a> */}
            </div>

           
            <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200">
               Login
            </button>
            
        </div>
    </nav>




    </div>
  )
}

export default Navbar
