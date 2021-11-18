import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import { Divider, Drawer, Icon, List, ListItem, ListItemText, ListSubheader, } from "@material-ui/core";
import { AddBox, AssignmentInd, Build, Settings } from '@material-ui/icons';
import { hasRole } from './app.properties';

export function SidebarMenu(props) {

    return (
        <Drawer
            style={{ top: 50 + "px" }}
            className={classes.drawer + " sidebarleft"}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            
                {hasRole("ROLE_ADMINISTRATION") &&
                 <div style={{width:'230px'}}>
                    <List
                        subheader={<ListSubheader component="div"><strong>Home</strong></ListSubheader>}
                    >
                        <Link to="/app/dashboard">
                            <ListItem button key="dashboard">
                                <ListItemIcon><Settings style={{ color: 'black' }}></Settings></ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                        </Link>
                        <Link to="/app/settings">
                            <ListItem button key="appsettings">
                                <ListItemIcon><Settings style={{ color: 'black' }}></Settings></ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                        </Link>
                    </List>
                    </div>
                }
                <Divider />

                <Divider />
        </Drawer>


    );
}

SidebarMenu.propTypes = {};

const drawerWidth = 240;

const classes = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: 1201,
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