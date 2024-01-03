import Form from './component/form '
import React, { useState, useRef } from "react";

import Items from './component/items'
function App() {
  const [UserData, setData] = useState([]);
  const Products=(data)=>{

      setData((pdata) => {
        return [...pdata, data];
      });
  
      console.log(UserData);
console.log(data)
}
const delhandler=(idToDelete)=>{
// UserData.filter(e=>{
//   if (e.orderid !== data.orderid) {return e;}
// })
UserData = UserData.filter(item => item.id !== idToDelete);
}
  return (
    <>
   <Form datafn={Products} />
   <Items  data={UserData} del={delhandler}/>
   </>
  )
}

export default App;
