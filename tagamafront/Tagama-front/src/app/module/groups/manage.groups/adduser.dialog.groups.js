import React from 'react';
import {connect} from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from 'react-router-dom';
import {fetchAllUsers} from '../../users/users.actions';
import {addUserToGroup, fetchAllUsersByGroup} from '../groups.actions';
import AddIcon from "@material-ui/icons/Add";
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

class AddUserToGroupContainer extends React.Component {

    state = {
        filterValue: "",
        usersInGroup: -1
    }

    componentDidMount(){

        this.props.fetchAllUsers(0, 8, "");
    }

    componentWillUnmount(){

    }

    handleFilterChange = event => {
        this.setState({
            filterValue: event.target.value
        })
        this.props.fetchAllUsers(0, 8, event.target.value);
    }

    handleChangePage = (event, page) => {
        this.props.fetchAllUsers(page, 8, this.state.filterValue)
    };

    addUserToGroup = (event, user) => {

        this.props.addUserToGroup(user, {id: this.props.match.params.id, name: undefined});
        this.setState({
            usersInGroup: this.props.allusersdata
        })
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
            <DialogTitle id="simple-dialog-title">Add user to group </DialogTitle>
            

                    <Table className='table'>
                        <TableHead>
                        <TableRow>

                            <TableCell colSpan={5}>
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
                                <TableCell>Username</TableCell>
                                <TableCell>Name</TableCell>

                                <TableCell>E-mail</TableCell>
                                <TableCell style={{width: 70+"px"}}><p className="text-center">&nbsp;</p></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { this.props.filteredUsers && this.props.filteredUsers.content ? this.props.filteredUsers.content.map(user =>
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.name + " " + user.surname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell width={250}>

                                {
                                    this.props.allusersdata && !this.userInArray(user, this.props.allusersdata.content) &&
                                
                                <Button onClick={event => this.addUserToGroup(event, user)} variant="contained" 
                                color="primary" aria-label="Details" className='btns success pull-right' >
                                    <AddIcon/>
                                </Button>

                                }
                                </TableCell>
                            </TableRow>
                            ) : ''}
                        </TableBody>
                    <TableFooter>
                <TableRow>
                    { this.props.filteredUsers && this.props.filteredUsers.content && 
                    
                    <TablePagination
                    rowsPerPageOptions={5}
                    colSpan={5}
                    count={this.props.filteredUsers.totalElements}
                    rowsPerPage={this.props.filteredUsers.size}
                    page={this.props.filteredUsers.number}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />

                    }
                </TableRow>
                </TableFooter>
                </Table>


                        <DialogActions>
                            <Link to="/app/groups">
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
        filteredUsers:  state.usersReducer.allusersdata,
        allusersdata:   state.groupsReducer.allusersdata,
    }
};

export default connect(mapStateToProps, ({
    fetchAllUsers,
    addUserToGroup,
    fetchAllUsersByGroup
}))(AddUserToGroupContainer);

