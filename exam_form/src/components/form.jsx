import { use } from "react"
import { useState } from "react"
import Show from "./show"

function ProductForm() {
    let [state, setState] = useState({
        name: "",
        price: "",
        category: "",
        des: "",
        img: ""
    })

    let[mbt,setmbt]=useState(true)

    

    let[ss,setss]=useState(true)
    let [nameErr, setnameErr] = useState(false)
    let [priceErr, setpriceErr] = useState(false)
    let [desErr, setdesErr] = useState(false)
    let [imgErr, setimgErr] = useState(false)
    

    let [arr, setarr] = useState([])


    const handle = (e) => {

        const { name, value } = e.target

        setState({ ...state, [name]: value })

        if( e.target.value>0 ){

            setss(false)

        }

        console.log(e.img);
        


    }
    const SubmitClick = (e) => {
        e.preventDefault()
        setarr([...arr, state])
        console.log(state)
        // alert("form submit successfuly")

        if (nameErr == false && priceErr == false && desErr == false) {
        
            alert("form submit successfuly")
        }
        else {

            alert("place enter valide data")

        }

        setState({
            name: "",
            price: "",
            category: "",
            des: "",
            img: ""
        })


        setmbt(true)

    }
    const blurClick = (e) => {
        let { name, value } = e.target
        if (name == "name" && value.length < 3) {
            setnameErr(true)

            document.getElementById("brr").style.borderBlockColor = "red"
        }
        if (name == "price" && value <= 0) {
            setpriceErr(true)

            document.getElementById("brr1").style.borderBlockColor = "red"
        }
        if (name == "des" && value.length > 200) {
            setdesErr(true)
            document.getElementById("brr3").style.borderBlockColor = "red"
        }
        if (name == "img") {
            setimgErr(true)
        }
    }

    const focusClick = (e) => {
        let { name } = e.target
        if (name == "name") {
            setnameErr(false)
              document.getElementById("brr").style.borderBlockColor = "black"
        }
        if (name == "price") {
            setpriceErr(false)
             document.getElementById("brr1").style.borderBlockColor = "black"
        }
        if (name == "des") {
            setdesErr(false)
        }
        if (name == "img") {
            setimgErr(false)
        }

    }
    function hs(){
        setmbt(false)
    }

    let img_show=(t)=>{

        let file = t.target.file[0]
        if(file && ["img/jpeg","img/png"].includes(file.type) ){

            setState({...state,img:file})
            setimgErr(false)  
        }
        else{
                setimgErr(true)                
        }
        console.log(file);
         
    }
    return <>

    { mbt== true ?      <button onClick={hs}  > Add Product </button>    : 
    
    <form action="" className="main" onSubmit={SubmitClick}>
    <h3 className="cc">...PRODUCT FORM...</h3>
    <input type="text" id="brr" autoFocus name="name" value={state.name} placeholder="Product Name" onChange={handle} onBlur={blurClick} onFocus={focusClick} /><br />
    {nameErr == true ? <p className="ppp" >Must be at least 3 characters long.</p> : ""}
    <input type="number" id="brr1" name="price" value={state.price} placeholder="price" onChange={handle} onBlur={blurClick} onFocus={focusClick} /><br />
    {priceErr == true ? <p className="ppp" >Must be a positive number.</p> : ""}
    <select name="category" value={state.category} onChange={handle}>
        <option value="">Category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="grocerise">Grocerise</option>
        <option value="books">Books</option>
    </select><br />
    <input type="text" id="brr3" name="des" value={state.des} placeholder="Description" onChange={handle} onBlur={blurClick} onFocus={focusClick} /><br />
    {desErr == true ? <p className="ppp" >Maximum of 200 characters.</p> : ""}
    <input type="file" id="" name="img"  placeholder="Image" onChange={img_show} onBlur={blurClick} onFocus={focusClick} /><br />
    {imgErr == true ? <p className="ppp" >Must only accept image files (JPEG, PNG).</p> : ""}
    <input  disabled={ss} className="v"  type="submit" id="but" />
    </form>
    
    }

       

    {   mbt== true ? <Show  pass={arr} />  : "" }
   
    </>
}




            export default ProductForm