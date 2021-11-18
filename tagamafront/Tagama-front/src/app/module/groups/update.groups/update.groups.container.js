import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {clearGroup, fetchGroup, resetRedirect, updateGroup} from '../groups.actions';
import {Group} from '../../../model/group.model';
import {Link, Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import LinearProgress from '@material-ui/core/LinearProgress';

export class UpdateGroupContainer extends React.Component{

    state = {
        singlegroup: new Group({type: ''}),
        redirectBack: false
    }

    componentDidMount(){
        this.props.fetchGroup(this.props.match.params.id);
    }
    
    componentDidUpdate(){

    }

    componentWillUnmount(){
        this.props.clearGroup();
    }

    redirectBack = () => {
        this.props.resetRedirect();
          return <Redirect to='/app/groups' />
    }


    handleGroupFormChange = name => event => {

        let group = this.state.singlegroup;
        group[name] = event.target.value;
        this.setState({
            singlegroup: group
        });

    };


     handleSubmit = () => {


         this.props.updateGroup(this.state.singlegroup);
    };
    render() {

        if((this.props.singlegroup != -1 && this.props.singlegroup !== undefined) && (this.state.singlegroup === undefined || this.state.singlegroup.id === undefined) && (this.props.singlegroup != this.state.singlegroup)){

            let group = this.props.singlegroup;
            this.setState({
                singlegroup: group
            });

        }
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Update group <strong>{this.props.singlegroup ? this.props.singlegroup.name : ''}</strong></DialogTitle>
            { this.props.loading == true ? <LinearProgress color="secondary" /> : <div style={{height: 5 + 'px'}}></div>}

            { this.state.singlegroup !== undefined ? 


                <div>
                    <form noValidate autoComplete="off" maxWidth="md" className="dialog-form-container" >
                        <TextField
                        id="id"
                        label="(ID)"
                        onChange={this.handleGroupFormChange('id')}
                        fullWidth={true}
                        value={this.state.singlegroup.id ? this.state.singlegroup.id : ''}
                        margin="normal"
                        InputProps={{
                            disabled: true,
                        }}
                        />
                        <TextField
                        id="name"
                        label="Name"
                        onChange={this.handleGroupFormChange('name')}
                        fullWidth={true}
                        value={this.state.singlegroup.name ? this.state.singlegroup.name : ''}
                        margin="normal"
                        />
                        <DialogActions>
                            <Link to="/app/groups">
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
        singlegroup: state.groupsReducer.singlegroup,
        redirectBack: state.groupsReducer.redirectBack,
        loading: state.groupsReducer.loading

    }
};

export default connect(mapStateToProps, ({
    fetchGroup, clearGroup, updateGroup, resetRedirect
}))(UpdateGroupContainer);

