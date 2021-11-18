import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {clearUser, deleteUser, fetchUser, resetRedirect} from '../users.actions';
import Redirect from 'react-router-dom/Redirect'
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';

class DeleteUserContainer extends React.Component{    

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id);
    }

    handleClose = () => {
        this.setState({ redirectBack: true });
    };

    handleSubmit = () => {


        this.props.deleteUser(this.props.singleuser);
    };

    componentWillUnmount(){
        this.props.clearUser();
    }

    redirectBack = () => {
        this.props.resetRedirect();
        return <Redirect to='/app/users' />
    };

    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Delete user {this.props.singleuser ? this.props.singleuser.username : ''}</DialogTitle>
                <div>
                { this.props.loading == true ? <LinearProgress color="secondary" /> : <div style={{height: 5 + 'px'}}></div>}

                { this.props.singleuser !== undefined ? 

                <div><form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                <TextField
                    id="id"
                    label="Username (ID)"
                    fullWidth={true}
                    value={this.props.singleuser.id ? this.props.singleuser.id : ' '}
                    margin="normal"
                    InputProps={{
                        disabled: true,
                    }}
                    />
                    <TextField
                    id="first-name"
                    label="First name"
                    fullWidth={true}
                    value={this.props.singleuser.username ? this.props.singleuser.username : ' ' }
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

                    : ''} 


                    <DialogActions>
                            <Link to="/app/users">
                                <Button color="primary">
                                Cancel
                                </Button>
                                </Link>
                            <Button onClick={() => this.handleSubmit()} color="secondary" variant="contained">
                            Delete
                            </Button>
                    </DialogActions>
                </div>
          </Dialog>
          
          {this.props.redirectBack ? this.redirectBack() : ''}

          </div>
        );
      }
}

const mapStateToProps = state => {


    return {
        singleuser: state.usersReducer.singleuser,
        redirectBack: state.usersReducer.redirectBack,
        loading: state.usersReducer.loading
    }
};

export default connect(mapStateToProps, ({
    fetchUser, deleteUser, resetRedirect, clearUser
}))(DeleteUserContainer);
