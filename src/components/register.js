import React, { Component } from "react";
import { navigate } from "@reach/router";

import { auth } from "../firebase/config";

export default class Register extends Component {
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
    handleRegister = event => {
        event.preventDefault();
        const { email, password } = this.state;
        auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                navigate("/");
            })
            .catch(error => {
                console.log("Error registering new user: ", error);
            });
    };
    render() {
        const { email, password } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem", marginTop: "6rem" }}>
                            <h2 className="card-header">Register</h2>
                            <form onSubmit={this.handleRegister}>
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
                                        Register
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => navigate("/login")}
                                    >
                                        Login
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
