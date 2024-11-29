import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [swap,setswap]=useState("hide")
  let [user,setuser]=useState("")
  let [email,setemail]=useState("")
  let [pass,setpass]=useState("")

  let [arr,setarr]=useState([])

  let [email1,setemail1]=useState("")
  let[pass1,setpass1]=useState("")

  
  

  
  
  
  function data(){

    let obj={
      user,
      email,
      pass
    }
    

    
    setarr([...arr,obj])

    console.log(arr);
    
  setemail1("")
  setpass1("")

  setuser("")
  setemail("")
  setpass("")


  alert("Signup Success...")
  setswap("hide")
  
  }

  // console.log(email1);
  // ()


  function match(){
       let a= arr.filter((el)=>{
      if(el.email  == email1  && el.pass== pass1){


        return el
        
      }
     
    })

  if(a.length>0){
    alert("Login  success..")
  }
  else{
    alert(" Login  unsuccess....")
  }

  
  setemail1("")
  setpass1("")

  setuser("")
  setemail("")
  setpass("")
    
  }



  return (
    <>
  {swap=="hide"? <>   <div id="div1">
    <h1>Login</h1>
  <input type="text" name="" id=""  value={email1}  onChange={(e)=>  setemail1 (e.target.value)}  />  <br />
  <input type="text" name="" id=""  value={pass1  }  onChange={(e)=> setpass1  (e.target.value)} /> <br />
  <button onClick={match}> Login</button>

  <p onClick={()=>setswap("t")}>Create An Account</p>
  
  </div>
  </>  :   <><div id="div1"> 
    <h1>SignUp</h1>
  <input type="text" name="" id=""  value={user}   onChange={(e)=> setuser(e.target.value) } />  <br />
  <input type="text" name="" id=""  value={email}   onChange={(e)=> setemail(e.target.value) } /> <br />
  <input type="text" name="" id=""  value={pass}   onChange={(e)=> setpass (e.target.value) } /> <br />
  
  <button onClick={data}>SignUp</button>

  <p onClick={()=>setswap("hide")}>Got to Login</p>
  </div>
  </> }  
    </>
  )

 
}

export default App;
