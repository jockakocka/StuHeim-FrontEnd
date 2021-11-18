import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from 'react-router-dom';
import {addUserPrivilege, getUsersFilteredByName} from '../privileges.actions';
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

        this.props.getUsersFilteredByName();
    }

    componentWillUnmount(){

    }

    handleFilterChange = event => {
        this.setState({
            filterValue: event.target.value
        })
        this.props.getUsersFilteredByName(0, 5, event.target.value);
    }

    handleChangePage = (event, page) => {
        this.props.getUsersFilteredByName(this.props.filteredUsers.size * page, this.props.filteredUsers.size, this.state.filterValue)
    };

    addUserPrivilege = (event, user) => {

        this.props.addUserPrivilege(user, {id: this.props.match.params.id, name: undefined});
    }

    userInArray(user, arr){
        var ind = true;
        for(var i = 0; i < arr.length; i ++){
            if(user.id == arr[i].id){
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
            <Dialog open={true} fullWidth={true} maxWidth="md"  aria-labelledby="responsive-dialog-title">
            <DialogTitle id="simple-dialog-title">Add privielege to user</DialogTitle>
            

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
                                <TableCell>E-mail</TableCell>
                                <TableCell style={{width: 70+"px"}}><p className="text-center">&nbsp;</p></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { this.props.filteredUsers ? this.props.filteredUsers.data.map(user =>
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.firstName + " " + user.lastName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell width={250}>

                                {
                                    this.props.allusersdata && !this.userInArray(user, this.props.allusersdata) &&
                                
                                <Button onClick={event => this.addUserPrivilege(event, user)} variant="contained" color="primary" aria-label="Details" className='btns success pull-right' >
                                    <AddIcon/>
                                </Button>

                                }
                                </TableCell>
                            </TableRow>
                            ) : ''}
                        </TableBody>
                    <TableFooter>
                <TableRow>
                    { this.props.filteredUsers && 
                    
                    <TablePagination
                    rowsPerPageOptions={5}
                    colSpan={5}
                    count={this.props.filteredUsers.total}
                    rowsPerPage={this.props.filteredUsers.size}
                    page={Math.round((this.props.filteredUsers.total/this.props.filteredUsers.size)/(this.props.filteredUsers.total/this.props.filteredUsers.start))}
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
        filteredUsers: state.privilegesReducer.filteredUsers,
        allusersdata:   state.privilegesReducer.allusersdata,
    }
};

export default connect(mapStateToProps, ({
    getUsersFilteredByName,
    addUserPrivilege
}))(AddPrivilegeToUserContainer);

