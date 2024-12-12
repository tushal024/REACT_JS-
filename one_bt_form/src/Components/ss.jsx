import { useState } from "react";
import ShowProduct from "./showProduct";
import Show from "./show";

function ProductForm() {
  let [state, setState] = useState({
    name: "",
    price: "",
    category: "",
    des: "",
    img: "",
  });

  let [nameErr, setnameErr] = useState(false);
  let [priceErr, setpriceErr] = useState(false);
  let [desErr, setdesErr] = useState(false);
  let [imgErr, setimgErr] = useState(false);
  let [on, seton] = useState(true);
  let [toggle, setToggle] = useState(true);

  let [arr, setarr] = useState([]);
  const handle = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

    // if (e.target.value > 3) {
    //   seton(false);
    // }
    if (
      nameErr == false &&
      priceErr == false &&
      desErr == false &&
      imgErr == false
    ) {
      seton(false);
    }
  };
  const SubmitClick = (e) => {
    e.preventDefault();

    if (
      nameErr == false &&
      priceErr == false &&
      desErr == false &&
      imgErr == false
    ) {
      setarr([...arr, state]);
      console.log(state);
      alert("form submit successfuly");
    } else {
      alert("place enter valide data");
      settoggle(false);
    }

    setState({
      name: "",
      price: "",
      category: "",
      des: "",
      img: "",
    });

    settoggle(true);
  };

  const handlefile = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png"].includes(file.type)) {
      setState({ ...state, img: file });
      setimgErr(false);
      console.log(file.type);
    } else {
      setimgErr(true);
    }
  };

  const blurClick = (e) => {
    let { name, value } = e.target;
    if (name == "name" && value.length < 3) {
      setnameErr(true);
    }
    if (name == "price" && value <= 0) {
      setpriceErr(true);
    }
    if (name == "des" && value.length > 200) {
      setdesErr(true);
    }
    if (name == "img") {
      setimgErr(true);
    }
  };
  const focusClick = (e) => {
    let { name } = e.target;
    if (name == "name") {
      setnameErr(false);
    }
    if (name == "price") {
      setpriceErr(false);
    }
    if (name == "des") {
      setdesErr(false);
    }
    if (name == "img") {
      setimgErr(false);
    }
  };
  const toggleForm = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button onClick={toggleForm}>
        {toggle ? "Show Form" : "Hide Form"}
      </button>
    {!toggle &&(   <form action="" onSubmit={SubmitClick}>
          <h3 id="title">PRODUCT FORM</h3>
          <input
            type="text"
            name="name"
            value={state.name}
            autoFocus
            placeholder="Product Name"
            onChange={handle}
            onBlur={blurClick}
            onFocus={focusClick}
          />
          <br />
          {nameErr == true ? <p>Must be at least 3 characters long.</p> : ""}
          <input
            type="number"
            name="price"
            value={state.price}
            placeholder="price"
            onChange={handle}
            onBlur={blurClick}
            onFocus={focusClick}
          />
          <br />
          {priceErr == true ? <p>Must be a positive number.</p> : ""}
          <select name="category" value={state.category} onChange={handle}>
            <option value="">Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="grocerise">Grocerise</option>
            <option value="books">Books</option>
          </select>
          <br />
          <input
            type="text"
            name="des"
            value={state.des}
            placeholder="Description"
            onChange={handle}
            onBlur={blurClick}
            onFocus={focusClick}
          />
          <br />
          {desErr == true ? <p>Maximum of 200 characters.</p> : ""}

          <input
            type="file"
            name="img"
            placeholder="Image"
            onChange={handlefile}
          />
          <br />
          {imgErr == true ? (
            <p>Must only accept image files (JPEG, PNG).</p>
          ) : (
            ""
          )}
          <input type="submit" id="submit" disabled={on} />
        </form>)}

        {toggle && (
        <div><Show data={arr} /></div>)}
      
    </>
  );
}

export default ProductForm;