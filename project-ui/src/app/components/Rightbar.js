import React from 'react'
import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'




const Rightbar = () => {
  return (
    <Box flex={2} p={2} display={'flex'} justifyContent={`center`} height={`1700px`}> 
      
      <Box position={"fixed"} >
        <Typography  variant='h4' fontWeight={400}>  Online friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default Rightbar
