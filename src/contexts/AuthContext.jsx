import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
   
    const [auth, setIsAuth] = useState(false)
const [token,setToken]=useState('')
    const handleLogin = (email, password) => {
        if (email === "" || password == "") {
            alert('Email or Password missing')
            return
        }
        axios.post('https://reqres.in/api/login', {
            email: email,
            password,password
        }).then((res) => {
            console.log(res)
            setToken(res.data.token)
            setIsAuth(true)
        })
        .catch((err)=>console.log(err))
    }
    const toggleAuth = () => {
        setIsAuth(!auth)
    }
  return (
      <AuthContext.Provider value={{auth,toggleAuth,token,handleLogin}}>
          {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider