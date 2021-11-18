import { Dialog, DialogTitle, DialogContent, LinearProgress, Grid,Typography, TextField, Divider, withStyles } from '@material-ui/core';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { dispatchAction } from '../../..';
import { MAIN_LINEAR_PROGRESS_HIDE, MAIN_LINEAR_PROGRESS_SHOW } from '../../shared/actionsMessages';
import { createRating } from '../../repo/dorms.repo';

export default class addRatingContainer extends React.Component {

// const [value, setValue] = React.useState(2);
  
constructor(props) {
    super(props)
    this.state ={
      formdata: {},
      data: {},
      rating:{},
      linearProgressShown: false,
      redirectBack: false
    }
  }

  StyledButton = withStyles({
    root: {
      background: '#1c5a54',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 40,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  
handleFormInput = name => event => {
    var formdata = this.state.rating;
    formdata[name] = parseInt(event.target.value);
      this.setState({
        rating: formdata
      });
      console.log(this.state.rating);
      console.log(event.target.value);
      console.log(this.props);
  }
  renderRedirect = () => {
    if (this.state.redirectBack) {
      return <Redirect to='/ratings' />
    }
  }
  setRedirect = () => {
    this.setState({
        redirectBack: true
    });
  }

  handleCreate = () => {
    this.setState({
        linearProgressShown: true
    });
    createRating(this.props.match.params.id, this.state.rating,localStorage.getItem("username")).then(response => {
        dispatchAction({
            type: MAIN_LINEAR_PROGRESS_SHOW,
            payload: {
                snackbarMessage: 'Successfuly added rating!',
                snackbarType: 'success'
            }
        });
    });
  }


    render()
    {
        return (
        <Dialog
        open={true}
        maxWidth="md"
        aria-labelledby="max-width-dialog-title"
        aria-describedby="max-width-dialog-description"
        fullWidth={true}
       >
        <DialogTitle id="max-width-dialog-title" style={{backgroundColor: '#CFE9E6'}}>{"Create New Student Dormitory Rating"}</DialogTitle>
        <DialogContent style={{backgroundColor: '#CFE9E6'}}>
          {
            this.state.linearProgressShown &&
            <LinearProgress color="secondary" />
          }
           <Grid container style={{backgroundColor: '#CFE9E6'}}>
            <Grid item md={6}>
              <Typography variant="h6">Location Infromation:</Typography>
              <Divider style={{ marginBottom: '10px', marginTop: '5px'}} />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">Location</Typography>
                <Rating
                    name="locationRating"
                    value={this.state.data && this.state.data.locationRating}
                    onChange={this.handleFormInput('locationRating')}
                />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">Transport Connection</Typography>
                <Rating
                    name="transportRating"
                    value={this.state.data && this.state.data.transportRating}
                    onChange={this.handleFormInput('transportRating')}
                    
                />
                </Box>
                <Box component="fieldset" borderColor="transparent">
                <Typography component="legend">Neighbourhood</Typography>
                <Rating
                     name="neighbourhoodRating"
                     value={this.state.data && this.state.data.neighbourhoodRating}
                     onChange={this.handleFormInput('neighbourhoodRating')}
                />
                </Box>
              </Box>
              </Grid>
              <Grid item md={6}>
              <Typography variant="h6">Services Infromation:</Typography>
              <Divider style={{ marginBottom: '10px', marginTop: '5px' }} />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">Supermarket Nearby</Typography>
                <Rating
                     name="supermarketRating"
                     value={this.state.data && this.state.data.supermarketRating}
                     onChange={this.handleFormInput('supermarketRating')}
                />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">University Nearby</Typography>
                <Rating
                    name="universityRating"
                    value={this.state.data && this.state.data.universityRating}
                    onChange={this.handleFormInput('universityRating')}
                />
                </Box>
                <Box component="fieldset" borderColor="transparent">
                <Typography component="legend">Bank Nearby</Typography>
                <Rating
                     name="bank"
                     value={this.state.data && this.state.data.bank}
                     onChange={this.handleFormInput('bank')}
                />
                </Box>
              </Box>
              </Grid>
              <Grid item md={6}>
              <Typography variant="h6">Room Infromation:</Typography>
              <Divider style={{ marginBottom: '10px', marginTop: '5px' }} />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">Room Space</Typography>
                <Rating
                     name="roomSpaceRating"
                     value={this.state.data && this.state.data.roomSpaceRating}
                     onChange={this.handleFormInput('roomSpaceRating')}
                />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">Price Value</Typography>
                <Rating
                     name="priceRating"
                     value={this.state.data && this.state.data.priceRating}
                     onChange={this.handleFormInput('priceRating')}
                />
                </Box>
                <Box component="fieldset" borderColor="transparent">
                <Typography component="legend">Comfort Value</Typography>
                <Rating
                     name="comfortRating"
                     value={this.state.data && this.state.data.comfortRating}
                     onChange={this.handleFormInput('comfortRating')}
                />
                </Box>
              </Box>
              </Grid>
              <Grid item md={6}>
              <Typography variant="h6">Student Dormitory Information:</Typography>
              <Divider style={{ marginBottom: '10px', marginTop: '5px' }} />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">Gym In Dorm</Typography>
                <Rating
                    name="gymRating"
                    value={this.state.data && this.state.data.gymRating}
                    onChange={(this.handleFormInput('gymRating'))}
                />
                <Box component="fieldset"  borderColor="transparent">
                <Typography component="legend">Kitchen Quality</Typography>
                <Rating
                     name="kitchenRating"
                     value={this.state.data && this.state.data.kitchenRating}
                     onChange={this.handleFormInput('kitchenRating')}
                />
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Internet Speed</Typography>
                <Rating
                     name="internetRating"
                     value={this.state.data && this.state.data.internetRating}
                     onChange={this.handleFormInput('internetRating')}
                />
                </Box>
              </Box>
              </Grid>
              <Link to="/ratings">
              <this.StyledButton
                variant="contained"
                style={{marginLeft: '730px', marginTop: '30px', marginBottom: '30px'}}
             >CLOSE</this.StyledButton>
              </Link>
             <this.StyledButton
                variant="contained"
                onClick={()=> this.handleCreate()}
                style={{marginLeft: '20px', marginTop: '30px', marginBottom: '30px'}}
             >SAVE</this.StyledButton>
              </Grid>
        </DialogContent>  
       </Dialog>

        )
    }

}