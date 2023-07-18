
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [show, setshow] = useState(false)
  return (
    <div >
      {/* Do not remove the main div */}
      <button onClick={()=>setshow(true)}>Show Modal</button>
      {show && (<Modal setshow={setshow}/>)}

    </div>
  )
}

export default App
