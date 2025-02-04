import React, { useState } from 'react'
import { FetchData } from '../Redux/Action'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const RecipeForm = () => {

  let [obj, setobj] = useState({
    R_title: "",
    Des: "",
    intt: "",
    face: ""

  })

  let dispatch= useDispatch()
  console.log(dispatch);
  

  let [arr,setarr]= useState([])


  function change(e) {
    let { name, value } = e.target

    setobj({ ...obj, [name]: value })
    // console.log(obj);
  

  }


    function sub(e){
      e.preventDefault()

      setarr([...arr,obj])


      axios.post("http://localhost:3000/data",obj)

      console.log(arr);
      
      // FetchData(dispatch,obj)

      


      

    }

  return (
    <div>
      <body class="bg-gray-50 p-8">

        <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Add New Recipe</h2>

          <form action="#" method="POST"  onSubmit={sub} >

            <div class="mb-4">
              <label for="title" class="block text-gray-700 font-semibold">Recipe Title</label>

              <input type="text" onChange={change} placeholder="Enter recipe title" title='R_title' name='R_title'
                className='w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500' required />
            </div>


            <div class="mb-4">
              <label for="description" class="block text-gray-700 font-semibold">Description</label>
              <textarea id="description" onChange={change} title='Des' name="Des" rows="4" placeholder="Write a brief description of the recipe" class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>


            <div class="mb-4">
              <label for="ingredients" class="block text-gray-700 font-semibold">Ingredients</label>
              <textarea id="ingredients" onChange={change} title='intt' name="intt" rows="4" placeholder="List the ingredients" class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>


            <div class="mb-4">
              <label for="steps" class="block text-gray-700 font-semibold">Cooking Steps</label>
              <textarea id="steps" name="face" onChange={change} rows="6" placeholder="Describe the steps to cook the recipe" class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>


            <div class="flex justify-center">
              <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit Recipe</button>
            </div>
          </form>
        </div>

      </body>
    </div>
  )
}

export default RecipeForm
