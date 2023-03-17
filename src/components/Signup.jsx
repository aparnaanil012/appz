import { Button, TextField ,Typography} from "@mui/material";
import React from "react";
const Signup=()=> {
 return (
    <div>
      <h4>Signup to facebook</h4>
      {/* <input type="text"placeholder="emailaddress"name=""id=""/>
      <input type ="password"placeholder="password"name=""id=""/>
      <button type="submit">Signup</button> */}
      <Typography variant= 'h3' color ='primary'>Signup to facebook</Typography>
      
      <TextField label ='email' variant='outlined' />
    <TextField label ='password' variant='filled' type ='password' />
    <TextField label ='username' variant='filled' type='username' />
    <TextField label ='phonenumber' variant ='filled' type='phonenumber'/>
    {/* <button  type="submit">Signup</button> */}
    <Button variant="contained" color='primary'  >Login</Button>
    </div>
  )
}
export default Signup