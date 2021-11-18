import React from 'react';
import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GroupIcon from '@material-ui/icons/Group'
import {
    Button,
    LinearProgress,
    List,
    ListItem,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import {
    addGroupPrivilege,
    addUserPrivilege,
    fetchAllGroupsByPrivilege,
    fetchAllPrivileges,
    fetchAllUsersByPrivilege,
    removeGroupPrivilege,
    removeUserPrivilege
} from './privileges.actions';
import { handleLogout, hasRole, refreshToken } from '../../shared/app.properties';
import Redirect from 'react-router/Redirect';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


class Privileges extends React.Component {

    state = {
        selectedPrivilege: undefined,
        value: 0,
        addUserDialogOpen: false
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
        this.props.fetchAllPrivileges();
        if (this.state.selectedPrivilege != undefined) {
            this.props.fetchAllGroupsByPrivilege(this.state.selectedPrivilege);
        }
    }

    handleSelectPrivilege = (event, privilege) => {


        this.setState({ selectedPrivilege: privilege }, () => {
            this.props.fetchAllGroupsByPrivilege(this.state.selectedPrivilege);

        });
    }

    handleTabChange = (event, value) => {

        this.setState({ value });
    };

    removeGroup = (event, group) => {
        this.props.removeGroupPrivilege(group, this.state.selectedPrivilege);
    }

    removePrivilegeFromUser = (event, user) => {
        this.props.removeUserPrivilege(user, this.state.selectedPrivilege);
    }

    handleAddUserDialog = (status) => {
        if (status == 'open') {
            this.setState({ addUserDialogOpen: true });
        } else {
            this.setState({ addUserDialogOpen: false });
        }
    }

    render() {
        if (this.props.allprivileges != undefined && this.state.selectedPrivilege == undefined) {
            this.setState({ selectedPrivilege: this.props.allprivileges[0] });
        }
        if (this.state.selectedPrivilege != undefined && this.props.allgroupsdata == undefined) {
            this.props.fetchAllGroupsByPrivilege(this.state.selectedPrivilege);
        }
        return (
            <div className="privileges">
                {localStorage.getItem('idm') && localStorage.getItem('me') && this.unauthorized &&
                    <Redirect to="/app/error/unauthorized" />
                }
                <div style={{ margin: 30 + "px" }}>
                    <Grid container spacing={24}>
                        <Grid md={4}>
                            <Paper style={{ margin: 5 + "px" }}>
                                <List>
                                    {
                                        this.props.allprivileges && this.props.allprivileges.map((privilege, index) => {
                                            return (

                                                <ListItem
                                                    button
                                                    selected={this.state.selectedPrivilege && this.state.selectedPrivilege.id === privilege.id}
                                                    onClick={event => this.handleSelectPrivilege(event, privilege)}
                                                >
                                                    <ListItemText primary={privilege.name} />
                                                </ListItem>

                                            )
                                        })}


                                </List>

                            </Paper>
                        </Grid>

                        <Grid md={8}>
                            <Paper style={{ padding: 20 + "px", margin: 5 + "px" }}>
                                {this.props.loading == true ? <LinearProgress color="secondary" /> :
                                    <div style={{ height: 5 + 'px' }}></div>}

                                <Typography variant="h5" component="h2"><strong>{this.state.selectedPrivilege && this.state.selectedPrivilege.name}</strong></Typography>

                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleTabChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                >
                                    <Tab value={0} label="Groups" icon={<GroupIcon />} />
                                </Tabs>

                                {this.state.value === 0 && this.state.selectedPrivilege && <TabContainer>

                                    <Link to={'/app/privileges/' + this.state.selectedPrivilege.id + '/groups'}>
                                        <Button variant="contained" color="primary" aria-label="Add" className='btns '>
                                            <AddIcon /> Add groups
                                        </Button>
                                    </Link>

                                    <Table className='table'>
                                        <TableHead>

                                            <TableRow>
                                                <TableCell>ID</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell style={{ width: 100 + "px" }}><p
                                                    className="text-center">Actions</p></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                this.props.allgroupsdata ? this.props.allgroupsdata.map((group, index) => {
                                                    return (
                                                        <TableRow>
                                                            <TableCell>{group.id}</TableCell>
                                                            <TableCell>{group.name}</TableCell>
                                                            <TableCell>
                                                                <Button
                                                                    onClick={event => this.removeGroup(event, group)}
                                                                    variant="contained" color="secondary"
                                                                    aria-label="Delete" className='btns pull-right'>
                                                                    <DeleteIcon />
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                }) : ''
                                            }
                                        </TableBody>
                                    </Table>


                                </TabContainer>}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allusersdata: state.privilegesReducer.allusersdata,
        allgroupsdata: state.privilegesReducer.allgroupsdata,
        allprivileges: state.privilegesReducer.allprivilegesdata,
        loading: state.privilegesReducer.loading
    }
};

export default connect(mapStateToProps, ({
    fetchAllPrivileges, fetchAllUsersByPrivilege, fetchAllGroupsByPrivilege,
    removeUserPrivilege,
    removeGroupPrivilege,
    addUserPrivilege,
    addGroupPrivilege
}))(Privileges);

