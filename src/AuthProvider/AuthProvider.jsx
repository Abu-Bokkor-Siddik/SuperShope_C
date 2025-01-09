/* eslint-disable no-unused-vars */

import { createContext, useEffect, useState } from "react"
import { app } from "../../firebase"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext= createContext(null)
const auth = getAuth(app)
console.log(auth,'here auth')

const AuthProvider = ({children}) => {
    const [loading,setloading]=useState(true)
    const [user,setuser]=useState(null)
    // for data loading
    const [lodings,setloadings]=useState(false)

 // register 
 const register = (email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
 // login 
 const logins = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
  // logout 
  const logout = ()=>{
    setloading(true)
    return signOut(auth)
}
 // google
 const provider = new GoogleAuthProvider();

 const google =()=>{
     setloading(true)
     return signInWithPopup(auth,provider)
 }


  // onauthState 
  useEffect(()=>{
    const subricribe = onAuthStateChanged(auth, (currect) => {
        // const logeruser = {email:currect?.email}
        setuser(currect)
        setloading(false)
        // console.log('user ',logeruser)
        // if(currect){
           
        //     axios.post('https://assignment-pink-eight.vercel.app/jwt1',logeruser,{withCredentials:true})
        //     .then(res => {
        //       console.log(res.data)})
        // }else{
        //     axios.post('https://assignment-pink-eight.vercel.app/logout',logeruser,{withCredentials:true})
    
        //     .then(res => {
        //       console.log(res.data)})
          
        //    }
    })
    return ()=>{
        subricribe()
    }
},[])
 const authInfo = {google,register,logout,logins,user,loading,setloading}
  return (
    <div>
      AuthProvider
    </div>
  )
}

export default AuthProvider
