import React, { useState } from 'react'
import "./loggin.css"

const Loggin = () => {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [error, seterror] = useState()
  const submitform = () => {
    if (!email || !password)
      seterror("plx fill form")
    else {
      window.location.href = "/"
    }
  }


  return (
    <div className='login-case'>
      <div className='login-title-div'>
        <h1 className='title-login'>Login</h1>
        <div className='login-div'>
          <span style={{ fontSize: "18px", padding: "10px 10px 10px 0" }}>Login your account</span>
          <input className='input-field' type='email' id='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email'></input>
          <input className='input-field' type='password' id='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password'></input>
          <p className='text-[4rem]'>{error}</p>
          <input className='btn-submit' onClick={submitform} type='submit'></input>
        </div>
      </div>
    </div>
  )
}

export default Loggin