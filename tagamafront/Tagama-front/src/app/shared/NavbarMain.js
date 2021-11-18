import React from 'react';
import {Link} from "react-router-dom";

import {Badge, Button, IconButton, List, ListItem, Menu, MenuItem, Paper, Select, TextField,} from "@material-ui/core";
import {hasRole} from './app.properties';
import { AppBar, Toolbar, Typography, } from "@material-ui/core";
import { createMuiTheme,ThemeProvider, withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';




export function NavbarMain(props) {
      
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };
        
          const handleClose = () => {
            setAnchorEl(null);
          };

      const theme = createMuiTheme({
            typography: {
              fontFamily: [
                'Chilanka',
                'cursive',
              ].join(','),
            },});
            const languageOptions = [
                  { key: "English", text: "English", value: "EN" },
                  { key: "Macedonian", text: "Macedonian", value: "MKD" }
               ];
            const options = [
                  'MKD',
                  'ENG',
                ];
                const ITEM_HEIGHT = 10;
      

    return (
        <div className="header">
    <IconButton >
        <Badge
            badgeContent={0}
            color="#FF7619">
            </Badge>
            <a href="https://www.facebook.com/stuheimapp">
            <FacebookIcon/>
            </a>
          </IconButton>
          <IconButton
            
          >
            <a href="https://www.instagram.com/stuheim">
          <InstagramIcon/>
          </a>
          </IconButton>
          <IconButton
            
          >
            <a href={"mailto:" + "contact@stuheim.com"}>
          <MailOutlineIcon/>
          </a>
          </IconButton>          
        </div>
            
            
     
  );
}

NavbarMain.propTypes = {
};

