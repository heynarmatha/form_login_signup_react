import { useState } from "react";
import Media from './socialMedia';

const Sign = ({ signHanger }) => {
  console.log("**************rendering signup component************");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="login">
      <div className="form-login">
        <h1 className="heading">Sign Up</h1>

        <h6 className="title">Username</h6>
        <input className="user" placeholder="Type your usename"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <h6 className="title">Email</h6>
        <input className="email-icon" placeholder="Type your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>

        <h6 className="title">Password</h6>
        <input className="password-icon" placeholder="Type your password"
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        <br></br>

        <button
          className="login-btn"
          onClick={() => {
            if((username !=="" && password !== "" && email !== "")) 
                alert(`UserName :  ${username}     PassWord:  ${password}     Email:  ${email}`);
            else 
                alert("Invaild Form")
          }}
        >
          Sign
        </button>

        <h6 className="sign-up">Or Sign Up Using</h6>
        <Media/>
        <p className="btn-sign-up" onClick={(e) => {signHanger(e)}}>
          LOGIN IN
        </p>
      </div>
    </div>
  );
};

export default Sign;
