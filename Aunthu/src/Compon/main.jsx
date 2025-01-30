import React from 'react'
import { Google } from '../Firebase/Fire'

const Main = () => {

  function ss(){
    Google()
  }

  return (
    <div>
              <button  onClick={()=>ss()} >    Google  </button>      
    </div>
  )
}
export default Main