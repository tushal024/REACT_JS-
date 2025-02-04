import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RecipeList = () => {

  let [arr,setarr]= useState([])



useEffect(()=>{


 async function GetData(){
  await axios.get("http://localhost:3000/data")
    .then((e)=>{
      // console.log(e.data);
      setarr(e)
      
    })
  }

  GetData()
  
})



  return (
    <div>
     

     <div class="max-w-6xl mx-auto py-8">
    <h1 class="text-3xl font-bold text-center mb-6">Recipe List</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* <img src="https://via.placeholder.com/400x250" alt="Recipe 1" class="w-full h-56 object-cover"> */}
            <img src="" alt="" className="w-full h-56 object-cover"   />
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-800">Spaghetti Bolognese</h2>
                <p class="text-gray-600 mt-2">A classic Italian pasta dish with a rich and savory meat sauce.</p>
                <div class="mt-4">
                    <p class="text-sm text-gray-500">Prep Time: 15 mins</p>
                    <p class="text-sm text-gray-500">Cook Time: 45 mins</p>
                </div>
            </div>
        </div>
        
       
     

      
       
    </div>
</div>

    </div>
  )
}

export default RecipeList
