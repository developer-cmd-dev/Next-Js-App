"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

function SignUp() {
      let userDataObj:{
          email:string,
          password:string,
          username:string  
    }={
        email:"",
        password:"",
        username:""
    }
    const[user,setUser]=useState(userDataObj)

    const onSignup=async()=>{

    }
  
  return (
    <div>SignUp</div>
  )
}

export default SignUp