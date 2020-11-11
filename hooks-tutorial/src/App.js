import React, { useState } from "react";
//import Counter from "./Counter";
//import Info from "./Info";
//import CounterWithUseReducer from "./CounterWithUseReducer";
//import InfoWithUseReducer from "./InfoWithUseReducer";
import Average from "./Average";
//import RefSample from "./RefSample";
import CustomHookInfo from "./CustomHookInfo";

const App = () => {
  // return <Counter />;
  // return <CounterWithUseReducer />;
  // return <InfoWithUseReducer />;
  //return <RefSample />;
  return <CustomHookInfo />;
  /* const[visible, setVisible] = useState(false);
  return (
      <div>
        <button
          onClick={()=>{
            setVisible(!visible);
          }}
          >
          {visible?'숨기기':'보이기'}
          </button>
        <hr/>
        {visible && <Info />}
        </div>
  );*/
};

export default App;
