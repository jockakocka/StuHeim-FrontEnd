import React from 'react';
import { getAllStudentDormitories } from '../../repo/dorms.repo';
import { dispatchAction } from '../../..';
import { MAIN_LINEAR_PROGRESS_HIDE, MAIN_LINEAR_PROGRESS_SHOW } from '../../shared/actionsMessages';
import Toolbar from '@material-ui/core/Toolbar';
import dorm from '../../../Logo/student5.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { Button, createMuiTheme, Grid, Paper, Typography, withStyles, Fab, Icon, IconButton } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import RateReviewIcon from '@material-ui/icons/RateReview';
import './ratings.css';

export default class ratingContainer extends React.Component {


    
    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
        }
      }


    componentDidMount(){
        this.loadStudentDormitoryData(0,9);
        console.log('mount!');
    }

    loadStudentDormitoryData = (page, size) => {
      dispatchAction({
          type: MAIN_LINEAR_PROGRESS_SHOW
      });
      getAllStudentDormitories(page, size).then(response => {
        console.log(response);
        this.setState({
          data: response
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

    render()
    {
        return (
            <div style={{marginTop:'60px',width:'100%',backgroundColor:'white'}}>
            <div style={{ backgroundImage:`url(${dorm})`,height:'114vh',backgroundRepeat:'no-repeat',marginRight:'0px',
                        textAlign: 'center'}}>
            <div style={{paddingTop: '70px'}}>
                          <Grid item md={12}>
                            <Paper className="papergriddiv" style={{width: '1300px', maxHeight: '600px', overflow: 'auto', marginLeft: '210px', marginTop: '20px', background: 'rgba(204, 215, 103, 0.8)'}}>
                              <Table>
                              <TableHead >
                              <Toolbar position="static" style={{marginBottom: '15px', width:'420px'}}>
                                <Typography variant="h6">
                                Rating of Student Dormitories in Vienna
                                </Typography>
                               </Toolbar>
                                <TableRow>
                                <TableCell>
                                  Dorm Name
                                </TableCell>
                                <TableCell>
                                  Adress
                                </TableCell>
                                <TableCell>
                                  Bezirk
                                </TableCell>
                                <TableCell>
                                  City
                                </TableCell>
                                <TableCell>
                                  Add Rating
                                </TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                  {
                                      this.state.data && this.state.data.data && this.state.data.data.content &&
                                      this.state.data.data.content.map(item => {
                                        return(
                                          <TableRow key={item.id}>
                                            <TableCell>
                                              {item.dormitoryName}
                                            </TableCell>
                                            <TableCell>
                                              {item.dormitoryAddress}
                                            </TableCell>
                                            <TableCell>
                                              {item.bezirk}
                                            </TableCell>
                                            <TableCell>
                                              {item.dormitoryCity}
                                            </TableCell>
                                            <TableCell>
                                              {<Link to={'/ratings/add/' + item.id} style={{textDecoration: 'none', color: 'white', marginLeft: '30px'}}>
                                                <Fab size="small" style={{backgroundColor: '#1c5a54'}} aria-label="Rate" className="space-mrg-4">
                                                <RateReviewIcon >rate</RateReviewIcon>
                                                </Fab>
                                                </Link>}
                                            </TableCell>
                                          </TableRow>
                                        )
                                  })}
                                </TableBody>
                              </Table>
                            </Paper>
                          </Grid>
                          </div>
            </div> 
            </div>
        )
    }

}