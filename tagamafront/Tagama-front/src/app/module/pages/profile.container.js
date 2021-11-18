import { Grid,withStyles } from '@material-ui/core'
import React from 'react';
import apartmentPic from '../../../Logo/studentsIllustation.jpg'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Redirect from 'react-router-dom/Redirect'
import Typography from '@material-ui/core/Typography';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import SchoolIcon from '@material-ui/icons/School';
import CakeIcon from '@material-ui/icons/Cake';
import LanguageIcon from '@material-ui/icons/Language';
import HomeIcon from '@material-ui/icons/Home';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { getStudentByUsername } from '../../repo/user.repo';


export default class profileContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
          folders: [],
          responseMissing: [],
          linearProgressShown: false

        }
      }

      StyledButton = withStyles({
        root: {
          background: '#3b4e3d',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 40,
          padding: '0 25px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: '',
        },
      })(Button);

    componentDidMount(){
        if(localStorage.getItem('username')){
            this.loadStudentDetails(localStorage.getItem('username'));
        }
    }

    loadStudentDetails = (username) => {
        getStudentByUsername(username).then(response => {
            console.log(response.data);
            this.setState({
                data: response.data
            });
        }).catch(error =>{
            console.log(error);
            this.setState({
                linearProgressShown: false
            });
        });
      }

    render()
    {
        return (
            <div style={{width:'100%',backgroundColor:'white'}}>
            <div style={{ backgroundImage:`url(${apartmentPic})`,height:'124vh',backgroundRepeat:'no-repeat', justify: 'center', allignContent: 'center', backgroundSize: '100%'}}> 
            <div style={{paddingTop: '70px'}}>
            <Card style={{width: 670+"px", height: "550px", marginLeft: "550px", marginTop: "80px", backgroundColor: "#E6FFB3"}} variant="outlined">
            <CardContent style={{backgroundColor: "#E6FFB3"}}>
            <Typography variant="h4" style={{marginBottom: 20+"px", marginTop: "25px", textAlign: 'center', color: '#3b4e3d'}}>User Personal Information</Typography>
            <form style={{color: '#e6ffb30'}}>
            <Grid container spacing={1} alignItems="flex-end" style={{marginTop: '20px'}}>
                <Grid item style={{marginLeft: '40px', color: '#3b4e3d'}}>
                    <PersonIcon />
                </Grid>
                <Grid item>
                    <TextField  id="firstName"
                        label="First Name:"
                        value={this.state.data.firstName ? this.state.data.firstName : ''}
                        disabled
                        variant="standard"
                        fullWidth
                        style={{ marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
                <Grid item style={{marginLeft: '60px', color: '#3b4e3d'}}>
                    <HomeIcon />
                </Grid>
                <Grid item>
                    <TextField  id="dormitory"
                        disabled
                        label="Dormitory Name:"
                        value={this.state.data.dormitory ? this.state.data.dormitory : ''}
                        variant="standard"
                        fullWidth
                        style={{ marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{marginLeft: '40px', color: '#3b4e3d'}}>
                    <PersonIcon />
                </Grid>
                <Grid item>
                    <TextField  id="surname"
                        label="Surname:"
                        disabled
                        value={this.state.data.surname ? this.state.data.surname : ''}
                        variant="standard"
                        fullWidth
                        style={{marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
                <Grid item style={{marginLeft: '60px', color: '#3b4e3d'}}>
                    <SchoolIcon />
                </Grid>
                <Grid item>
                    <TextField  id="university"
                        disabled
                        label="University Name:"
                        value={this.state.data.university ? this.state.data.university : ''}
                        variant="standard"
                        fullWidth
                        style={{marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{marginLeft: '40px', color: '#3b4e3d'}}>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField  id="username"
                        disabled
                        label="Username:"
                        value={this.state.data.username ? this.state.data.username : ''}
                        variant="standard"
                        fullWidth
                        style={{ marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
                <Grid item style={{marginLeft: '60px', color: '#3b4e3d'}}>
                    <MenuBookIcon />
                </Grid>
                <Grid item>
                    <TextField  id="degree"
                        disabled
                        label="Study Degree:"
                        value={this.state.data.degree ? this.state.data.degree : ''}
                        variant="standard"
                        fullWidth
                        style={{ marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{marginLeft: '40px', color: '#3b4e3d'}}>
                    <EmailIcon />
                </Grid>
                <Grid item>
                    <TextField  id="email"
                        disabled
                        label="Email Address:"
                        value={this.state.data.emailAddress ? this.state.data.emailAddress : ''}
                        variant="standard"
                        fullWidth
                        style={{marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
                <this.StyledButton variant="contained" color='#3D916D' style={{marginLeft: '185px', marginTop: '10px'}}>UPDATE</this.StyledButton>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{marginLeft: '40px', color: '#3b4e3d'}}>
                    <PhoneIcon />
                </Grid>
                <Grid item>
                    <TextField  id="phone"
                        disabled
                        label="Phone Number:"
                        value={this.state.data.phoneNumber ? this.state.data.phoneNumber : ''}
                        variant="standard"
                        style={{width: "fullWidth", marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item style={{marginLeft: '40px', color: '#3b4e3d'}}>
                    <CakeIcon />
                </Grid>
                <Grid item>
                    <TextField  id="dateOfBirth"
                        disabled
                        label="Date of Birth:"
                        value={this.state.data.dateOfBirth ? this.state.data.dateOfBirth : ''}
                        variant="standard"
                        style={{width: "fullWidth", marginTop: "10px", marginLeft: '5px'}}/>
                </Grid>
            </Grid>
            </form>
            </CardContent>
            </Card>
            </div>
            </div>
            </div>

        //         </Grid>
        //         </Paper>
        //         <Grid item xs={8}>
        //             <Grid style={{ backgroundImage:`url(${apartmentPic})`,height:'120vh',backgroundRepeat:'no-repeat',backgroundSize: '100%',marginTop:'20px',
        //                 textAlign: 'center'}}></Grid>
        //         </Grid>
        //     </Grid>
        )
    }

}