import React from 'react';
import AddIcon from "@material-ui/icons/Add"
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux'
import { action } from '../../../index';
import { Link } from "react-router-dom";

import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
} from "@material-ui/core";
import { fetchAllUsers } from './users.actions';
import Redirect from 'react-router/Redirect';
import { handleLogout, hasRole, refreshToken } from '../../shared/app.properties';
import Security from '@material-ui/icons/Security';


class Users extends React.Component {

    state = {
        filterValue: undefined,
        allusersdata: undefined,
    }

    unauthorized = false;

    componentWillMount() {
        this.unauthorized = !hasRole('ROLE_ADMINISTRATION');

        let refreshTime = new Date();
        refreshTime.setSeconds(refreshTime.getSeconds() + 1800);

        if (!localStorage.getItem('idm') || !localStorage.getItem('me')) {
            handleLogout()
        } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < new Date()) {
            handleLogout()
        } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < refreshTime) {
            refreshToken()
        }
    }
    componentDidMount() {
        this.props.fetchAllUsers(0, 8, "");
    }

    handleChangePage = (event, page) => {
        this.props.fetchAllUsers(page, 8, this.state.filterValue)
    };

    handleChangeRowsPerPage = (event) => {
        this.props.fetchAllUsers(this.props.allusersdata.page, event.target.value, this.state.filterValue);
    }

    handleFilterChange = event => {
        this.setState({
            filterValue: event.target.value
        })
        this.props.fetchAllUsers(0, 8, event.target.value);
    }

    render() {
        return (
            <div className="users">
                {localStorage.getItem('idm') && localStorage.getItem('me') && this.unauthorized &&
                    <Redirect to="/app/error/unauthorized" />
                }
                <Paper style={{ margin: 30 + "px" }}>

                    <Table className='table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Link to={'/app/users/create'}>
                                        <Button variant="extendedFab" color="primary" aria-label="Add" className="top-circle-create-btn ">
                                            Add new <AddIcon />
                                        </Button>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        id="standard-name"
                                        label="Filter"
                                        value={this.filterValue}
                                        margin="normal"
                                        onChange={this.handleFilterChange}
                                    />
                                </TableCell>
                                {this.props.allusersdata && this.props.allusersdata.content &&
                                    <TablePagination
                                        rowsPerPageOptions={8}
                                        colSpan={5}
                                        count={this.props.allusersdata.totalElements}
                                        rowsPerPage={this.props.allusersdata.size}
                                        page={this.props.allusersdata.number}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    />
                                }
                            </TableRow>
                            <TableRow >
                                <TableCell>Username</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>E-mail</TableCell>
                                <TableCell style={{ width: 300 + "px" }}><p className="text-center">Actions</p></TableCell>
                            </TableRow>
                        </TableHead>
                        {this.props.allusersdata && this.props.allusersdata.content &&
                            <TableBody>
                                {this.props.allusersdata.content && this.props.allusersdata.content.map(user =>
                                    <TableRow key={user.id}>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.name + " " + user.surname}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell width={400}>

                                            <Link to={'/app/users/delete/' + user.id}>
                                                <Button variant="contained" color="secondary" aria-label="Delete" className='btns pull-right' >
                                                    <DeleteIcon />
                                                </Button>
                                            </Link>
                                            <Link to={'/app/users/reset_password/' + user.id}>
                                                <Button variant="contained" color="primary" aria-label="Edit" className='btns  pull-right' >
                                                    <Security />
                                                </Button>
                                            </Link>
                                            <Link to={'/app/users/update/' + user.id}>
                                                <Button variant="contained" color="primary" aria-label="Edit" className='btns danger pull-right' >
                                                    <Icon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style={{ fill: "white" }} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Icon>
                                                </Button>
                                            </Link>
                                            <Link to={'/app/users/details/' + user.id}>
                                                <Button variant="contained" color="default" aria-label="Details" className='btns success pull-right' >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style={{ fill: "white" }} d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z" /></svg>
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        }
                        <TableFooter>
                            <TableRow>
                            </TableRow>
                        </TableFooter>
                    </Table>

                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allusersdata: state.usersReducer.allusersdata
    }
};

export default connect(mapStateToProps, ({
    fetchAllUsers
}))(Users);

