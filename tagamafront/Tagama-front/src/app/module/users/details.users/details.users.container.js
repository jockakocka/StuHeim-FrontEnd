import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {clearUser, createUser, fetchUser} from '../users.actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';


class DetailsUserContainer extends React.Component{    

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.clearUser();
    }

    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Details for user {this.props.singleuser !== undefined ? this.props.singleuser.username : ''}</DialogTitle>
            { this.props.loading == true ? <LinearProgress color="secondary" /> : <div style={{height: 5 + 'px'}}></div>}

            { this.props.singleuser &&

                  <div><form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                <TextField
                        id="id"
                        label="Username (ID)"
                        fullWidth={true}
                        value={this.props.singleuser.username ? this.props.singleuser.username : ' '}
                        margin="normal"
                        InputProps={{
                            disabled: true,
                        }}
                        />
                        <TextField
                        id="first-name"
                        label="First name"
                        fullWidth={true}
                        value={this.props.singleuser.name ? this.props.singleuser.name : ' ' }
                        margin="normal"
                        InputProps={{
                            disabled: true,
                        }}
                        />
                        <TextField
                        id="last-name"
                        label="Last name"
                        fullWidth={true}
                        value={this.props.singleuser.surname ? this.props.singleuser.surname : ' '}
                        margin="normal"
                        InputProps={{
                            disabled: true,
                        }}
                        />
                        
                        <TextField
                            id="email-name"
                            fullWidth={true}
                            label="E-Mail"
                            value={this.props.singleuser.email ? this.props.singleuser.email : ' '}
                            margin="normal"
                            InputProps={{
                                disabled: true,
                            }}
                        />
                        
                        </form></div>

                        } 
                        <DialogActions>
                            <Link to="/app/users">
                                <Button  color="primary">
                                Close
                                </Button>
                                </Link>
                        </DialogActions> 
          </Dialog>
          </div>
        );
      }
}

const mapStateToProps = state => {

    return {
        singleuser: state.usersReducer.singleuser,
        loading: state.usersReducer.loading
    }
};

export default connect(mapStateToProps, ({
    fetchUser, createUser, clearUser
}))(DetailsUserContainer);

