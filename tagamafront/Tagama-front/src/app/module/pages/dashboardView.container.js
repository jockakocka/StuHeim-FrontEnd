import { Typography, Grid, Paper } from '@material-ui/core';
import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
import { MAIN_LINEAR_PROGRESS_HIDE, MAIN_LINEAR_PROGRESS_SHOW } from '../../shared/actionsMessages';
import { getAllStudentDormitories } from '../../repo/dorms.repo';
import { dispatchAction } from '../../..';
import dorm from '../../../Logo/stuLead.jpg';

export default class daashboardViewContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
          formdata: {},
          data: {},
        }
      }
      componentDidMount()
      {
          this.loadStudentDormitoryData(0,10);
      }

    loadStudentDormitoryData = (page, size) => {
        dispatchAction({
            type: MAIN_LINEAR_PROGRESS_SHOW
        });
        getAllStudentDormitories(page, size).then(response => {
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

    calculateLocation(ratings)
    {
        var i;
        var sum=0;
        for (i = 0; i < ratings.length; i++) {
        sum+=(ratings[i].roomSpaceRating+ratings[i].priceRating+ratings[i].comfortRating)/3; 
    }
    sum/=ratings.length;
    console.log(sum);
    return sum;
    }

    calculateRoom(ratings)
    {
        var i; 
        var sum=0;
        for(i=0; i < ratings.length;i++){
            sum+=(ratings[i].locationRating+ratings[i].transportRating+ratings[i].neighbourhoodRating)/3; 
        }
        sum/=ratings.length;
        return sum;
    }

    calculateUtilities(ratings)
    {
        var i; 
        var sum=0;
        for(i=0; i < ratings.length;i++){
            sum+=(ratings[i].supermarketRating+ratings[i].universityRanking)/2; 
        }
        sum/=ratings.length;
        return sum;
    }

    calculateDorm(ratings)
    {
        var i; 
        var sum=0;
        for(i=0; i < ratings.length;i++){
            sum+=(ratings[i].gymRating+ratings[i].internetRating+ratings[i].kitchenRating)/3; 
        }
        sum/=ratings.length;
        return sum;
    }

    render(){
        const options = {
			title: {
				text: 'Location Ratings Dashboard'
            },
            theme: "light2",
            axisY:{
                   maximum: 5
                  },
			data: [
			{
				type: "column",
				dataPoints: [
                    { label: this.state.data.content ? this.state.data.content[0].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[0].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[1].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[1].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[2].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[2].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[3].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[3].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[4].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[4].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[5].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[5].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[6].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[6].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[7].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[7].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[8].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateLocation(this.state.data.content[8].ratings) : 0}
				]
			}
			]
        }
        
        const options1 = {
			title: {
				text: 'Utilities Ratings Dashboard'
            },
            theme: "light2",
            axisY:{
                   maximum: 5
                  },
			data: [
			{
				type: "column",
				dataPoints: [
                    { label: this.state.data.content ? this.state.data.content[0].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[0].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[1].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[1].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[2].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[2].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[3].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[3].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[4].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[4].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[5].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[5].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[6].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[6].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[7].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[7].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[8].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateUtilities(this.state.data.content[8].ratings) : 0}
				]
			}
			]
        }
        
        const options2 = {
			title: {
				text: 'Room Ratings Dashboard'
            },
            theme: "light2",
            axisY:{
                   maximum: 5
                  },
			data: [
			{
				type: "column",
				dataPoints: [
                    { label: this.state.data.content ? this.state.data.content[0].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[0].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[1].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[1].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[2].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[2].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[3].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[3].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[4].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[4].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[5].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[5].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[6].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[6].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[7].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[7].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[8].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateRoom(this.state.data.content[8].ratings) : 0}
				]
			}
			]
        }
        
        const options3 = {
			title: {
				text: 'Student Dormitory Ratings Dashboard'
            },
            theme: "light2",
            axisY:{
                   maximum: 5
                  },
			data: [
			{
				type: "column",
				dataPoints: [
                    { label: this.state.data.content ? this.state.data.content[0].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[0].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[1].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[1].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[2].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[2].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[3].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[3].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[4].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[4].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[5].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[5].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[6].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[6].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[7].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[7].ratings) : 0},
                      { label: this.state.data.content ? this.state.data.content[8].dormitoryName : '',
                      y: this.state.data.content ?  this.calculateDorm(this.state.data.content[8].ratings) : 0}
				]
			}
			]
		}
        return(
            <div style={{marginTop:'60px',width:'100%',backgroundColor:'white'}}>
            <div style={{ backgroundImage:`url(${dorm})`,height:'240vh',backgroundRepeat:'no-repeat',marginRight:'0px',
                        textAlign: 'center'}}>
            <div style={{marginTop: '60px', paddingTop: '10px'}}>
                </div>
            <Grid style={{textAlign:'center'}}>
                {console.log(this.state.data.content)}
            <Paper style={{marginTop:'80px',width:'80%', marginLeft: '190px'}}>
            <CanvasJSChart  options = {options} />  
            </Paper>
            <Paper style={{marginTop:'100px',width:'80%', marginLeft: '190px'}}>
             <CanvasJSChart options = {options2}/>  
            </Paper>
            <Paper style={{marginTop:'150px',width:'80%', marginLeft: '190px'}}>
             <CanvasJSChart options = {options3}/>  
            </Paper>
            </Grid> 
            </div>
            </div>
        )
    }
}