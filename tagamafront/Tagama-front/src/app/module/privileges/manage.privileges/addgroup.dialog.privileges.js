import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from 'react-router-dom';
import {addGroupPrivilege, getGroupsFilteredByName} from '../privileges.actions';
import AddIcon from "@material-ui/icons/Add"
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TextField
} from "@material-ui/core";

class AddPrivilegeToUserContainer extends React.Component {

    state = {
        filterValue: undefined
    }

    componentDidMount(){

        this.props.getGroupsFilteredByName(0, 10, undefined);
    }

    componentWillUnmount(){

    }

    handleFilterChange = event => {
        this.setState({
            filterValue: event.target.value
        })
        this.props.getGroupsFilteredByName(0, 10, event.target.value);
    }

    handleChangePage = (event, page) => {
        this.props.getGroupsFilteredByName(page, this.props.filteredGroups.size, this.state.filterValue)
    };

    addGroupPrivilege = (event, user) => {

        this.props.addGroupPrivilege(user, {id: this.props.match.params.id, name: undefined});
    }

    groupInArray(group, arr){
        var ind = true;
        for(var i = 0; i < arr.length; i ++){
            if(group.id == arr[i].id){
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Add privielege to group</DialogTitle>
            

                    <Table className='table'>
                        <TableHead>
                        <TableRow>

                            <TableCell colSpan={4}>
                            <TextField
                                id="standard-name"
                                label="Filter"
                                value={this.state.filterValue}
                                margin="normal"
                                onChange={this.handleFilterChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow >
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell style={{width: 70+"px"}}><p className="text-center">&nbsp;</p></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { this.props.filteredGroups && this.props.filteredGroups.content.map(group =>
                            <TableRow key={group.id}>
                                <TableCell>{group.id}</TableCell>
                                <TableCell>{group.name}</TableCell>
                                <TableCell width={250}>

                                {
                                    this.props.allgroupsdata && !this.groupInArray(group, this.props.allgroupsdata) &&
                                
                                <Button onClick={event => this.addGroupPrivilege(event, group)} variant="contained" color="primary" aria-label="Details" className='btns success pull-right' >
                                    <AddIcon/>
                                </Button>

                                }
                                </TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                    <TableFooter>
                <TableRow>
                    { this.props.filteredGroups && 
                    
                    <TablePagination
                    rowsPerPageOptions={5}
                    colSpan={5}
                    count={this.props.filteredGroups.totalElements}
                    rowsPerPage={this.props.filteredGroups.size}
                    page={this.props.filteredGroups.number}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />

                    }
                </TableRow>
                </TableFooter>
                </Table>


                        <DialogActions>
                            <Link to="/app/privileges">
                                <Button color="primary">
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
        filteredGroups:  state.privilegesReducer.filteredGroups,
        allgroupsdata:   state.privilegesReducer.allgroupsdata,
    }
};

export default connect(mapStateToProps, ({
    getGroupsFilteredByName,
    addGroupPrivilege
}))(AddPrivilegeToUserContainer);

