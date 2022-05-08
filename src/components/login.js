import { useState } from "react";
import Media from './socialMedia';
const Login = ({ clickHanger1}) => {
  console.log(" **************rendering login component**************");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  return (
    <div className="login">
      <div className="form-login">
        <h1 className="heading">Login</h1>
        <h6 className="title">Username</h6>

        <input className="user" placeholder="Type your usename"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <h6 className="title">Password</h6>

        <input className="password-icon" placeholder="Type your password"
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        <h4 className="forgot">Forgot password?</h4>
        <button
          className="login-btn"
          onClick={() => {
            if((username !=="" && password !== "")) 
                alert(`UserName :  ${username}     PassWord:  ${password}  `);
            else 
                alert("Invaild Form")
          }}
        >
          LOGIN
        </button>
        <h6 className="sign-up">Or Sign Up Using</h6>
         <Media/> 
        <h6 className="sign-up signing">Or Sign Up Using</h6>
        <p className="btn-sign-up" onClick={(e) => {clickHanger1(e)}}>
          SIGN UP
        </p>
      </div>
    </div>
  );
};

export default Login;
