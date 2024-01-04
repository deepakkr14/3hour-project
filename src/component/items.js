import React, { useState} from "react";
const Items = (props) => {
//   console.log(props.data);
  let total=0
  props.data.map(item => ( total+=Number(item.price)))
  const handleDelete=(e)=>{
props.del(e)
  }
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {props.data.map(item => (
            <>
          <li key={item.orderid}> Description:{item.description}|Price: {item.price}| id:{item.orderid}</li>
          <button  onClick={() => handleDelete(item.orderid)}>delete</button></>
        ))}
      </ul>
      total:{total}
    </div>
  );
  
};
export default Items;
