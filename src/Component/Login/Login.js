import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import fb from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import './Login.css'

import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmail, createUserWithFacebook, createUserWithGoogle, initiaLize, signInWithEmail } from './LoginManage';
initiaLize();
const Login = () => {
    const[signInUser,setSignInUser]=useContext(userContext);
    const[newUser,setNewUser]=useState(true);
  
    const[user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        isSignedIn:false,
        error:'',
        done:false,
    })
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    let isRight=true;
    const handleBlur=(e)=>{
        if(e.target.name==='email'){
             isRight=/\S+@\S+\.\S+/.test(e.target.value);
             if(!isRight){alert("email ar anvalid")}
        }
        if(e.target.name==='password'){
            const pw=e.target.value;
            isRight=/[a-z]/.test(pw) &&/[0-9]/.test(pw) &&pw.length>4;
            if(!isRight){alert('At least one lowercase letter,one digit and should be more than 4 character')}
        }
        if(e.target.name==='repassword'){
            const pw=e.target.value;
            isRight=(pw===user.password);
            if(isRight===false){
                alert('password does not match');
            }
        }
      if(isRight){
         const userInfo={...user};
         userInfo[e.target.name]=e.target.value;
         setUser(userInfo);
      }
    }
const update=(res,value)=>{
    setUser(res)
    setSignInUser(res);
    if(value){
        history.replace(from);
    }
}
const signWithGoogle=()=>{
    createUserWithGoogle()
    .then(res=>{
        update(res,true);
    })
}
const signWithFacebook=()=>{
   createUserWithFacebook()
   .then(res=>{
     update(res,true);
   })
}
console.log(user);
 const handleSubmit=(e)=>{
        if(newUser && user.email && user.password){
           createUserWithEmail(user.email,user.password,user.name)
           .then(res=>{
               update(res,true);
           })
        }
      if(!newUser && user.email && user.password){
         signInWithEmail(user.email,user.password)
         .then(res=>{
             update(res,true);
         })
        } 
      e.preventDefault();
    }
  return(
<div className="container-md">
     <div className="main-container">
        <form onSubmit={handleSubmit} className="signInForm">
           {newUser?  <h5>Create an account</h5>: <h5>Login</h5>}
          { newUser &&<input type="text" name="name" onBlur={handleBlur} placeholder="FirsName" required/>}
          { newUser && <input type="text" name="lastName" onBlur={handleBlur} placeholder="LastName" required />
           }
            <input  placeholder="Email" onBlur={handleBlur} name="email" required /><br/>
            <input type="password" onBlur={handleBlur} name="password" placeholder="Password" required/>
            <input type="password" onBlur={handleBlur} name="repassword" required placeholder="Confirm Password"/>
            <input type="submit" value="submit"/>
            <p>Already have a account?<span onClick={()=>setNewUser(!newUser)}>{newUser?'login':'signUp'}</span></p>
        </form>
            <div className="loginMethod" onClick={signWithFacebook}>
                <img style={{height:'25px'}} src={fb} alt=""/>
                <p>Continue with facebook</p>
            </div>
            <div className="loginMethod"  onClick={signWithGoogle}>
                <img style={{height:'25px'}} src={google} alt=""/>
                <p>Continue with google</p>
            </div>
         </div>
    </div>
    );
};
export default Login;