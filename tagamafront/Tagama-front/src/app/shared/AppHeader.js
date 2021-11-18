import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Users } from "../modules/users/Users"
import {
    Button,
    AppBar,
    Typography,
    Toolbar,
    IconButton,
    Paper,
    Grid,
} from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';



export class AppHeader extends React.Component {

    constructor(props){
        super(props);

    }

    render() {
        
        return (
            <div>
                <Router>
                    <div>
                <AppBar position="static" >
            <Toolbar>
            <Typography variant="h6" color="inherit" className="grow" style={{marginRight: 20+"px"}}>
                <Link to="/app">SimpaApp</Link>
            </Typography>
            <Link to="/app/users/" className="pull-right"><Button color="inherit" className="pull-right">Users</Button></Link>
            <div style={{position:"absolute", right:25+'px'}} className="pull-right">
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={false ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            </Toolbar>
        </AppBar>
        
        <Grid container spacing={0}>
            <Grid item  md={2}>
            <Paper>

                  

            </Paper>
            </Grid>
            <Grid item md={10}>
            <Paper>

            <Route path="/users/" style={{marginLeft: 240+"px"}} component={Users}></Route>
       
        


            </Paper>
            </Grid>
        </Grid>
        </div>
        </Router>
        
        
        </div>
        );
      }

      

}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});
