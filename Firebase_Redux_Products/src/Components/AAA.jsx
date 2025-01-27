import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { Mydata } from '../Firebase/Fire';
import { useDispatch, useSelector } from 'react-redux';

const ProductForm = () => {
  const [obj, setObj] = useState({
    Title: '',
    Price: '',
    URL: '',
  });

  const [arr, setArr] = useState([]);
  let PR_id = localStorage.getItem('id');

  const sell = useSelector(st => st);
  const dispatch = useDispatch();

  const ID = sell.ProductData;

  // Sync Arr with ProductData
  useEffect(() => {
    setArr(ID);
  }, [ID]);

  // Update obj when PR_id is available and matches the data
  useEffect(() => {
    if (PR_id && arr.length > 0) {

        const product = arr.filter((e)=>{
          if(PR_id  ==  e.id   ){
            return e


          }                 
        })
        // console.log(product[0].id);
        
        setObj({
          Title: product[0].Title,
          Price: product[0].Price,
          URL: product[0].URL,

        })


      // const product = arr.filter((e) => e.id === PR_id)
      // if (product) {
      //   setObj({
      //     Title: product.Title,
      //     Price: product.Price,
      //     URL: product.URL,
      //   });
      // }
    }
  }, [PR_id, arr]);

  const change = (e) => {
    const { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  };

  const sub = (e) => {
    e.preventDefault();
    const dataCollection = collection(Mydata, 'ProductData');
    addDoc(dataCollection, obj);
  };

  return (
    <div>
      <h1>ProductForm</h1>
      <form onSubmit={sub}>
        <input
          type="text"
          placeholder="Product Title..."
          onChange={change}
          name="Title"
          value={obj.Title}
        />
        <br />
        <input
          type="text"
          placeholder="Product Price..."
          onChange={change}
          name="Price"
          value={obj.Price}
        />
        <br />
        <input
          type="text"
          placeholder="Product URL..."
          onChange={change}
          name="URL"
          value={obj.URL}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
