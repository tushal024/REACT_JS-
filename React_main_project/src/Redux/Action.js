


  export function FetchData(dispatch,arr){


    dispatch({type:"loading"})
    fetch("http://localhost:3000/data",{
        method:"POST",
        headers:{
            "Content-Type":"Application/json",
        },
        body:JSON.stringify(arr)
    })
    .then((e)=>{
        console.log(e.R_title);
        
    })
    .catch((error)=>{
        console.log(error);
        
    })

}



