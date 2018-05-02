import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import SideBar from './SideBar';
import Login from './auth/Login';
import Landing from './Landing';
import Dashboard from './Dashboard';
import requireAuth from '../hoc/requireAuthentication';

class App extends Component {
    state = {
        showSideBar: false
    };

    myCallback = (showSideBar) => {
        this.setState({ showSideBar });
    };

    renderSideBarContent() {
        if (this.props.auth.authenticated) {
            return <SideBar showSideBar={this.state.showSideBar} />;
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    {this.renderSideBarContent()}
                    <div id="content" className="container-fluid">
                        <Header callbackFromParent={this.myCallback} />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/dashboard"
                            component={requireAuth(Dashboard)}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(App);
