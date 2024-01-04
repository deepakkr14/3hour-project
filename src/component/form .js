import React, { useState } from "react";
import "./form.css";
const Form = (props) => {
    const data=[]

  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [orderid, setOrderid] = useState("");
  const addItem = (event) => {
    event.preventDefault();
    const dataObj = {
      price: price,
     description: name,
      orderid: orderid,
    };
    const dataObjpsrsed =JSON.stringify({
      price: price,
     description: name,
      orderid: orderid,
    });
    data.push(dataObj)
    localStorage.setItem(orderid,dataObjpsrsed);
    props.datafn(dataObj)
  };
  const Namevalue = (name) => {
    setName(name.target.value);
  };
  const orderValue = (name) => {
    setOrderid(name.target.value);
  };
  const Amountvalue = (name) => {
    setPrice(name.target.value);
  };

  return (
    <div>
      <form className="form">
        <label htmlFor="item">Product Name</label>
        <input type="text" id="item" value={name} onChange={Namevalue} />

        <label htmlFor="price">Selling price</label>
        <input type="number" id="price" value={price} onChange={Amountvalue} />


        <label htmlFor="orderid">Prioduct Id</label>
        <input type="number" id="orderid" value={orderid} onChange={orderValue}/>
       
        <button onClick={addItem}>Add price</button>
      </form>
     
            
    </div>
  );
};
export default Form;
