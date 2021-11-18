import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {clearGroup, deleteGroup, fetchGroup, resetRedirect} from '../groups.actions'
import Redirect from 'react-router-dom/Redirect'
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';


class DeleteGroupsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchGroup(this.props.match.params.id);
    }
    handleClose = () => {
        this.setState({ redirectBack: true });
    };

    handleSubmit = () => {


        this.props.deleteGroup(this.props.singlegroup);
    };
    componentWillUnmount(){
        this.props.clearGroup();
    }
    redirectBack = () => {
        this.props.resetRedirect();
        return <Redirect to='/app/groups' />
    };
    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Delete group {this.props.singlegroup ? this.props.singlegroup.name : ''}</DialogTitle>
                <div>
                { this.props.loading == true ? <LinearProgress color="secondary" /> : <div style={{height: 5 + 'px'}}></div>}

                { this.props.singlegroup !== undefined ? 

                <div><form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                <TextField
                    id="id"
                    label="id (ID)"
                    fullWidth={true}
                    value={this.props.singlegroup.id ? this.props.singlegroup.id : ' '}
                    margin="normal"
                    InputProps={{
                        disabled: true,
                    }}
                    />
                    <TextField
                    id="name"
                    label="Name"
                    fullWidth={true}
                    value={this.props.singlegroup.name ? this.props.singlegroup.name : ' ' }
                    margin="normal"
                    InputProps={{
                        disabled: true,
                    }}
                    />
                    </form></div>

                    : ''} 


                    <DialogActions>
                            <Link to="/app/groups">
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
        singlegroup: state.groupsReducer.singlegroup,
        redirectBack: state.groupsReducer.redirectBack,
        loading: state.groupsReducer.loading
    }
};

export default connect(mapStateToProps, ({
    fetchGroup, deleteGroup, resetRedirect, clearGroup
}))(DeleteGroupsContainer);

