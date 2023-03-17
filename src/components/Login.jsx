import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h3>Login to facebook</h3>
      <input type="text"placeholder="emailaddress"name=""id=""/>
      <input type ="password"placeholder="password"name=""id=""/>
      <button type="submit">Login</button>
      <Typography variant= 'h3' color ='primary'>Login to facebook</Typography>
      
      <TextField label ='email' variant='outlined' />
    <TextField label ='password' variant='filled' type ='password' />
    </div>
  )
}

export default Login
