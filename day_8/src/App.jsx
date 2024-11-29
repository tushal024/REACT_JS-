import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [swap, setswap] = useState("hide")
  let [s_email, sets_email] = useState("")
  let [s_pass, sets_pass] = useState("")
  let [s_user, sets_user] = useState("")
  
  let [email, setemail] = useState("")
  let [pass, setpass] = useState("")

  let [arr, setarr] = useState([])


  let obj = {

    s_email,
    s_pass
  }


  function data() {
    setarr([...arr, obj])
    console.log(arr);
    setswap("hide")


    sets_user("")
    sets_email("")
    sets_pass("")

  }

 function match1(){

   let tt=   arr.filter((e)=>{
        if(e.s_email==email && e.s_pass==pass){
           
          return e
        }
       
      })


      if(tt.length>0){
        alert("Success....")
      }
      else{
        alert("noooooooo")
      }

      setemail("")
      setpass("")
 }





return (<>

  {swap == "hide" ? <>
    <h1>
      Login Form   </h1>
    <input type="text" placeholder='Email...'     value={email}     name="" id="" onChange={(e) => { setemail(e.target.value) }} /> <br />  <br />
    <input type="text " placeholder='Password...'     value={pass}     name="" id="" onChange={(e) => { setpass(e.target.value) }} /> <br />  <br />
    <button onClick={match1}>Login </button> <br />  <br />

    <p onClick={() => setswap("t")}>Create An Account</p> </>

    : <>   <h1>Signup Form</h1>

      <input type="text" placeholder='Username...'      value={s_user}    name="" id="" onChange={(e) => { sets_user(e.target.value) }} /> <br />  <br />
      <input type="text" placeholder='Email...'     value={s_email}     name="" id="" onChange={(e) => { sets_email(e.target.value) }} /> <br />  <br />
      <input type="text " placeholder='Password...'     value={s_pass}     name="" id="" onChange={(e) => { sets_pass(e.target.value) }} /> <br />  <br />
      <button onClick={data}>signup </button> <br />  <br />

      <p onClick={() => setswap("hide")}>Go To Login</p>

    </>}

</>
);
}

export default App;
