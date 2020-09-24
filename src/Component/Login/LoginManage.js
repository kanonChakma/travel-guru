import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

export const initiaLize=()=>{
    firebase.initializeApp(firebaseConfig);
}
export const createUserWithEmail=(email,password,name)=>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res=>{
    const userInfo=res.user;
        userInfo.error='';
        userInfo.name=name;
        // userInfo.done=true;
        // userInfo.isSignedIn=true;
        updateProfileInfo(name)
        return userInfo;
    })
    .catch(error=>{
    const userInfo={}
     userInfo.error=error.message;
     userInfo.isSignedIn=false;
     userInfo.done=false;
     return userInfo;
    });
 }
 const updateProfileInfo=(name)=>{
    let user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
    }).then(function() {
       console.log("updated name")
    }).catch(function(error) {
      console.log(error.message)
    });
 }
export const signInWithEmail=(email,password)=>{
   return firebase.auth().signInWithEmailAndPassword(email,password)
           .then(res=>{
           const userInfo=res.user;
                userInfo.error='';
                userInfo.done=true;
              return userInfo;
           })
           .catch(error=>{
           const userInfo={}
            userInfo.error=error.message;
            userInfo.isSignedIn=false;
            userInfo.done=false;
            return userInfo;
           });
}
export const createUserWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res=>{
        const{displayName,email}=res.user;
    const userInfo={
         name:displayName,
         email:email,
         done:true,
         isSignedIn:true,
         }
        return userInfo;
    })
    .catch(error=>{
       console.log(error.message);
    });
 }
 export const createUserWithFacebook=()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(result=>{
        const{displayName,email}=result.user;
         const userInfo={
             name:displayName,
             email:email,
            done:true,
            isSignedIn:true,
            }
         //if user login with mobile number
          if(userInfo.email===null){userInfo.email="k1@gmail.com"}
           return userInfo;
      })
    .catch(function(error){
        console.log(error.message);
      });
 } 