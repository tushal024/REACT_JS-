import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase'

const Product = () => {
    let [obj, setobj] = useState({
        title: "",
        url: "",
        price: ""

    })

    const [cool, setcool] = useState('')

    const [arr, setarr] = useState([])

    const ProductCollection = collection(db, "data")

    function change(e) {

        const { name, value } = e.target
        setobj({ ...obj, [name]: value })



    }




    useEffect(() => {
        getData()
    }, [])

    function sub(e) {
        e.preventDefault()

        console.log(obj);

        if (cool == '') {

            addDoc(ProductCollection, obj)
            getData()

        }
        else{

            let dd = doc(db, "data", cool)

            updateDoc(dd, obj)
            getData()


        }






    }
    const getData = async () => {

        let Alldata = await getDocs(ProductCollection)
        console.log(Alldata);

        let tt = Alldata.docs.map((e) => {
            return { id: e.id, ...e.data() }
        })

        setarr(tt)



        //  await getDocs(ProductCollection,"data")



    }



    function del(item_id) {

        let dd = doc(db, "data", item_id)
        deleteDoc(dd)
        getData()

    }



    function EDIT(ele_id) {
        setcool(ele_id)

        arr.forEach((e) => {
            if (e.id == ele_id) {
                setobj(e)
            }
        })

    }










    return (
        <div className='m-[auto] border ' >
            <form action="" onSubmit={sub} className='w-[400px] m-[auto] rounded-[5px] mt-[10px] border   text-center '   >
                <h1 className='mt-[10px] text-[20px] underline mb-[10px]  ' > Add Product   </h1>

                <input  className='border  p-[2px]  ps-[7px]  w-[90%]  rounded-[6px] border-[gray]  '  type="text" onChange={change} name='title' value={obj.title} placeholder='Product Title...  ' />   <br /><br />
                <input  className='border  p-[2px]  ps-[7px]  w-[90%]  rounded-[6px] border-[gray]  '  type="text" onChange={change} name='url' value={obj.url} placeholder='Product URL...' />   <br /><br />
                <input  className='border  p-[2px]  ps-[7px]  w-[90%]  rounded-[6px] border-[gray]  '  type="Number" onChange={change} name='price' value={obj.price} placeholder='Product Price...' />   <br /><br />
                {/* <button  onClick={()=>} >  DELETE </button> */}
                <input type="submit" className='w-[150px] mb-[10px] h-[30px] bg-[green] text-[white]  border rounded-[6px]'  />

            </form>

            <div className='mt-[10px]  flex  flex-wrap  justify-evenly '  >

                {
                    arr.map((e) => {
                        return (
                            <div className='w-[200px] border  mb-[10px] rounded-[7px] flex  flex-col p-[10px] ' >
                                <img src={e.ur} alt=""  className='w-[200px]  h-[200px] m-[auto]  ' />
                                {/* <p> {e.id} </p> */}

                                <p className='text-[20px]   ' > {e.title}    </p>
                                
                                <h4 className=' text-[18px] ' > $ {e.price} /- </h4>

                                <button onClick={() => del(e.id)}     className='border  w-[90%] m-[auto] mt-[4px] rounded-[7px] bg-[red] cursor-pointer    text-[white]  '  > DELETE  </button>
                                <button onClick={() => EDIT(e.id)}    className='border  w-[90%] m-[auto] mt-[4px] rounded-[7px]  bg-[#F7BB07] cursor-pointer  text-[white] '   >  EDIT </button>
                                {/* ...................... */}


                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Product
