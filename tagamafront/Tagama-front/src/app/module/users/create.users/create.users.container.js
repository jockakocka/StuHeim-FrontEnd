import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Redirect from 'react-router-dom/Redirect'
import {clearUser, createUser, fetchUser, resetRedirect} from '../users.actions';
import {Link} from 'react-router-dom';

class CreateUserContainer extends React.Component{    

    state = {
        singleuser: {},
        redirectBack: false
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        this.props.clearUser();
    }
    
    handleUserFormChange = name => event => {

        let user = this.state.singleuser;
       user[name] = event.target.value;
       this.setState({
           singleuser: user
       });

        this.setState({
        singleuser: user
        });  
    };

    handleClose = () => {
        this.setState({ redirectBack: true });
    };

    handleSubmit = () => {


        this.props.createUser(this.state.singleuser);
    };

    redirectBack = () => {
        this.props.resetRedirect();
        return <Redirect to='/app/users' />
    };

    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Create new user</DialogTitle>
                <div>
                     
                    <form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                        <TextField
                        id="id"
                        label="Username (ID)"
                        onChange={this.handleUserFormChange('username')}
                        fullWidth={true}
                        value={this.state.singleuser.username}
                        margin="normal"
                        />
                        <TextField
                            id="password"
                            type="password"
                            label="Password"
                            onChange={this.handleUserFormChange('password')}
                            fullWidth={true}
                            value={this.state.singleuser.password}
                            margin="normal"
                        />
                        <TextField
                        id="first-name"
                        label="First name"
                        onChange={this.handleUserFormChange('name')}
                        fullWidth={true}
                        value={this.state.singleuser.name}
                        margin="normal"
                        />
                        <TextField
                        id="last-name"
                        required
                        fullWidth={true}
                        onChange={this.handleUserFormChange('surname')}
                        label="Last name"
                        value={this.state.singleuser.surname}
                        margin="normal"
                        />
                        <TextField
                            id="email-name"
                            fullWidth={true}
                            label="E-Mail"
                            onChange={this.handleUserFormChange('email')}
                            value={this.state.singleuser.email}
                            margin="normal"
                        />
                        <DialogActions>
                            <Link to="/app/users">
                                <Button onClick={() => this.handleClose()} color="primary">
                                Cancel
                                </Button>
                                </Link>
                            <Button onClick={() => this.handleSubmit()} color="primary" variant="contained">
                            Create
                            </Button>
                        </DialogActions>
                    </form>
                </div>
                {this.props.redirectBack ? this.redirectBack() : ''}
          </Dialog>
          </div>
        );
      }
}

const mapStateToProps = state => {

    return {
       singleuser: state.usersReducer.singleuser,
       redirectBack: state.usersReducer.redirectBack
    }
};

export default connect(mapStateToProps, ({
    fetchUser, createUser, resetRedirect, clearUser
}))(CreateUserContainer);