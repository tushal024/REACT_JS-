

let st= {
    "loading":true,
    "success":""
}

  export let MyReducer = ((state,{type,payload})=>{

        switch (type) {
            case "loading" :
                return ({...state , "loading":true    })
                
             case  "success":
                return ({...state , "loading":false,"success":true    })

        
            default: return state
                
        }
})