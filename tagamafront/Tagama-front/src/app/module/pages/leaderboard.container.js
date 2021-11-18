import React from 'react';
import { dispatchAction } from '../../..';
import { MAIN_LINEAR_PROGRESS_HIDE, MAIN_LINEAR_PROGRESS_SHOW } from '../../shared/actionsMessages';
import Toolbar from '@material-ui/core/Toolbar';
import dorm from '../../../Logo/stuLead.jpg';
import badges from '../../../Logo/badges.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { Button, createMuiTheme, Grid, Paper, Typography, withStyles, Fab, Icon, IconButton } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { getSortedStudents } from '../../repo/user.repo';

export default class leaderBoardContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: [],
        }
      }

      theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Chilanka',
            "'Galada",
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


    componentDidMount(){
        this.loadSortedStudents();
        console.log('mount!');
    }

    loadSortedStudents = () => {
      dispatchAction({
          type: MAIN_LINEAR_PROGRESS_SHOW
      });
      getSortedStudents().then(response => {
        console.log(response);
        this.setState({
          data: response.data
      },
      dispatchAction({
          type: MAIN_LINEAR_PROGRESS_HIDE
      })
      );
        console.log(response);
      }).catch(error => {
        dispatchAction({
          type: MAIN_LINEAR_PROGRESS_HIDE
      });
        console.log(error);
      });
    }


    render()
    {
        return (
            <div style={{marginTop:'60px',width:'100%',backgroundColor:'white'}}>
            <div style={{ backgroundImage:`url(${dorm})`,height:'135vh',backgroundRepeat:'no-repeat',marginRight:'0px',
                        textAlign: 'center'}}>
            <div style={{paddingTop: '70px'}}>
                          <Grid item md={6}>
                            <Paper className="papergriddiv" style={{float:'left',width: '830px', maxHeight: '600px', overflow: 'auto', marginLeft: '70px', marginTop: '20px', background: 'rgba(230, 255, 179, 0.9)'}}>
                              <Table>
                              <TableHead >
                              <Toolbar position="static" style={{marginBottom: '15px'}}>
                                <Typography variant="h6">
                                Student Leadership Board
                                </Typography>
                               </Toolbar>
                                <TableRow>
                                <TableCell>
                                  Student Name
                                </TableCell>
                                <TableCell>
                                  Student Surname
                                </TableCell>
                                <TableCell>
                                  Dormitory
                                </TableCell>
                                <TableCell>
                                  Points Achieved
                                </TableCell>
                                <TableCell>
                                  Badge achieved
                                </TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                  {
                                      this.state.data && this.state.data.map(item => {
                                        return(
                                          <TableRow key={item.id}>
                                            <TableCell>
                                              {item.firstName}
                                            </TableCell>
                                            <TableCell>
                                              {item.surname}
                                            </TableCell>
                                            <TableCell>
                                              {item.studentDormitory}
                                            </TableCell>
                                            <TableCell>
                                              {item.points}
                                            </TableCell>
                                            <TableCell>
                                              {item.badge}
                                            </TableCell>
                                          </TableRow>
                                        )
                                  })}
                                </TableBody>
                              </Table>
                            </Paper>
                            </Grid>
                            <Paper className="papergriddiv" style={{width: '700px', height: '700px', marginTop: '20px', marginRight: '70px', float:'right', background: 'rgba(221, 157, 94, 0.85)'}}>
                                  <Typography variant="h6" style={{marginTop: '20px'}}>Claim Your Rewards Based on Badges</Typography>
                                  <img src={badges} style={{width:'550px',height:'300px'}} />
                                  <Typography style={{marginLeft: '10px', marginRight: '10px'}}>
                                      - Get 5% discount coupon in Jonas Reindl Cafe when reaching 300 points on the StuHeim App. The coupon can be used on the online shop and in their cafes.
                                  </Typography>
                                  <Typography style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>
                                      - Show your gold badge and get 20% discount on three rent pays in the student dormitory you are currently living in.
                                  </Typography>
                                  <Typography style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>
                                      - Show your silver badge and get 20% discount on one rent pays in the student dormitory you are currently living in.
                                  </Typography>
                                  <Typography style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>
                                      - Show your bronze badge and get 10% discount on your next order from Amazon. This offer can be redeemed for users only in Austria.
                                  </Typography>
                                  <Typography style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>
                                      - Get 10% discount in the student cafeteria in your faculty when reaching 150 points on the StuHeim App.
                                  </Typography>
                                  <Typography style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>
                                      - Get 12% discount any time with the gold, silver and bronze badge in the RentBike store.
                                  </Typography>
                              </Paper>
                          
                          </div>
            </div> 
            </div>
        )
    }

}