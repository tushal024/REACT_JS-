import { useState } from 'react'
import "./App.css"
import Show from './show'
function App() {


  let[obj,setobj]=useState({
    name:"",
    tech:[""]

  })

  let[arr,setarr]=useState([])
    
  function change(t){
    let {name,value} = t.target
    setobj({...obj,[name]:value})
  }


  function sub(e){
    e.preventDefault()

    setarr([...arr,obj])
    
  }

  function add(){

    setobj({...obj,tech:[...obj.tech,""]})
  }

  return(
    <>
    <form action="" onSubmit={sub}>
    <input   onChange={change}  type="text" name="name" id="" /> <br />

  
  <input type="button"  onClick={add}   value={"add"} name="" id="" />

{
  obj.tech.map((t)=>{
    return(
      <>
            <input   onChange={change}  type="text" name="tech" id="" /><br />    
      </>
    )
  })
}

  
    <input type="submit" name="" id="" />

    </form>

<Show  data={arr} />
    </>

  )
}

export default App