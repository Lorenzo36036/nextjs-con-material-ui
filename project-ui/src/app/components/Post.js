import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';


const Post = ({user}) => {
  return (
    
     <Card sx={{marginBottom : 3}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user}
            </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        />
       
      <CardMedia
        component="img"
        image="data:image/jpeg;base64,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 "
        alt="Paella dish" style={{objectFit:`contain`}}
        />
        
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color : "red"}} />   }  />

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    
      </CardActions>
      <Collapse  timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate  set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Post