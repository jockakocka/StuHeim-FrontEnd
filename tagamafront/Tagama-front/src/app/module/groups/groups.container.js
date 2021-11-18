import React from 'react';
import { action } from '../../../index';
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { fetchAllGroups, fetchAllUsersByGroup, removeUserFromGroup } from '../groups/groups.actions';
import { fetchAllUsers } from '../users/users.actions'
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText'
import Redirect from 'react-router/Redirect';
import {
    Button,
    LinearProgress,
    ListItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
} from "@material-ui/core";
import { handleLogout, hasRole, refreshToken } from '../../shared/app.properties';

class Groups extends React.Component {

    groups = [];
    totalItem = 0;
    start = 1;
    size = 8;
    some = '';
    activePage = 1;
    loading = false;

    state = {
        selectedGroup: undefined,
    }

    unauthorized = false;

    componentWillMount() {
        this.unauthorized = !hasRole('ROLE_ADMINISTRATION');
        let refreshTime = new Date();
        refreshTime.setSeconds(refreshTime.getSeconds() + 1800);

        // if (!localStorage.getItem('idm') || !localStorage.getItem('me')) {
        //     handleLogout()
        // } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < new Date()) {
        //     handleLogout()
        // } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < refreshTime) {
        //     refreshToken()
        // }
    }

    componentDidMount() {

        if (this.props.allgroupsdata === -1) {
            this.props.fetchAllGroups(0, 10);
        } else {
            this.props.fetchAllGroups(0, this.props.allgroupsdata.size);
        }
        if (this.state.selectedGroup != undefined) {
            this.props.fetchAllUsersByGroup(this.state.selectedGroup);
        }
    }



    handleChangePageGroups = (event, page) => {
        this.props.fetchAllGroups(page, this.props.allgroupsdata.size)
    };



    handleSelectGroup = (event, groups) => {


        this.setState({ selectedGroup: groups }, () => {
            this.props.fetchAllUsersByGroup(this.state.selectedGroup);

        });
    }

    removeUserFromGroup = (event, user) => {
        this.props.removeUserFromGroup(user, this.state.selectedGroup);
    }


    render() {
        if (this.props.allgroupsdata != undefined && this.props.allgroupsdata != -1 && this.state.selectedGroup == undefined) {
            this.setState({
                selectedGroup: { id: this.props.allgroupsdata.content[0].id, name: this.props.allgroupsdata.content[0].name }
            })
        }
        if (this.state.selectedGroup != undefined && this.props.allusersdata == undefined) {
            this.props.fetchAllUsersByGroup(this.state.selectedGroup);
        }
        return (
            <div style={{ margin: 30 + "px" }}>

                {localStorage.getItem('idm') && localStorage.getItem('me') && this.unauthorized &&
                    <Redirect to="/app/error/unauthorized" />
                }

                <Grid container spacing={24}>
                    <Grid md={5}>
                        <div className="groups">
                            <h1>{this.props.match.params.id}</h1>
                            <Paper style={{ margin: 5 + "px" }}>
                                {this.loading == true ? <LinearProgress colSpan={5} color="primary" /> : ''}
                                <List>
                                    <Link to={'/app/groups/create'}>
                                        <Button variant="extendedFab" color="primary" aria-label="Add" style={{ margin: 15 + "px" }} className="top-circle-create-btn ">
                                            Add new <AddIcon />
                                        </Button>
                                    </Link>
                                    {this.props.allgroupsdata.content && this.props.allgroupsdata.content.map(groups =>

                                        <ListItem
                                            button
                                            selected={this.state.selectedGroup && this.state.selectedGroup.id === groups.id}
                                            onClick={event => this.handleSelectGroup(event, groups)}
                                        >
                                            <ListItemText primary={groups.name} />

                                            <Link to={'/app/groups/details/' + groups.id}>
                                                <Button variant="contained" color="default" aria-label="Add" className='btns success pull-right' >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style={{ fill: "white" }} d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z" /></svg>
                                                </Button>
                                            </Link>

                                            <Link to={'/app/groups/update/' + groups.id}>
                                                <Button variant="contained" color="primary" aria-label="Add" className='btns danger pull-right' >
                                                    <Icon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style={{ fill: "white" }} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Icon>
                                                </Button>
                                            </Link>
                                            
                                            <Link to={'/app/groups/delete/' + groups.id}>
                                                <Button variant="contained" color="secondary" aria-label="Add" className='btns pull-right' >
                                                    <DeleteIcon />
                                                </Button>
                                            </Link>

                                        </ListItem>


                                    )}

                                    <TablePagination
                                        rowsPerPageOptions={8}
                                        colSpan={3}
                                        count={this.props.allgroupsdata.totalElements}
                                        rowsPerPage={this.props.allgroupsdata.size}
                                        page={this.props.allgroupsdata.number}
                                        onChangePage={this.handleChangePageGroups}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPageGroups}
                                    />
                                </List>
                            </Paper>
                        </div>
                    </Grid>


                    <Grid md={7}>
                        <div className="users">
                            <h1>{this.props.match.params.id}</h1>
                            <Paper style={{ padding: 20 + "px", margin: 5 + "px" }}>
                                {this.loading == true ? <LinearProgress colSpan={5} color="primary" /> : ''}
                                <Table className='table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                {this.state.selectedGroup &&
                                                    <div>
                                                        <Link to={'/app/groups/' + this.state.selectedGroup.id + '/users'}>
                                                            <Button variant="contained" color="primary" aria-label="Add" className='btns ' >
                                                                <AddIcon /> Add user
                                            </Button>
                                                        </Link>
                                                    </div>
                                                }
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    id="standard-name"
                                                    label="Filter"
                                                    value={this.name}
                                                    margin="normal"
                                                />
                                            </TableCell>

                                        </TableRow>
                                        <TableRow >
                                            <TableCell>ID</TableCell>
                                            <TableCell>E-mail</TableCell>
                                            <TableCell style={{ width: 300 + "px" }}><p className="text-center">Actions</p></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.allusersdata && this.props.allusersdata.content && this.props.allusersdata.content.map(user =>
                                            <TableRow key={user.id}>
                                                <TableCell>{user.id}</TableCell>
                                                <TableCell>{user.username}</TableCell>
                                                <TableCell width={250}>


                                                    <Button onClick={event => this.removeUserFromGroup(event, user)} variant="contained" color="secondary" aria-label="Add" className='btns pull-right' >
                                                        <DeleteIcon />
                                                    </Button>


                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>

                                </Table>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {


    return {
        allgroupsdata: state.groupsReducer.allgroupsdata,
        allusersdata: state.groupsReducer.allusersdata
    }
};

export default connect(mapStateToProps, ({
    fetchAllGroups, fetchAllUsers, fetchAllUsersByGroup, removeUserFromGroup
}))(Groups);
