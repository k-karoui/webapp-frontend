import '../App.css';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Childreniv = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginTop:'40px'
}));

const SidebarData = [
    {
        title : "Create New Forecast",
        icon : <AddIcon />,
        link: "/newForecast"
    },
    {
        title : "Edit Previous Forecast",
        icon : <EditIcon />,
        link: "/editForecast"
    }
]

const SidebarData2 = [
    {
        title : "Jupyter Notebook",
        icon : <IntegrationInstructionsOutlinedIcon />,
        link: "/jupyterNotebook"
    }
]

export default function Navbar({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const withouSidebarRoutes = ["/signIn"];

  const {pathname} = useLocation();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
   // check if navigation should be rendered
   if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <Box sx={{ display: 'flex',alignItems:'center' }}>
      <CssBaseline />
      <AppBar className='mytool' position="fixed" open={open} sx={{ backgroundColor: '#293846' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Button sx={{ color: '#f1f4f7', fontSize:'20px'}}
            onClick={routeChange}>
            Monitoring App
          </Button>
          <div><AnalyticsOutlinedIcon style={{ fontSize: '50px', color: '#f1f4f7',paddingLeft:'10px' }} /></div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
        
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {SidebarData.map((val) => (
            <ListItem disablePadding>
              <ListItemButton href={val.link}>
                <ListItemIcon>
                  <div>{val.icon}</div>
                </ListItemIcon>
                <ListItemText primary={val.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {SidebarData2.map((val) => (
            <ListItem disablePadding>
              <ListItemButton href={val.link}>
                <ListItemIcon>
                  <div>{val.icon}</div>
                </ListItemIcon>
                <ListItemText primary={val.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Box>
      <Childreniv></Childreniv>
      {children}
      </Box>
    </Box>
    
  );
}
