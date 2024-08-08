'use client';
import { AppBar, Avatar, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolBard = styled(Toolbar)({
  display: "flex",
  justifyContent: `space-between`,
  flexFlow: `1`,
})


const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"

}))

const Icons = styled("Box")(({ theme }) => ({
display : "flex",
gap : 20,
alignItems : `center`,
}))

const users = styled("Box")(({ theme }) => ({
  display : "flex",
  gap : 20,
  alignItems : `center`,
  }))

const Navbar = () => {
 const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky' >
      <StyledToolBard>
        <Typography variant='h6' sx={{ display: { xs: `none`, sm: `block` } }}>Fibuk </Typography>
        <PetsIcon sx={{ display: { xs: `block`, sm: `none` } }} />
        <Search><InputBase placeholder="search" sx={{color:"black", fontWeight:700}}  /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="" onClick={()=> setOpen(true)} />
        </Icons>
      </StyledToolBard>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar
