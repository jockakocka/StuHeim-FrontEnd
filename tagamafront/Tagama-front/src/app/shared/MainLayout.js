import React from 'react';
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Redirect, Route } from "react-router-dom";
import Users from '../module/users/users.container';
import Groups from '../module/groups/groups.container';
import Privileges from '../module/privileges/privileges.container';
import AddPrivilegeToGroupContainer from '../module/privileges/manage.privileges/addgroup.dialog.privileges';
import AddPrivilegeToUserContainer from '../module/privileges/manage.privileges/adduser.dialog.privileges';
import CreateUserContainer from '../module/users/create.users/create.users.container';
import UpdateUserContainer from '../module/users/update.users/update.users.container';
import DetailsUserContainer from '../module/users/details.users/details.users.container';
import DeleteUserContainer from '../module/users/delete.users/delete.users.container';
import { NavbarMain } from './NavbarMain';
import NavbarRight from './NavbarRight';
import { SidebarMenu } from './SidebarMenu';
import { AppBar, Toolbar, Typography, } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContent from './SnackbarContentWrapper';
import { CLEAR_NOTIFICATIONS } from './Main.Reducer';
import Slide from '@material-ui/core/Slide';
import LinearProgress from '@material-ui/core/LinearProgress';
import createGroupsContainer from '../module/groups/create.groups/create.groups.container';
import DeleteGroupsContainer from '../module/groups/delete.groups/delete.groups.container';
import UpdateGroupContainer from '../module/groups/update.groups/update.groups.container';
import DetailsGroupsContainer from '../module/groups/details.groups/details.groups.container';
import AddUserToGroupContainer from '../module/groups/manage.groups/adduser.dialog.groups';
import registerContainer from '../module/pages/register.container';
import { authorize } from './app.properties';
import dashboardContainer from '../module/dashboard/dashboard.container';

import ResetPasswordUserContainer from '../module/users/update.users/resetPassword.users.container';
import HomeContainer from '../module/pages/home.container';
import finalStu from '../../Logo/finalStu.png';
import aboutUsContainer from '../module/pages/aboutUs.container';
import contactContainer from '../module/pages/contact.container';
import dormsContainer from '../module/pages/dorms.containter';
import profileContainer from '../module/pages/profile.container';
import ratingContainer from '../module/pages/rating.container';
import leaderBoardContainer from '../module/pages/leaderboard.container';
import addRatingContainer from '../module/pages/addRating.container';
import dashboardViewContainer from '../module/pages/dashboardView.container';

class MainLayout extends React.Component {

    handleClose = () => {
        this.props.clearNotifications();
    };

    render() {
        return (
            <div>
                <div>
                    <CssBaseline />
                    <AppBar position="fixed" style={{ backgroundColor: '#e6ffb3' }}>
                        <Toolbar>
                        <img src={finalStu} style={{height:"9%",width: "9%", marginTop: "4px",
                             marginBottom: "4px", marginRight: "6px"}}/>
                        <NavbarMain/>
                        <NavbarRight/>
                    
                        </Toolbar>
                    </AppBar>


                    <main>
                        {this.props.loading == true ? <LinearProgress  color="primary"/> :
                            <div style={{ height: 10+ 'px' }}></div>}

                        <Route path="/about_us" component={aboutUsContainer}/>
                        <Route path="/contact" component={contactContainer}/>
                        <Route path="/profiles" component={profileContainer}/>
                        <Route path="/ratings" component={ratingContainer}/>
                        <Route path="/dorms" component={dormsContainer}/>
                        {/* <Route path="">
                            <Redirect to="/home" /> 
                        </Route> */}
                        <Route path="/register" component={registerContainer}>
                        </Route>
                        <Route path="/app/users" component={Users} />
                        <Route path="/app/users/update/:id" component={UpdateUserContainer} />
                        <Route path="/app/users/delete/:id" component={DeleteUserContainer} />
                        <Route path="/app/users/details/:id" component={DetailsUserContainer} />
                        <Route path="/app/users/create" component={CreateUserContainer} />
                        <Route path="/app/users/reset_password/:id" component={ResetPasswordUserContainer} />
                        <Route path="/leaderboard" component={leaderBoardContainer}/>
                        <Route path="/ratings/add/:id" component={addRatingContainer}/>
                        <Route path="/dashboard" component={dashboardViewContainer}/>

                        <Route path="/app/groups" component={Groups} />
                        <Route path="/app/groups/create" component={createGroupsContainer} />
                        <Route path="/app/groups/details/:id" component={DetailsGroupsContainer} />
                        <Route path="/app/groups/delete/:id" component={DeleteGroupsContainer} />
                        <Route path="/app/groups/update/:id" component={UpdateGroupContainer} />
                        <Route path="/app/groups/:id/users" component={AddUserToGroupContainer} />

                        <Route path="/app/privileges" component={Privileges} />
                        <Route path="/app/privileges/:id/users" component={AddPrivilegeToUserContainer} />
                        <Route path="/app/privileges/:id/groups" component={AddPrivilegeToGroupContainer} />


                    </main>
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
    //   classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        open: state.mainReducer.open,
        variant: state.mainReducer.variant,
        message: state.mainReducer.message,
        loading: state.mainReducer.loading
    }
};


export default connect(mapStateToProps, ({
    clearNotifications() {
        return { type: CLEAR_NOTIFICATIONS, payload: null }
    },

}))(MainLayout);