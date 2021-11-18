import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {Badge, Button, createMuiTheme, IconButton, List, ListItem, Menu, MenuItem,} from "@material-ui/core";
import Redirect from 'react-router/Redirect';
import {dispatchAction} from '../..';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';


export class NavbarRight extends React.Component {

  state = {
    userMenuIsOpen: false,
      anchorEl: null,
      taskNotifications: false,
      logged:false
  };

  componentDidMount(){
  }
 
       

  handleUserMenuOpen = event => {
    this.setState({
      userMenuIsOpen: true,
      anchorEl: event.currentTarget
    })
  }

  
  handleUserMenuClose = () => {
    this.setState({
      userMenuIsOpen: false,
      anchorEl: null
    });
  }

    handleTaskNotificationsOpen = event => {
        this.setState({
            taskNotifications: true,
            anchorEl: event.currentTarget,

        })
    }

    handleTaskNotificationsClose = () => {
        this.setState({
            taskNotifications: false,
            anchorEl: null
        });
    }
  
  
  handleLogout = () => {
    dispatchAction({type: "USER_LOGOUT", payload: undefined});
    localStorage.removeItem('idm');
    localStorage.removeItem('me');
      localStorage.removeItem("username");
      localStorage.removeItem("logged");
    this.setState({});
  }


  theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(','),
    },});

   

  render(){
    let refreshTime = new Date();
      refreshTime.setSeconds(refreshTime.getSeconds() + 1800);
  return (    
    <div style={{position:"absolute", right:25+'px'}} className="pull-right">

    {/* You need this when you will handle with logout stuff */}
    {/* {
      !localStorage.getItem('idm') && !localStorage.getItem('me') && <Redirect to='/login' />
    } */}

          <div >
                        <ThemeProvider theme={this.theme}>
                          {console.log(this.theme)}
                        <List style={{display: 'flex',flexDirection: 'row',padding: 0}}>
                        
                              <ListItem>
                              <Link to="/home">
                              <Button style={{ textAlign: 'center',color:"#434b56"}} ><b>Home</b></Button></Link>   
                              </ListItem>
                              <ListItem>
                              {localStorage.getItem("logged") &&
                              <Link to="/dorms">
                              <Button style={{ textAlign: 'center',color:"#434b56"}}><b>Dormitories</b></Button></Link> }  
                              </ListItem>
                                <ListItem>
                                {
                                localStorage.getItem("logged") && 
                                <Link to="/ratings">
                                <Button style={{ textAlign: 'center',color:"#434b56"}} ><b>RateMe</b></Button></Link>
                                }
                                </ListItem> 
                                <ListItem>
                                {localStorage.getItem("logged") &&
                                <Link to="/leaderboard">
                                <Button style={{ textAlign: 'center',color:"#434b56"}}><b>Leaderboard</b></Button></Link>   
                                }
                                </ListItem>  
                                <ListItem>
                                {localStorage.getItem("logged") &&
                                <Link to="/dashboard">
                                <Button style={{ textAlign: 'center',color:"#434b56"}}><b>Dashboard</b></Button></Link>   
                                }
                                </ListItem> 
                                <ListItem>
                                {
                                localStorage.getItem("logged") && 
                                <Link to="/profiles">
                                <Button style={{ textAlign: 'center',color:"#434b56"}} ><b>Profile</b></Button></Link>   
                                }
                                </ListItem>
                                <ListItem>
                                  {localStorage.getItem("logged") &&
                                  <Link to="/login">
                                    <Button onClick={this.handleLogout} style={{textAlign: 'center', color:"#434b56"}}><b>LogOut</b></Button>
                                  </Link>}
                                </ListItem>
                                <ListItem>
                                {!localStorage.getItem("logged") &&
                                <Link to="/login">
                                <Button style={{ textAlign: 'center',color:"#434b56"}}><b>LogIn</b></Button></Link>   
                                }
                                </ListItem>
                                
                        </List>
                        </ThemeProvider>
                        </div>
            </div>

  )}
}

const mapStateToProps = state => {
    return {
    }
};

export default connect(mapStateToProps, ({
}))(NavbarRight);












