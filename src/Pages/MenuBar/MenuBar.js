import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import React from 'react';
import useAuth from '../../Hooks/useAuth';


const MenuBar = () => {
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem:{
      color:"#FFFFFF",
      textDecoration:"none",
    },
    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:"none !important",
      }
    },
    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:"none",
      }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
        textAlign:"right",
      }
    },
    mobileNavItem:{
      textDecoration:"none",
      color:"#FFFFFF",

    }
  })
  const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem} = useStyle()

  const [state, setState] = React.useState(false);

  const list = (
    <Box
      role="presentation"
    >
      <List>
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/'>Home</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/addProduct'>Add Product</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/manageProducts'>Manage Products</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText> <Link className={mobileNavItem} to='/'>Sign In</Link> </ListItemText>
          </ListItem>
          <Divider />
          
      </List>
    </Box>
  );

  const {users, logOut} = useAuth();
  const {signInUsingGoole} = useAuth();
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"rgba(16, 16, 16, 0.514)", boxShadow:"none"}} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=> setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Programmer Sajeeb
          </Typography>
          <Box className={navItemContainer}>
               <NavLink className={navItem} to="/"> <Button color="inherit">Home</Button> </NavLink>
               
                   

               {users?.email ?
                 <Box style={{display:"inline-block"}}>
                    <NavLink className={navItem} to="/manageProducts"> <Button color="inherit">Manage Products</Button> </NavLink>
               <NavLink className={navItem} to="/addProduct"> <Button color="inherit">Add Product</Button> </NavLink>
                   <Button onClick={logOut} color="inherit">Logout</Button>
                 </Box>:
                 <Button onClick={signInUsingGoole} color="inherit">Login</Button> 
               }
               
               <Button color="inherit">Signed in as: <a href="#login">{users?.displayName}</a></Button>
                   
             </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={()=> setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
    </div>
    </>
  );
};

export default MenuBar;