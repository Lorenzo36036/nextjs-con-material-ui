'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import  {useState}  from 'react';
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';

export default function Home() {
   const [mode, setMode] = useState(`dark`)
  
  
   const DarkMode = createTheme({
    palette : {
       mode : mode
    }
  })
  
  
  return (
    <ThemeProvider theme={DarkMode}>

    <Box bgcolor={"background.default"} color={`text.primary`}>
    
      <Navbar />
      <Stack direction={`row`} spacing={2} justifyContent={`space-between`} sx={{}}       >
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
    
    </Box>
   
    </ThemeProvider>
  
  );
}
