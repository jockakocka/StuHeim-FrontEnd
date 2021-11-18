import { Button, createMuiTheme, Grid, Paper, Typography, withStyles } from '@material-ui/core';
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
import silver1 from '../../../Logo/silver.png'
import gold1 from '../../../Logo/gold.png'
import bronze1 from '../../../Logo/bronze.png'
import reward from '../../../Logo/circleReward.png'
import '../../../index.css'

export default class HomeContainer extends React.Component {

     theme = createMuiTheme({
        typography: {
          fontFamily: [
            '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
          ].join(','),
        },});
     StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #1b5954 10%, #1b5954 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

      

    render(){
        return (
            <div style={{marginTop:'60px',width:'100%',backgroundColor:'white'}}>
            <div style={{ backgroundImage:`url(${apartmentPic})`,height:'105vh',backgroundRepeat:'no-repeat',backgroundSize: '100%',marginRight:'0px',
                        textAlign: 'center'}}>
            <div style={{backgroundImage:`url(${cloud})`, backgroundPosition: '-0px 80px',width:'540px',height:'500px',backgroundRepeat:'no-repeat',backgroundSize: '100%',textAlign:'center',display: 'block',marginLeft:'auto',
              marginRight:'auto',marginTop:'auto',marginBottom:'auto',paddingTop:'180px'}}>
            <Typography  variant="h4" style={{color:'white', marginTop: '15px', fontFamily:"sans-serif"}} ><b>Warm welcome to</b></Typography>
            <Typography  variant="h4" style={{color:'white', fontFamily:'sans-serif'}} ><b>StuHeim App&Co!</b></Typography>
            <Typography  variant="subtitle2" style={{color:'white',paddingTop:'25px'}}><b>The place where you can find your new home</b></Typography>
            <Typography  variant="subtitle2" style={{color:'white'}}><b>based on ratings and interaction with your</b></Typography>
            <Typography  variant="subtitle2" style={{color:'white'}}><b>colleagues and friends.</b></Typography>
            <ThemeProvider theme={this.theme}>
            <Link to='/register' ><this.StyledButton style={{marginTop:'20px', fontFamily:"sans-serif"}}><b>BECOME A MEMBER</b></this.StyledButton></Link>
            </ThemeProvider>
            </div> 
            </div> 
            <Grid container spacing={2} style={{textAlign:'center',paddingTop:'25px',backgroundColor:'#1b5954'}}>
              <Grid item xs={4} style={{marginBottom: '50px'}}> 
              <img src={interaction} style={{borderTopLeftRadius: '50%',borderTopRightRadius: '50%',borderBottomRightRadius: '50%',borderBottomLeftRadius: '50%'
              ,width:'220px',height:'200px', marginTop: '25px'}} />
              <ThemeProvider theme={this.theme}>
                <br></br>
                <Typography variant="h5" style={{color:'#d5ef82',marginTop:'30px', fontFamily:"sans-serif"}}>DEVELOP NEW FRIENDSHIPS</Typography>
                <br/><br/>
                <Typography variant="h6" style={{color:'#e6ffb3', marginTop: '10px', marginLeft: '55px', marginRight: '55px', fontFamily:"sans-serif"}}>
                   Our dormitories offer a multi-cultural environment. With more than thirty different nationalities and cultures,
                   you will never feel alone. Your dorm peers are friendly, easy-going and will ease the 'homesick'
                   feeling. If you want to find your new best friends while studying in Vienna, our dorms are the perfect fit for you.
                   Each dormitory has a representation office, which is consisting of a couple of students forming s student lobby. 
                </Typography>
              </ThemeProvider>
              </Grid>
              <Grid item xs={4} style={{margintTop: '50px'}}> 
              <img src={room} style={{borderTopLeftRadius: '50%',borderTopRightRadius: '50%',borderBottomRightRadius: '50%',borderBottomLeftRadius: '50%'
              ,width:'220px',height:'200px', marginTop: '25px'}} />
              <ThemeProvider theme={this.theme}>
                <Typography variant="h5" style={{color:'#d5ef82',marginTop:'30px'}}>FIND THE PERFECT PLACE</Typography>
                <br/><br/>
                <Typography variant="h6" style={{color:'#e6ffb3', marginLeft: '55px', marginRight: '55px', marginTop: '10px'}}>
                   Our groupation offers various dorms in various locations in Vienna. Each of the dormitories is located in a central position,
                   close to the University of your choice and to public transport. The offers range based on different room and price options,
                   to different ammenities the dormitory is offering. Regardless of whether you prefer to live in a shared apartment, single or a double
                   room, we have the right inexpensive living space tailored just for you.
                </Typography>
              </ThemeProvider>
              </Grid>
              <Grid item xs={4} style={{marginBottom: '50px'}}>
              <img src={reward} style={{borderTopLeftRadius: '50%',borderTopRightRadius: '50%',borderBottomRightRadius: '50%',borderBottomLeftRadius: '50%'
              ,width:'220px',height:'200px', marginTop: '25px'}} />
              <ThemeProvider theme={this.theme}>
                <Typography variant="h5" style={{color:'#d5ef82',marginTop:'30px'}}>EARN YOUR REWARDS</Typography>
                <br/><br/>
                <Typography variant="h6" style={{color:'#e6ffb3', marginTop: '10px', marginRight: '55px', marginLeft: '55px'}}>
                   Our student community is quite different from the others. By being a resident of our dormitories,
                   you get the unique experience and chance to get points and earn rewards, based on your activity in our student
                   community. The more you help or the more active you are, the faster you are going to reach the reward. Our community
                   is build in a way that will only encourage the students to interact, share their thoughts and help us upgrade
                   the experience we are offering to you as students.
                </Typography>
              </ThemeProvider>
              </Grid>
              </Grid>
              <Grid container spacing={2} style={{textAlign:'center', height: '100px',backgroundColor:'#7c7464'}}>
                 <Typography variant="h4" style={{marginTop: '30px', marginBottom:'15px',color:'#E1E19E', marginLeft: '650px', textAlign:'center'}}>Rate In Order To Get Bagged</Typography>
              </Grid>
              <Grid container spacing={2} style={{textAlign:'center',paddingTop:'15px',backgroundColor:'#E1E19E'}}>
                <Grid item xs={4} style={{textAlign:'center', marginBottom: '40px'}}>
                  <img src={gold1} style={{width:'220px',height:'200px', marginTop: '25px'}} />
                  <ThemeProvider theme={this.theme}>
                <br></br>
                <Typography variant="h5" style={{color:'#434b56',marginTop:'30px', fontFamily:"sans-serif"}}>GOLD BADGE</Typography>
                <br/><br/>
                <Typography variant="h6" style={{color:'#434b56', marginTop: '10px', marginLeft: '55px', marginRight: '55px', fontFamily:"sans-serif"}}>
                   The gold badge is the ultimate privillege offered in the StuHeim App. Users can earn this badge when they earn 1300 points which can be gathered by
                   adding ratings for the student dormitories, helping colleagues with faculty related issues and interact with students from the student dormitories in the forum.
                </Typography>
               </ThemeProvider>
                </Grid>
                <Grid item xs={4} style={{textAlign:'center', marginBottom: '40px'}}>
                  <img src={silver1} style={{width:'220px',height:'200px', marginTop: '25px'}} />
                  <ThemeProvider theme={this.theme}>
                <br></br>
                <Typography variant="h5" style={{color:'#434b56',marginTop:'30px', fontFamily:"sans-serif"}}>SILVER BADGE</Typography>
                <br/><br/>
                <Typography variant="h6" style={{color:'#434b56', marginTop: '10px', marginLeft: '55px', marginRight: '55px', fontFamily:"sans-serif"}}>
                   The silver badge is a middle level badge which can be achieved on the StuHeim App. Users can earn this badge when they earn 950 points which can be gathered by
                   adding ratings for the student dormitories, helping colleagues with faculty related issues and interact with students from the student dormitories in the forum.
                </Typography>
               </ThemeProvider>
                </Grid>
                <Grid item xs={4} style={{textAlign:'center', marginBottom: '40px'}}>
                  <img src={bronze1} style={{width:'220px',height:'200px', marginTop: '25px'}} />
                  <ThemeProvider theme={this.theme}>
                <br></br>
                <Typography variant="h5" style={{color:'#434b56',marginTop:'30px', fontFamily:"sans-serif"}}>BRONZE BADGE</Typography>
                <br/><br/>
                <Typography variant="h6" style={{color:'#434b56', marginTop: '10px', marginLeft: '55px', marginRight: '55px', fontFamily:"sans-serif"}}>
                   The bronze badge is a basic level badge which can be achieved on the StuHeim App. Users can earn this badge when they earn 600 points which can be gathered by
                   adding ratings for the student dormitories, helping colleagues with faculty related issues and interact with students from the student dormitories in the forum.
                </Typography>
               </ThemeProvider>
                </Grid>
              </Grid>
              </div>
        )}
      }
