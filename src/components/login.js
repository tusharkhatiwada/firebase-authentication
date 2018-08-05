import React, { Component } from "react";
import { navigate } from "@reach/router";

import { auth } from "../firebase/config";

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    };
    handleInput = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleLogin = event => {
        event.preventDefault();
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log("Login: ", response);
            })
            .catch(error => {
                console.log("Error logging in: ", error);
            });
    };
    render() {
        const { email, password } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem", marginTop: "6rem" }}>
                            <h2 className="card-header">Login</h2>
                            <form onSubmit={this.handleLogin}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            value={email}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={password}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => navigate("/register")}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
