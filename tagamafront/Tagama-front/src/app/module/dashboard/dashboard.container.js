import React from 'react';
import {connect} from 'react-redux'
import {Grid, Paper} from '@material-ui/core';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import {getAppHealth} from './dashboard.actions';
import format from "date-fns/format";
import {handleLogout, hasAnyRole, refreshToken} from '../../shared/app.properties';
import Redirect from 'react-router-dom/Redirect';

class Dashboard extends React.Component {


    state = {
        data: [
            {name: '1/1/2019', Requests: 12},
            {name: '1/2/2019', Requests: 2}
        ],

    }

    unauthorized = false;

    componentWillMount() {
        this.unauthorized = !hasAnyRole('ROLE_USER,ROLE_ADMINISTRATION');

        // let refreshTime = new Date();
        // refreshTime.setSeconds(refreshTime.getSeconds() + 1800);

        // if (!localStorage.getItem('idm') || !localStorage.getItem('me')) {
        //     handleLogout()
        // } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < new Date()) {
        //     handleLogout()
        // } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < refreshTime) {
        //     refreshToken()
        // }
    }

    componentDidMount() {
        this.props.getAppHealth();

    }

    prepareDataHealth() {
        if (this.props.reportHealth.data != undefined) {
            var reportHealth = this.props.reportHealth.data["diskSpace"];
            var data = [
                {name: "Total", GB: Math.round((reportHealth["total"] / (1024 * 1024 * 1024)) * 10) / 10},
                {
                    name: "Used",
                    GB: Math.round((reportHealth["total"] - reportHealth["free"]) / (1024 * 1024 * 1024) * 10) / 10
                },
                {name: "Free", GB: Math.round((reportHealth["free"] / (1024 * 1024 * 1024)) * 10) / 10},

                {name: "Threshold", GB: reportHealth["threshold"] / (1024 * 1024 * 1024)}


            ];
            return data;
        }

    }


    render() {
        return (
            <div className="dashboard">
                {localStorage.getItem('idm') && localStorage.getItem('me') && this.unauthorized &&
                <Redirect to="/app/error/unauthorized"/>
                }
                <Grid container spacing={0}>
                    <Grid md={6} className="formGrid">
                        <Paper style={{
                            marginLeft: 30 + "px",
                            marginRight: 15 + 'px',
                            padding: 10 + 'px',
                            width: '94%',
                            height: '360px'
                        }}>
                            <h4>Disk Space</h4>
                            <ResponsiveContainer width="95%" height="80%">
                                <BarChart
                                    data={this.prepareDataHealth() && this.prepareDataHealth()}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="GB" fill="#8884d8"/>
                            </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>
                </Grid>


            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        reportHealth: state.dashboardReducer.reportHealth,
    }
};

export default connect(mapStateToProps, ({
     getAppHealth
}))(Dashboard);