import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import styles from './styles.module.css'
export default function LoginForm() {
    const { auth ,handleLogin} = useContext(AuthContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email,password)

        
    }

  
    return (
      <div>
         <form className={styles.form} onSubmit={handleSubmit}>
          <input onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder='Enter email' />
          <input onChange={(e)=>setPassword(e.target.value)}  type="text" placeholder='Enter password' />
          <input type="submit" value="Login" />
            </form>   
            
            <p>Use reqres Api to check </p>
      </div>
      
  )
}
