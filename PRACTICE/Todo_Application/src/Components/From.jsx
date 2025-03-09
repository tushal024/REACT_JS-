import React, { useState } from 'react'
// import { uid } from 'uid';
import { v4 as uuidv4 } from 'uuid';


const From = () => {
    let [obj,setobj]=useState({ value1 : "" }) 
    let [ED,setED]= useState("")
    

    let [Des,setDes]=useState([])
    // let a= 1

    const sub=(e)=>{
            e.preventDefault()

            if(ED==""){
                setobj({...obj,Id:uuidv4()})
                setDes([...Des,obj ])
                console.log(Des);

            }

        else{

          let ok=  Des.map((e)=>{
                if(e.Id== ED){
            

                return {...e,...obj}
         
                }
                else{
                    return e
                }

                // return e
            })
            console.log(ok);
            

            setDes(ok)



          
           

                
        }
    }








        const change =(e)=>{

             let {value} = e.target

            //  console.log(value);
             setobj({...obj,value1: value})

            //  setDes([...Des,{Task:value}])



             

        }


        let Delete=(id)=>{

            let nn=  Des.filter((e)=>{

                        return  e.Id!= id

            })

            setDes(nn)

        }

        let EDIT=(id)=>{
                setED(id)

         let nn=   Des.filter((e)=>{

            if(e.Id== id){

                setobj(e)
                console.log(e.value1);
                
            }

             return e 
            })


        }

  return (
    <div>
    <form onSubmit={sub} className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg space-y-4">
  <div>
    <label htmlFor="input1" className="block text-sm font-medium text-gray-700">Input 1</label>
    <input
      id="input1"
      type="text"
      value={obj.value1}
      placeholder="Enter value"
      onChange={change}
      className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* You can add other inputs here similarly if needed */}

  <div>
    <button
      type="submit"
      className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Submit
    </button>
  </div>
</form>



      <div>
        {
            Des.map((e)=>{
                return (
                    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg mb-4">
                 <span> {Des.length} </span>   <span className="text-lg font-medium text-gray-800">{e.value1}</span>
                    
                    <div className="space-x-2">
                      <button 
                        onClick={() => Delete(e.Id)} 
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                      >
                        DELETE
                      </button>
                      
                      <button 
                        onClick={() => EDIT(e.Id)} 
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
                      >
                        EDIT
                      </button>
                    </div>
                  </div>
                  

                )
            })
        }
      </div>
    </div>
  )
}

export default From
