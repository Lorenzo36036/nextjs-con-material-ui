import React from 'react'
import { Box } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';

const Sidebar = ({ setMode, mode }) => {

  return (
    <Box flex={1} p={2} display={`flex`}>
      <Box flex={1} p={2} position={`fixed`}>
        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <LocalGroceryStoreIcon />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === `light` ? `dark` : `light`)} />
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
