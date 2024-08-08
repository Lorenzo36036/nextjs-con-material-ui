'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    //primary: {},
    mode: 'light', // Ensure mode is defined
    
    ocolor: {
      main: '#4cfa00',
      light : "skyblue"
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
