import React, { useState} from "react";
const Items = (props) => {
//   console.log(props.data);
  let total=0
  props.data.map(item => ( total+=Number(item.price)))
  const del=(e)=>{
props.del(e.target.orderid)
  }
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {props.data.map(item => (
            <>
          <li key={item.orderid}> Description:{item.description}|Price: {item.price}| id:{item.orderid}</li>
          <button  onClick={del}>delete</button></>
        ))}
      </ul>
      total:{total}
    </div>
  );
  
};
export default Items;
