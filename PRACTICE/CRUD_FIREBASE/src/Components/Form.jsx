import React, { useState } from 'react'
import { Add } from '../Redux/Action'

const Form = () => {

    let [obj, setobj] = useState({

        Title: "",
        price: "",
        URL: ""

    })

    function change(e) {
        let { name, value } = e.target
        setobj({...obj,[name]:value})
    }

    function sub(e) {
        e.preventDefault()

        Add(obj)
    }

    return (
        <div>
            <form action="" onSubmit={sub} >
                <input type="text" placeholder='Product Title' onChange={change} name='Title' value={obj.Title} />
                <input type="text" placeholder='Product Price' onChange={change} name='price' value={obj.price} />
                <input type="text" placeholder='Product URL ' onChange={change} name='URL' value={obj.URL} />
                <input type="submit" />

            </form>
        </div>
    )
}

export default Form
