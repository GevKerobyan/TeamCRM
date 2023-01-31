import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { DrawerContainer } from './styled';
import { Paper } from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
   <>
    <Divider />
      <List >
        {['Project 1', 'Project 2', 'Project 3', 'Project 4'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <AssignmentIcon />
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

const PaperStyles = {
  
}

  return (
   <DrawerContainer elevation={6} sx={PaperStyles}>
     sidebar
    </DrawerContainer>
  );
}

export default ResponsiveDrawer;

{/* <Drawer
container={container}
variant="temporary"
open={mobileOpen}
onClose={handleDrawerToggle}
ModalProps={{
  keepMounted: true, 
}}
sx={{
  display: { xs: 'block', sm: 'none' },
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
}}
>
{drawer}
</Drawer>
<Drawer
variant="permanent"
sx={{
  background: 'transparent',
  display: { xs: 'none', sm: 'block' },
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
}}
open
>
{drawer}
</Drawer> */}