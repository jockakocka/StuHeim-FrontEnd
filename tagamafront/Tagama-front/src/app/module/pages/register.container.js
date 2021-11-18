import { Button, createMuiTheme, Grid, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundPic from '../../../Logo/healthy-diet.jpg'
import weightLoss from '../../../Logo/weight-loss.png'
import weightGain from '../../../Logo/weight-gain.png'
import sports from '../../../Logo/sports.png'
import healthy from '../../../Logo/healthy.jpg'
import cloud from '../../../Logo/cloudFix1.png'
import apartmentPic from '../../../Logo/student6.jpg'
import interaction from '../../../Logo/circle-cropped.png'
import room from '../../../Logo/circleroom.png'
import registration from '../../../Logo/registration1.png'
import '../../../index.css';
import Card from '@material-ui/core/Card';
import { saveUserAsStudent } from '../../repo/user.repo';
import { dispatchAction } from '../../..';
import { MAIN_SNACKBAR_SHOW } from '../../shared/actionsMessages';

export default class registerContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      formdata: {},
      data: {},
      folders: [],
      responseMissing: []
    }
  }

  StyledButton = withStyles({
    root: {
      background: '#e0e0e0',
      borderRadius: 3,
      border: 0,
      color: '#2A4E4A',
      height: 40,
      padding: '0 25px',
      boxShadow: '0 3px 5px 2px',
    },
    label: {
      textTransform: '',
    },
  })(Button);



handleFormInput = name => event => {
  var formdata = this.state.data;
  formdata[name] = event.target.value;
    this.setState({
      data: formdata
    });
}

    theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Chilanka',
            "'Galada",
          ].join(','),
        },});
   

      saveUser = () =>{
        var formdata = this.state.data;
        saveUserAsStudent(formdata).then(response =>
            {
              dispatchAction({
                type: MAIN_SNACKBAR_SHOW,
                payload: {
                  snackbarMessage: 'You are successfully registered! Please log in!',
                  snackbarType: 'success'
                  }})
            }).catch(error =>{
              dispatchAction({
                type: MAIN_SNACKBAR_SHOW,
                payload: {
                  snackbarMessage: 'An error ocured while registering! Please check your information!',
                  snackbarType: 'error'
                }
              })
                console.log(error);
            });
      }
  

    render()
    {
        return (
          <div style={{marginTop:'20px',width:'100%',backgroundColor:'#ffffff'}}>
          <Grid container spacing={2} style={{backgroundColor:'#ffffff',width:'100%', height:'100%'}}>
            <Grid item xs={6}>
            <Card style={{width: "700px", height: "760px", marginLeft: "100px",marginBottom: "50px", marginTop: "125px", backgroundColor: "#54A19A"}} variant="outlined">
            <Typography variant="h4" style={{marginBottom: 20+"px", marginTop: "60px", textAlign: 'center', color: '#e0e0e0'}}>USER REGISTRATION FORM</Typography>
            <TextField  id="name"
                        label="First Name:"
                        value={this.state.data.name ? this.state.data.name : ''}
                        onChange={this.handleFormInput('name')}
                        required 
                        variant="outlined"
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '115px'}}/>
                        <TextField  id="surname"
                        label="Last Name:"
                        value={this.state.data.surname ? this.state.data.surname : ''}
                        onChange={this.handleFormInput('surname')}
                        required 
                        variant="outlined"
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '25px'}}/>
                          <TextField  id="email"
                        label="Email Address:"
                        value={this.state.data.email ? this.state.data.email : ''}
                        onChange={this.handleFormInput('email')}
                        required 
                        variant="outlined"
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '115px'}}/>
                           <TextField  id="telephone"
                        label="Telephone Number:"
                        value={this.state.data.telephone ? this.state.data.telephone : ''}
                        onChange={this.handleFormInput('telephone')}
                        required 
                        variant="outlined"
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '25px'}}/>
                         <TextField  id="username"
                        label="Username:"
                        value={this.state.data.username ? this.state.data.username : ''}
                        onChange={this.handleFormInput('username')}
                        required 
                        variant="outlined"
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '115px'}}/>
                        <TextField  id="password"
                        label="Pasword:"
                        value={this.state.data.password ? this.state.data.password : ''}
                        onChange={this.handleFormInput('password')}
                        variant="outlined"
                        required 
                        type="password"
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '25px'}}/>
                        <TextField  id="id"
                        label="Student ID:"
                        value={this.state.data.studentId ? this.state.data.studentId : ''}
                        onChange={this.handleFormInput('studentId')}
                        variant="outlined"
                        required 
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '115px'}}/>
                        <TextField  id="dateOfBirth"
                        label="Date of Birth:"
                        value={this.state.data.dateOfBirth ? this.state.data.dateOfBirth : ''}
                        onChange={this.handleFormInput('dateOfBirth')}
                        variant="outlined"
                        required 
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '25px'}}/>
                        <TextField  id="nationality"
                        label="Nationality:"
                        value={this.state.data.nationality ? this.state.data.nationality : ''}
                        onChange={this.handleFormInput('nationality')}
                        variant="outlined"
                        required 
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '115px'}}/>
                        <TextField  id="studentDormitory"
                        label="Student Dormitory:"
                        value={this.state.data.studentDormitory ? this.state.data.studentDormitory : ''}
                        onChange={this.handleFormInput('studentDormitory')}
                        variant="outlined"
                        required 
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '25px'}}/>
                        <TextField  id="university"
                        label="University:"
                        value={this.state.data.university ? this.state.data.university : ''}
                        onChange={this.handleFormInput('university')}
                        variant="outlined"
                        required 
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '115px'}}/>
                        <TextField  id="studyDegree"
                        label="Degree of Studies:"
                        value={this.state.data.studyDegree ? this.state.data.studyDegree : ''}
                        onChange={this.handleFormInput('studyDegree')}
                        variant="outlined"
                        required 
                        style={{width: "fullWidth", marginTop: "30px", marginLeft: '25px'}}/>
                        <this.StyledButton onClick={this.saveUser.bind(this,this.state.data
                          )} style={{width: "150px", marginTop: '45px', marginLeft: '260px'}} variant="contained">REGISTER</this.StyledButton>
            </Card>
            </Grid>
            <Grid item xs={6} style={{ backgroundImage:`url(${registration})`, height:'105vh', marginTop: '90px',backgroundRepeat:'no-repeat', justify: 'center', allignContent: 'center', backgroundSize: '100%'}}>
            </Grid>
          </Grid>
          </div>
        )}

}