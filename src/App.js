import React, { Component } from "react";
import { Router, Link } from "@reach/router";

import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotPassword";
import ChangePassword from "./components/changePassword";
import Home from "./components/home";

const App = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <a className="navbar-brand" href="#">
                        Firebase Authentication
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="register">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="forgot-password">
                                    Forgot Password
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="change-password">
                                    Change Password
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <Router>
            <Home path="/" />
            <Login path="login" />
            <Register path="register" />
            <ForgotPassword path="forgot-password" />
            <ChangePassword path="change-password" />
        </Router>
    </div>
);

export default App;
