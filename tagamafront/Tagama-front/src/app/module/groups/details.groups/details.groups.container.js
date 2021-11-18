import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {clearGroup, createGroup, fetchGroup} from '../groups.actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';


class DetailsGroupsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchGroup(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.clearGroup();
    }
    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Details for group {this.props.singlegroup !== undefined ? this.props.singlegroup.name : ''}</DialogTitle>
            { this.props.loading == true ? <LinearProgress color="secondary" /> : <div style={{height: 5 + 'px'}}></div>}

            { this.props.singlegroup !== undefined ? 

                  <div><form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                <TextField
                        id="id"
                        label="ID (ID)"
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
        singlegroup: state.groupsReducer.singlegroup,
        loading: state.groupsReducer.loading

    }
};
export default connect(mapStateToProps, ({
    fetchGroup, createGroup, clearGroup
}))(DetailsGroupsContainer);