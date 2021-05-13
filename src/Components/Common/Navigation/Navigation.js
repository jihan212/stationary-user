import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">User</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;