import React from 'react';
import logo from './logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header-container">
                    <div className="logo-item">
                        <img src={logo} alt="logo" className="image-item" />
                        <h3>Homemade Food</h3>
                    </div>
                    <div className="nav-menu">
                        <Link to="/">
                            <button>
                                Home
                            </button>
                        </Link>
                        <Link to="/create">
                            <button>
                                Create
                            </button>
                        </Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;