import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import logo_icon from '../resources/auditbotlogo.PNG'

import { makeStyles } from '@material-ui/core/styles';
import { NavLink, withRouter,Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';



import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';

import AccountApp from './AccountApp'

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TableChartIcon from '@material-ui/icons/TableChart';
import GridOnIcon from '@material-ui/icons/GridOn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';




const drawerWidth = 190;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //width: `calc(100% - 190px)`,
    width:'100%',
    minHeight: 20,
    backgroundColor:'#222021'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 135,
    height: 40.54
  },drawer: {
    width: drawerWidth,
    flexShrink: 0,
 
},
drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#222021'
},
// necessary for content to be below app bar
toolbar: theme.mixins.toolbar,
content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
},
IconColor:{
    color:'#009ed7',
},
IconColorchild:{
    color:'#009ed7',
    width:20
},
ItemIcon:{
    minWidth:35
},
listitmentext:{
    color: '#ffffff',
    fontSize:15 
},
listitmentextchild:{
    color: '#ffffff',
    fontSize:13 
},
logo: {
    //margin:10,
    //marginLeft:25,
    width: '100%',
    height: 35.54,
    backgroundColor:'#FFFFFF'
  }
}));

const ApplicationAppBar = (props) => {

  const signInCallback = (data) => {
    console.log(data)
  }

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const open = Boolean(anchorEl);

  const [dashbord, setDashbord] = React.useState(true);
  const [open, setOpen] = React.useState(true);

  const [drawerswitch, setDrawerswitch] = React.useState(false);

  const handleReport = () => {
      setOpen(!open);
  };
  const handleDashbord = () => {
      setDashbord(!dashbord);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (drawerswitch) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerswitch(drawerswitch)
  };


  return (
<div className={classes.root}>
    <AppBar position="fixed" className={classes.root} title={<img src={logo_icon}/>}>
      <Toolbar style={{minHeight:40,padding:0}}>
        <Grid container spacing={0} style={{ padding: 0 }}>
          <Grid item md={1} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            //onClick={handleDrawerOpen}
            style={{padding:0}}
            edge="start"
            onClick={toggleDrawer(true)}
            //className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <img
                className={classes.logo}
                src={
                  logo_icon
                }
                alt="Bosch Logo"
              /> */}
          </Grid>
          <Grid item sm={2} >

          </Grid>

          <Grid item sm={7} >

          </Grid>

          <Grid item sm={2}  >
          {props.isAuthenticated ? 
          <div>
              <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              style={{padding:0}}
            ><Typography  variant="button" style={{color:'#009ED7'}}>
             {props.username}
          </Typography>     
          </IconButton><AccountCircle  style={{padding:2,fontSize: 30,color:'#009ED7',marginLeft:5}}/></div>:null}
          </Grid>

          
        </Grid>

      </Toolbar>

    </AppBar>
    <main>


    <Drawer
                className={classes.drawer}
                //variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                open={drawerswitch}
                onClose={toggleDrawer(false)}
            >
                
                <img
                className={classes.logo}
                src={
                  logo_icon
                }
                alt="Bosch Logo"
              />
                <Grid container  spacing={0}>
                {/* <Grid item md={6} style={{paddingLeft:1}}>
                <AccountCircleIcon style={{color:'#009ed7',minWidth:100,height: 35.54}}/>
                </Grid> */}
                {/* <Grid item md={6}>
                <Typography type="body2" style={{color:'#009ed7',width:50,margin:5}}>Audit</Typography>
                </Grid> */}
                </Grid>


                <Divider style={{}}/>
                <List>
                    <ListItem button key='DashBord' button onClick={handleDashbord}>
                        <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                        <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentext}>Dashbord</Typography>}/>
                        {dashbord ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={dashbord} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <LineStyleIcon className={classes.IconColorchild}/>
                                </ListItemIcon>
                                <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentextchild}>GRC Dashbord</Typography>}/>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <LineStyleIcon className={classes.IconColorchild}/>
                                </ListItemIcon>
                                <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentextchild}>GRC Dashbord</Typography>}/>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button key='Report' button onClick={handleReport}>
                        <ListItemIcon className={classes.ItemIcon} > <TableChartIcon className={classes.IconColor}/></ListItemIcon>
                        <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentext}>Report</Typography>}/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <GridOnIcon className={classes.IconColorchild}/>
                                </ListItemIcon>
                                <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentextchild}> <Link to={'/report/grcReport'} >GRC Report</Link></Typography>}/>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <GridOnIcon className={classes.IconColorchild}/>
                                </ListItemIcon>
                                <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentextchild}>GRC Report</Typography>}/>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button key='Help'>
                        <ListItemIcon className={classes.ItemIcon} ><HelpIcon className={classes.IconColor} /></ListItemIcon>
                        <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentext}>Help</Typography>}/>
                    </ListItem>
                  

                </List>
                <Divider />
                <List>
                  
                        <ListItem button key='Logout'>
                            <ListItemIcon className={classes.ItemIcon} ><ExitToAppIcon className={classes.IconColor} />     </ListItemIcon>
                            <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentextchild}>Logout</Typography>}/>
                        </ListItem>
                   
                </List>
            </Drawer>

    </main>

    </div>   
  );

}

export default withRouter(ApplicationAppBar)