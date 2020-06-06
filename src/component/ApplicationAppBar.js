import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import logo_icon from '../resources/auditbotlogo.PNG'

import { makeStyles } from '@material-ui/core/styles';
import { NavLink, withRouter, Link } from 'react-router-dom';
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
    width: '100%',
    backgroundColor: '#4f4f54',
    height:"6vh",
    minHeight:'40px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 135,
    height: 42.54
  }, drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#4f4f54'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
  IconColor: {
    color: '#009ED7',
  },
  IconColorchild: {
    color: '#009ED7',
    width: 20
  },
  ItemIcon: {
    minWidth: 35
  },
  listitmentext: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Helvetica'
  },
  listitmentextchild: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Helvetica'
  },
  logo: {
    //margin:10,
    //marginLeft:25,
    width: '100%',
    height: 40.54,
    //backgroundColor:'#FFFFFF'
  },
  selecteditme: {
    backgroundColor: '#009ed7',
    color: 'white',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    paddingTop: 4,
    paddingBottom: 4
  },
  nested: {
    color: 'white',
    paddingTop: 4,
    paddingBottom: 4
  }
}));

const ApplicationAppBar = (props) => {

  const signInCallback = (data) => {
    console.log(data)
  }

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [pathname, setPathname] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const open = Boolean(anchorEl);

  const [grc, setGrc] = React.useState(true);
  const [dashbord, setDashbord] = React.useState(true);
  const [report, setReport] = React.useState(true);

  const [drawerswitch, setDrawerswitch] = React.useState(false);


  React.useEffect(() => {
    setPathname(props.pathname);
  }, [props])

  const handleReport = () => {
    setReport(!report);
  };

  const handlegrc = () => {
    setGrc(!grc);
  };

  const handleDashbord = () => {
    setDashbord(!dashbord);
  };



  const toggleDrawer = (drawerswitch) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerswitch(drawerswitch)
  };


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root} title={<img src={logo_icon} />}>
        <Toolbar style={{ padding: 0 }}>
          <Grid container spacing={0} style={{ padding: 0 }}>
            <Grid item md={1} >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                //onClick={handleDrawerOpen}
                style={{ padding: 0 }}
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

            <Grid item sm={9} >
              <Typography type="body2" >{pathname == '/grcreport' ? 'Auditbot GRC Report' : 'Auditbot GRC Dashbord'}</Typography>
            </Grid>

            <Grid item sm={2}  >
              {props.isAuthenticated ?
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    style={{ padding: 0 }}
                  ><Typography variant="button" style={{ color: '#000' }}>
                      {props.username}
                    </Typography>
                  </IconButton><AccountCircle style={{ padding: 2, fontSize: 30, color: '#009ED7', marginLeft: 5 }} /></div> : null}
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
          <Grid container spacing={0}>
            {/* <Grid item md={6} style={{paddingLeft:1}}>
                <AccountCircleIcon style={{color:'#009ed7',minWidth:100,height: 35.54}}/>
                </Grid> */}
            {/* <Grid item md={6}>
                <Typography type="body2" style={{color:'#009ed7',width:50,margin:5}}>Audit</Typography>
                </Grid> */}
          </Grid>


          <Divider style={{}} />
          <List>
            <ListItem button key='DashBord' button onClick={handlegrc} className={classes.nested}>
              <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
              <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>GRC</Typography>} />
              {grc ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={grc} timeout="auto" unmountOnExit>
              <List component="div" disablePadding >
                <ListItem button className={classes.nested} onClick={handleDashbord}>
                  <ListItemIcon className={classes.ItemIcon} >
                    <LineStyleIcon className={classes.IconColorchild} />
                  </ListItemIcon>
                  <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                  {dashbord ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={dashbord} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link style={{ color: 'white' }} to={'/grcdashbord'} onClick={toggleDrawer(false)}>
                      <ListItem button className={pathname == '/grcdashbord' || pathname == '/' ? classes.selecteditme : classes.nested} >
                        <ListItemIcon className={classes.ItemIcon} >
                          <LineStyleIcon className={classes.IconColorchild} />
                        </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Dashbord</Typography>} />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>


                <ListItem button className={classes.nested} onClick={handleReport} >
                  <ListItemIcon className={classes.ItemIcon} >
                    <LineStyleIcon className={classes.IconColorchild} />
                  </ListItemIcon>
                  <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                  {report ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={report} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <Link style={{color:'white'}} to={'/grcreport'} onClick={toggleDrawer(false)}>
                            <ListItem button className={pathname=='/grcreport'?classes.selecteditme:classes.nested} >
                                <ListItemIcon className={classes.ItemIcon} >
                                    <LineStyleIcon className={classes.IconColorchild}/>
                                </ListItemIcon>
                                <ListItemText disableTypography  primary={<Typography type="body2"  className={classes.listitmentextchild}>GRC Report</Typography>}/>
                            </ListItem>
                            </Link>
                  </List>
                </Collapse>

               
              </List>
            </Collapse>




 
            <ListItem button key='Help'>
              <ListItemIcon className={classes.ItemIcon} ><HelpIcon className={classes.IconColor} /></ListItemIcon>
              <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Help</Typography>} />
            </ListItem>


          </List>
          <Divider />
          <List>

            <ListItem button key='Logout' onClick={() => props.onLogout()}>
              <ListItemIcon className={classes.ItemIcon} ><ExitToAppIcon className={classes.IconColor} />     </ListItemIcon>
              <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Logout</Typography>} />
            </ListItem>

          </List>
        </Drawer>

      </main>

    </div>
  );

}

export default withRouter(ApplicationAppBar)