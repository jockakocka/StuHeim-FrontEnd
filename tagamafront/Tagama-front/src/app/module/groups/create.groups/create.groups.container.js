import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {Group} from '../../../model/group.model';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Redirect from 'react-router-dom/Redirect'
import {Link} from 'react-router-dom';
import {createGroup, resetRedirect} from '../groups.actions';

class CreateGroupsContainer extends React.Component{    

    state = {
        singlegroup: new Group({}),
        redirectBack: false
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        // this.props.clearUser();
    }
    

    handleGroupFormChange = name => event => {

        let group = this.state.singlegroup;
       group[name] = event.target.value;
       this.setState({
        singlegroup: group
       });

    };

    handleClose = () => {
        this.setState({ redirectBack: true });
    };

    handleSubmit = () => {


        this.props.createGroup(this.state.singlegroup);
    };

    redirectBack = () => {
        this.props.resetRedirect();
        return <Redirect to='/app/groups/' />
    };

    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Create new group</DialogTitle>
                <div>
                    <form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                        <TextField
                        id="name"
                        label="Name"
                        onChange={this.handleGroupFormChange('name')}
                        fullWidth={true}
                        value={this.state.singlegroup.name}
                        margin="normal"
                        />
                        <DialogActions>
                            <Link to="/app/groups">
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
       redirectBack: state.groupsReducer.redirectBack
    }
};

export default connect(mapStateToProps, ({
    createGroup,resetRedirect,
}))(CreateGroupsContainer);