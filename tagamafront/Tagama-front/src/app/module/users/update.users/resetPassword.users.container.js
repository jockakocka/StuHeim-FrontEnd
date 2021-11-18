import React from 'react';
import { connect } from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { clearUser, fetchUser, resetRedirect, resetPasswordUser } from '../users.actions';
import { User } from '../../../model/user.model';
import { Link, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import LinearProgress from '@material-ui/core/LinearProgress';


export class ResetPasswordUserContainer extends React.Component {

    state = {
        singleuser: new User({}),
        newPassword: '',
        confirmPassword: '',
        error: false,
        redirectBack: false
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        this.props.clearUser();
    }

    redirectBack = () => {
        this.props.resetRedirect();
        return <Redirect to='/app/users' />
    }


    handleUserFormChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.newPassword === this.state.confirmPassword) {
            let u = this.state.singleuser;
            console.log(u);
            u['password']= this.state.newPassword;
            this.props.resetPasswordUser(u)
        }
        else {
            this.setState({
                error: true
            })
        }
    };

    render() {

        if ((this.props.singleuser != -1 && this.props.singleuser !== undefined) && (this.state.singleuser === undefined || this.state.singleuser.id === undefined)) {

            let user = this.props.singleuser;
            this.setState({
                singleuser: user
            });

        }
        return (
            <div>
                    <Dialog open={true} fullWidth={false} maxWidth="md" aria-labelledby="responsive-dialog-title">
                        <DialogTitle id="simple-dialog-title">Reset password for <strong>{this.props.singleuser ? this.props.singleuser.username : ''}</strong></DialogTitle>
                        {this.props.loading == true ? <LinearProgress color="secondary" /> : <div style={{ height: 5 + 'px' }}></div>}

                        {this.state.singleuser !== undefined ?


                            <div>
                                <form onSubmit={this.handleSubmit} autoComplete="off" maxWidth="md" className="dialog-form-container" >
                                    <TextField
                                        id="last-name"
                                        fullWidth={true}
                                        onChange={this.handleUserFormChange('newPassword')}
                                        label="New Password:"
                                        value={this.state.newPassword ? this.state.newPassword : ''}
                                        margin="normal"
                                        type="password"
                                        required
                                    />
                                    <TextField
                                        id="email-name"
                                        fullWidth={true}
                                        label="Confirm Password"
                                        onChange={this.handleUserFormChange('confirmPassword')}
                                        value={this.state.confirmPassword ? this.state.confirmPassword : ''}
                                        margin="normal"
                                        type="password"
                                        error={this.state.error}
                                        helperText={this.state.error ? 'Must match the previous entry' : ''}
                                        required
                                    />
                                    <DialogActions>
                                        <Link to="/app/users">
                                            <Button color="primary">
                                                Cancel
                                </Button>
                                        </Link>
                                        <Button type="submit" color="primary" variant="contained">
                                            Reset
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
    fetchUser, clearUser, resetPasswordUser, resetRedirect
}))(ResetPasswordUserContainer);

