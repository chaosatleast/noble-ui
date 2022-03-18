import React,{useState} from "react";
import { ReactDOM } from "react";
import {useNavigate} from "react-router-dom";
import vector2 from './picture/vector-2-1@2x.png'
import vector1 from './picture/vector-1-1@2x.png'
import customerService from './picture/clip-customer-service.png';


function Login(){

    
    let navigator = useNavigate();

    const userDb = {
        email: "a123@gmail.com",
        password: "a123"
    };
    
    const [error,setError]=useState("");

    const [user , setUser] = useState({
        email : "",
        password : ""
    });

    const submitHandler = e => {
        e.preventDefault();

        if (user.email === userDb.email && user.password === userDb.password){
            console.log("Logged in")
            navigator('/dashboard')
        }
        else{
            console.log("Details do not matched!")
            setError("Details do not matched!")
            
        }
        

    }
    console.log(user);

    return (
        <div className="Login">
            <img className="vector-2"src={vector2} alt="vector-2"></img>
            <img className="vector-1" src={vector1} alt="vector-1"></img>
            <div className="Login-header">
                
            <div className="container">
                <div className="row">
                    <div className="col">
                     <div className="Login-form">
                     <form onSubmit={submitHandler}>
                        <h1>ABC&nbsp;<span style={{display:'inline',color:"#3D4CFD"}}>Customer Service</span></h1>
                        <br></br>
                        <p>Welcome back! Log in to your account.</p>
                        <br></br>
                        {(error !== "")? (<div className="error" style={{color:'red'}}>{error}</div>) :""}
                            <div className="input-container">
                                <label>Email: </label>
                                <input type="email" name="email" id="email" required onChange={e =>setUser({...user, email: e.target.value})} value={user.email} />
                            </div>
                            <br></br>
                            <div className="input-container">
                                <label>Password: </label>
                                <input type="password" name="password" id="password" required onChange={e =>setUser({...user, password: e.target.value})} value={user.password} />

                            </div>
                            <br></br><br></br>
                            <button type="submit">LOGIN</button>
                    </form>
                     </div>
                    </div>
                    <div className="col">
                        <div className="customer-Service">
                        <img src={customerService} alt="customer service"></img>
                        </div>
                    </div>
                </div>
                    
                
            </div>
                
                

            </div>
        </div>
    );
}

export default Login;