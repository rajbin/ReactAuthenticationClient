import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        console.log(this.props);
        return (
            <nav
                id="sidebar"
                className={this.props.showSideBar ? 'active' : ''}
            >
                <div className="sidebar-header">
                    <h3>Collapsible Sidebar</h3>
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="nav-link">
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideBar;
