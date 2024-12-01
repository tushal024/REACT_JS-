import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  
  let [arr, setarr] = useState([])
  return (
    <>

      {
        useEffect(() => {
          fetch(`https://fakestoreapi.com/products`)
            .then((r) => {
              return r.json()
            })
            .then((res) => {
              setarr(res)

            })
            .catch((er) => {
              console.log(er);

            })
        }, [])

    
      }
      {console.log(arr)}

<div id='main' className='flex justify-evenly  flex-wrap'>
      {arr.map((e)=>{
        return <div className='w-[23%] border-[black] flex-wrap flex justify-evenly border rounded-[10px] p-[10px]'>
          <img src={e.image} alt=""  width='200px'  /> 
          <h4 className='mt-[20px]'>{e.title}  </h4>
          <p> $ {e.price} </p>
           </div>
      })}
</div>
    </>
  )


}

export default App



