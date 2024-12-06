import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Show from './ss'


function App() {

  let[arr,setarr]=useState([])
  

  let data = useRef("")
  let data1 = useRef("")
  let data2 = useRef("")

  function sub(e){
    e.preventDefault()

    let obj={
      title:data.current.value,
      price:data1.current.value,
      img:data2.current.value
      
    }
    console.log(obj)
    setarr([...arr,obj])
    console.log(arr);
    
    // console.log(data.current);

  }


  return (
    <>

    <form action=""  className=' rounded-[20px] pb-[20px] text-center w-[500px] m-[auto] border bg-[#FBFBFB]  mt-[10px]' onSubmit={sub}>

      <input type="text"    ref={data}  className="border border-[gray]   mt-[30px]     ps-[20px]  w-[80%] h-[35px] rounded-[5px] "   /> <br /><br />
      <input type="text" ref={data2}       /> <br /><br />
      <input type="text"  ref={data1}      /> <br /><br />
      <input type="submit"      name="" id="" />

    </form>
     <Show  arr={arr} />
  
    </>
  )
}

export default App
