import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authentication';

class Header extends Component {
    state = {
        showSideBar: true
    };

    onShowSideBar = () => {
        this.setState({ showSideBar: !this.state.showSideBar });
        this.props.callbackFromParent(this.state.showSideBar);
    };

    logout = (e) => {
        e.preventDefault();
        this.props.logout(this.props.history);
    };

    renderLoginContent() {
        switch (this.props.authenticated) {
            case true:
                return (
                    <li key="1" className="nav-item">
                        <a
                            href="/logout"
                            onClick={this.logout}
                            className="nav-link"
                        >
                            Logout
                        </a>
                    </li>
                );
            default:
                return (
                    <li key="1" className="nav-item">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </li>
                );
        }
    }

    renderShowSideBarButton() {
        if (this.props.authenticated) {
            return (
                <button
                    className="btn btn-danger mr-2"
                    onClick={this.onShowSideBar}
                >
                    Side Bar
                </button>
            );
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                {this.renderShowSideBarButton()}
                <Link
                    className="navbar-brand"
                    to={this.props.authenticated ? '/dashboard' : '/'}
                >
                    Learning Management Tool
                </Link>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        {this.renderLoginContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    const { authenticated } = auth;
    return { authenticated };
}

export default connect(mapStateToProps, { logout })(withRouter(Header));
