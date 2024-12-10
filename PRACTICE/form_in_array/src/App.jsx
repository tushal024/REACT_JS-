import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Show from './show'

function App() {

  let [obj, setobj] = useState({
    name: "",
    number: '',
    hobby: [""]

  })


  let[arr,setarr]=useState([])

  function handel(t) {

    let { name, value, dataset } = t.target


    if (name == "hobby") {

      let hob = [...obj.hobby]
      hob[dataset.index] = value

      setobj({ ...obj, hobby: hob })

    }
    else{
      setobj({ ...obj, [name]: value })

    }
   



    // console.log(t.target);


  }


  function sub(t) {
    t.preventDefault()
    // console.log(obj);

    setarr([...arr,obj])
    console.log(arr);
    


  }
  function add() {
    setobj({ ...obj, hobby: [...obj.hobby, ""] })
  }

  return (
    <>


      <form action="" onSubmit={sub}>

        <input type="text" placeholder='name....' onChange={handel} name="name" id="" /> <br />
        <input type="text" placeholder='number....' onChange={handel} name="number" id="" /> <br />
        <input type="button" onClick={add} value={"Add"} name="" id="" />
        {obj.hobby.map((t, index) => {

          return (
            <>
              <input type="text" placeholder='Hobby...' name="hobby" onChange={handel} data-index={index} id="" />
              <br />
            </>
          )
        })    }

        <br /><br />

        <input type="submit" onChange={handel} name="" id="" /> <br />
      </form>

        <Show  data={arr} />
    </>
  )
}

export default App
