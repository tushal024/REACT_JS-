import React, { useEffect, useState } from 'react'

const Index = () => {
    let [arr, setarr] = useState([])
    let [n_arr, setn_arr] = useState([])
    let [s1, sets1] = useState("")
    let [f, setf] = useState("")
    let [W, setW] = useState("")

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((r) => {
                return r.json();
            })
            .then((res) => {
                console.log(res);
                setarr(res)
                setn_arr(res)

            })
            .catch((er) => {
                console.log(er);

            })

    }, [])


    useEffect(() => {
        let tt = [...arr]
        // console.log(e)


        if (s1 == "HTL") {
            tt = tt.sort((t, s) => {
                return t.price - s.price
            })

        }
        else if (s1 == "LTH") {
            tt = tt.sort((t, s) => {
                return s.price - t.price
            })

        }

       
        if(f){

            tt = tt.filter((e) => {
                return e.category == f
            })
    
        }

        
        

        if(W){

            

        tt = tt.filter((e) => {

            // return e.title.includes(W)
            return e.title.toLowerCase().includes(W.toLowerCase())
        })


        }
        


        


        console.log(W);


        // console.log(W);
        // if (W) {


        // }



        console.log(tt)
        setn_arr(tt)
        console.log(s1);



    }, [s1, f, W])




    return (
        <div>
            <input type="text" onChange={(e) => setW(e.target.value)} />


            <select name="" id="" onChange={(e) => sets1(e.target.value)}>
                <option value="">  Sort By Price </option>
                <option value="HTL">High To Low</option>
                <option value="LTH">Low To High </option>
            </select>


            <select name="" id="" onChange={(e) => setf(e.target.value)} >
                <option value="electronics"> electronics  </option>
                <option value="jewelery">  jewelery </option>
            </select>

            {n_arr.map((e) => {
                return (
                    <div>
                        <img src={e.image} alt="" width={"200px"} />
                        <h3>  {e.price} </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Index
