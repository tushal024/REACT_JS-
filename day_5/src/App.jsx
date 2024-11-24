
import { useState } from 'react';
import './App.css';
// import CreatAccount from './creatAccount';
import Header from './header';
import Footer from './footer';




function App() {

  let [state,setState]=useState("log")



  function Login(){
    return <div>  <Header/>
    <div className='login'>
     <div className='logA'>
      <h1>Login</h1>
      <p>Get access to your Orders, Wishlist and Recommendations</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
     </div>
     <div className='logB'>
      <form action="">
        <input type="text" placeholder='Enter Email/Mobile nimber'/>
        <p>By continuing, you agree to Flipkart's <span className='text-[#2874F0]'>Terms of Use</span> and <span className='text-[#2874F0]'>Privacy Policy.</span></p>
        <button className='submit'>Request OTP</button>
        <br/>
        <button className='loginbutton' onClick={()=>setState("sign")} >New to Flipkart? Create an account</button>
       
      </form>
     </div></div> 
    <Footer/>
     </div>
  }

  function Signup(){


    return <>
    
    <Header/>
      <div className='signup'>
    <div className='signA'>
    <h1>Looks like you're new here!</h1>
      <p>Sign up with your mobile number to get started</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
    </div>
    <div className='signB'>
      <form action="">
        <input type="text" placeholder='Enter Mobile nimber'/>
        <p>By continuing, you agree to Flipkart's <span className='text-[#2874F0]'>Terms of Use</span> and <span className='text-[#2874F0]'>Privacy Policy.</span></p>
        <button className='submit'>COUNTINUE</button>
        <br/>
        <button className='signupbutton ' onClick={()=>setState("log")} >Existing User? log in</button>
       
      </form>
    </div>
    </div>
  <Footer/>

   
  
  
    </>
  }


  return (<div>
  <div className="App">
      { state=="log" ?<Login/>:<Signup/> }
  </div>

  </div>
 
  );
}

export default App;