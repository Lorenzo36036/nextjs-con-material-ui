'use client';

import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const Input = styled.input`
  padding: 10px;
  width: 350px;
  margin: 2px;
`;

const Register = () => {
   
 const  onsubmit = (e)=>{
   try{
   console.log(e.prevent.default)


   }catch(e){
    console.log(e)
   } 

   }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form     onSubmit={onsubmit}           style={{ display: 'flex', flexDirection: 'column', transform: `translatey(-50px)` }}>
                <h1 align='center' style={{ margin: 0 }}>Register</h1>
                <label htmlFor="email">Email</label>
                <Input type='email' id="email" name="email" />
                <label htmlFor="password">Password</label>
                <Input type='password' id="password" name="password" />
                <button style={{ padding: 15, marginTop: 5, width: 160, alignSelf: `center` }}>Enviar</button>
            </form>
        </Box>

    );
}

export default Register;
