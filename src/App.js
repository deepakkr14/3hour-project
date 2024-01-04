import Form from './component/form '
import React, { useState } from "react";

import Items from './component/items'
function App() {
  let [UserData, setData] = useState([]);
  const Products=(data)=>{

      setData((pdata) => {
        return [...pdata, data];
      });
}
const delhandler=(idToDelete)=>{
UserData = UserData.filter(item => { 
  return item.orderid !== idToDelete})
setData(UserData)
localStorage.removeItem(idToDelete)
}
  return (
    <>
   <Form datafn={Products} />
   <Items  data={UserData} del={delhandler}/>
   </>
  )
}

export default App;
