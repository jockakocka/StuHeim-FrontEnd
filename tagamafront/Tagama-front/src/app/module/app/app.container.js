import React from 'react';
import {connect} from 'react-redux'
import { handleLogout, refreshToken } from '../../shared/app.properties';

class AppContainer extends React.Component {

    componentDidMount() {
    }


    render() {

        return (

            <div>


            </div>

        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, ({}))(AppContainer);

