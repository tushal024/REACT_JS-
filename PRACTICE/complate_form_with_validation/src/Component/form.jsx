import { useEffect, useRef, useState } from "react"
import Show from "./show"

 
 
function Form(){

    let [obj,setobj]=useState({
        name:"",
        email:"",
        pass:""
    })

    let[arr,setarr]=useState([])

    function inp(t){

        let {name,value}= t.target


        setobj({...obj,[name]:value})
        // console.log(name);


        

      
    }
    
    function sub(e){
        e.preventDefault();
        
        // console.log(obj);
        setarr([...arr,obj])
        console.log(arr);



        ss.current.value = ""
        
        ss1.current.value = ""
        
        ss2.current.value = ""
        
        
    }
    
    let ss=useRef(null)
    let ss1=useRef(null)
    let ss2=useRef(null)


   
    // let[ss,setss]=useState("")

// useEffect(()=>{
//     document.getElementById("i1").style
            
// },[])

    return(
        <>
         <form action=""   onSubmit={sub} className="w-[500px] m-[auto] border border-black pt-[20px] pb-[20px]">
            <h1 className="text-center text-[30px] mb-[18px] underline">...SignUp Form...</h1>
        <input      ref={ss}       type="text" id="i1" placeholder="Enter Name... " autoFocus    className="  border border-[black] ps-[20px]  h-[40px]  ms-[5%] rounded-[10px] w-[90%] "   name="name"  onChange={inp} /> <br /><br />
        <input         ref={ss1}     type="text" placeholder="Enter Email... "   className="  border border-[black] ps-[20px]  h-[40px]  ms-[5%] rounded-[10px] w-[90%] "   name="email"  onChange={inp} /> <br /><br />
        <input         ref={ss2}     type="text" placeholder="Enter Password... "   className="  border border-[black] ps-[20px]  h-[40px]  ms-[5%] rounded-[10px] w-[90%] "   name="pass"  onChange={inp} /> <br /><br />
        <input            type="submit" className="mt-[10px]   w-[50%] ms-[25%] border border-[black] rounded-[10px]  bg-[gray] text-[20px] text-[white] h-[40px] " name="" id="" />
        </form>

        <Show  pass={arr} />
        </>

    )
}


export default Form