import Post from "./post"
import { Box } from "@mui/material"
const Feed = () => {
  return (
    <Box flex={3} p={2}>
     
    <Post user={`a`} />
      
  
    <Post user={`e`}/>
   
    <Post user={`c`}/>
   
  
   </Box>
  )
}

export default Feed
