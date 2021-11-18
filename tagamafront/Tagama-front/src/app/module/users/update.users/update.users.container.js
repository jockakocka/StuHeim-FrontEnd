import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {clearUser, fetchUser, resetRedirect, updateUser} from '../users.actions';
import {User} from '../../../model/user.model';
import {Link, Redirect} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import LinearProgress from '@material-ui/core/LinearProgress';


export class UpdateUserContainer extends React.Component{    

    state = {
        singleuser: new User({}),
        redirectBack: false
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id);
    }
    
    componentDidUpdate(){

    }

    componentWillUnmount(){
        this.props.clearUser();
    }

    redirectBack = () => {
        this.props.resetRedirect();
          return <Redirect to='/app/users' />
    }
    
    calcDisplayName = () => {
        let fn = this.state.singleuser.firstName === undefined ? '' : this.state.singleuser.firstName;
        let ln = this.state.singleuser.lastName === undefined ? '' : this.state.singleuser.lastName;
        let user = this.state.singleuser;
        user.displayName = fn + ' ' + ln;
        this.setState({
            singleuser: user
        });
    };

    handleUserFormChange = name => event => {

        let user = this.state.singleuser;
        user[name] = event.target.value;
        this.setState({
            singleuser: user
        });

        this.calcDisplayName();
     };


     handleSubmit = () => {


         this.props.updateUser(this.state.singleuser);
    };

    render() {

        if((this.props.singleuser != -1 && this.props.singleuser !== undefined) && (this.state.singleuser === undefined || this.state.singleuser.id === undefined)){

            let user = this.props.singleuser;
            this.setState({
                singleuser: user
            });

        }
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Update user <strong>{this.props.singleuser ? this.props.singleuser.id : ''}</strong></DialogTitle>
            { this.props.loading == true ? <LinearProgress color="secondary" /> : <div style={{height: 5 + 'px'}}></div>}

            { this.state.singleuser !== undefined ? 


                <div>
                    <form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                        <TextField
                        id="id"
                        label="Username (ID)"
                        onChange={this.handleUserFormChange('id')}
                        fullWidth={true}
                        value={this.state.singleuser.id ? this.state.singleuser.id : ''}
                        margin="normal"
                        InputProps={{
                            disabled: true,
                        }}
                        />
                        <TextField
                        id="first-name"
                        label="Username"
                        disabled={true}
                        onChange={this.handleUserFormChange('username')}
                        fullWidth={true}
                        value={this.state.singleuser.username ? this.state.singleuser.username : ''}
                        margin="normal"
                        />
                        <TextField
                        id="first-name"
                        label="First name"
                        onChange={this.handleUserFormChange('name')}
                        fullWidth={true}
                        value={this.state.singleuser.name ? this.state.singleuser.name : ''}
                        margin="normal"
                        />
                        <TextField
                        id="last-name"
                        fullWidth={true}
                        onChange={this.handleUserFormChange('surname')}
                        label="Last name"
                        value={this.state.singleuser.surname ? this.state.singleuser.surname : ''}
                        margin="normal"
                        />
                        <TextField
                            id="email-name"
                            fullWidth={true}
                            label="E-Mail"
                            onChange={this.handleUserFormChange('email')}
                            value={this.state.singleuser.email ? this.state.singleuser.email : ''}
                            margin="normal"
                        />
                        <DialogActions>
                            <Link to="/app/users">
                                <Button color="primary">
                                Cancel
                                </Button>
                                </Link>
                            <Button onClick={() => this.handleSubmit()} color="primary" variant="contained">
                            UPDATE
                            </Button>
                        </DialogActions>
                    </form>
                </div>
                
                : ''} 
                {this.props.redirectBack ? this.redirectBack() : ''}
          </Dialog>
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
        fetchUser, clearUser, updateUser, resetRedirect
    }))(UpdateUserContainer);

