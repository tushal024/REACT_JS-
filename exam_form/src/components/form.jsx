import { useState } from "react"


function Form(){

    

    let[b1,setb1]=useState(true)
    let[b2,setb2]=useState(true)
    let[b3,setb3]=useState(true)
    let[b4,setb4]=useState(true)

    let[ss,setss]=useState(true)
    
    let[obj,setobj]=useState({
        p_name:"",
        price:"",
        des:"",
        img:""

    })


    function change(t){

        let {name,value}= t.target

     
        

        setobj({...obj,[name]:value})

    }

    

    function foc(t){
        let{name,value}=t.target
        
        if(name==  "p_name"){
            setb1(true)
        }
        if(name==  "price"){
            setb2(true)
        }
        if(name==  "des"){
            setb3(true)
        }
        if(name==  "img"){
            setb4(true)
        }
        

       
    
    }

    function blar(t){
        let{name,value}=t.target
        
        
        if(name  == "p_name" && value.length  <  3){
            
            setb1(false)
            console.log(b1);

        }

        if(name  == "price" && value >=  0  ){
            
            setb2(false)
            console.log(b1);

        }

        if(name  == "des" && value.length >  300  ){
            
            setb3(false)
            console.log(b1);

        }

        if(name  == "img" && value.length   <=  0    ){
            
            setb4(false)
            console.log(b1);

        }


    
    }



    function sub(t){
        t.preventDefault()
        let{name,value}=t.target

        console.log("success....");
        
       

        console.log(obj);

        
    }




    return(
        <>
            <div className="main">
                
                <form action="" onSubmit={sub}>
                    <h1 className="cc">Add Product</h1>


                    <input type="text"  onFocus={foc}  onBlur={blar}  onChange={change} name="p_name"    placeholder="Product Name..."   /><br />
                    {b1  ==  false ? <p  className="ppp"  >  Enter Product Name... </p> : ""  }
                    <input type="text" onBlur={blar}       onFocus={foc} onChange={change}   name="price" placeholder="Product Price..." /><br />
                    {b2  ==  false ? <p  className="ppp"  > Enter Product Price... </p> : ""  }
        

        <select name="Category" onChange={change} id="">



            <option value="Electronics">  Electronics </option>
            <option value="Clothing">  Clothing</option>
            <option value="Groceries"> Groceries </option>
            <option value="Books"> Books </option>
        </select>




                    <input type="text" onBlur={blar}     onFocus={foc} onChange={change} name="des"  placeholder="Description..." /><br />
                    {b3  ==  false ? <p  className="ppp"  > Enter Description...  </p> : ""  }
                    <input type="text" onBlur={blar}     onFocus={foc} onChange={change} name="img"  placeholder="Product Image..." /><br />
                    {b4  ==  false ? <p  className="ppp"  >  Enter Product Image... </p> : ""  }
                    <input type="submit"  className="bt"    id="but"  placeholder="" /><br />



                </form>
                </div>    
        </>
    )
}




export default Form