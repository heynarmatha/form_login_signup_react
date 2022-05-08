import "./App.css";
import Login from "./components/login";
import Sign from "./components/signup";
import React, { useState } from "react";
// import Media from './components/socialMedia';
const App = () => {
  console.log("Rendering parent ");
  const [loginStyle, setLoginStyle] = useState(true);

  return (
    <div className="form">
      {/* <Media/> */}
      {loginStyle && (
        <Login
          clickHanger1={() => {
            setLoginStyle(false);
          }}
        />
      )}
      {!loginStyle && (
        <Sign
          signHanger={() => {
            setLoginStyle(true);
          }}
        />
      )}
    </div>
  );
};

export default App;
