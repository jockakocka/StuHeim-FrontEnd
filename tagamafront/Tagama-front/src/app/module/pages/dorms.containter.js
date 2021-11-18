import { Button, createMuiTheme, Grid, Paper, Typography, withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import stuVienna from '../../../Logo/viennaPrater.jpeg';
import reward from '../../../Logo/circleReward.png';
import dorm from '../../../Logo/student5.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getAllStudentDormitories } from '../../repo/dorms.repo';
import { dispatchAction } from '../../..';
import { MAIN_LINEAR_PROGRESS_HIDE, MAIN_LINEAR_PROGRESS_SHOW } from '../../shared/actionsMessages';
import Toolbar from '@material-ui/core/Toolbar';


export default class dormsContainer extends React.Component {

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
      
    render()
    {
        return (
            <div style={{marginTop:'60px',width:'100%',backgroundColor:'white'}}>
            <div style={{ backgroundImage:`url(${dorm})`,height:'135vh',backgroundRepeat:'no-repeat',marginRight:'0px',
                        textAlign: 'center'}}>
            <div style={{paddingTop: '70px'}}>
                          <Grid item md={12}>
                            <Paper className="papergriddiv" style={{width: '1590px', height: '595px', marginLeft: '50px', marginTop: '10px', backgroudColor:'#E6FFB3'}}>
                              <Table style={{backgroundColor: '#E6FFB3'}}>
                              <TableHead>
                              <Toolbar position="static" style={{marginBottom: '15px', width:'330px'}}>
                                <Typography variant="h6">
                                Student Dormitories in Vienna
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
                                  Agreement Type
                                </TableCell>
                                <TableCell>
                                  Student Capacity
                                </TableCell>
                                <TableCell>
                                  Nearby Universities
                                </TableCell>
                                <TableCell>
                                  Available Rooms
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
                                              {item.dormAgreementType}
                                            </TableCell>
                                            <TableCell>
                                              {item.studentCapacity}
                                            </TableCell>
                                            <TableCell>
                                              {item.nearbyUniversities}
                                            </TableCell>
                                            <TableCell>
                                              {item.roomTypes}
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