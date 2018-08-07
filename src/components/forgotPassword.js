import React, { Component } from "react";
import { navigate } from "@reach/router";

import { auth } from "../firebase/config";

export default class ForgotPassword extends Component {
    state = {
        email: "",
        success: false,
        message: "",
        displayError: false
    };
    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleResetPassword = event => {
        event.preventDefault();
        const { email } = this.state;
        auth.sendPasswordResetEmail(email)
            .then(() => {
                this.setState({
                    success: true,
                    message: "A password reset link has been sent to your email address",
                    displayError: true
                });
            })
            .catch(err => {
                console.log("Error on reset password: ", err);
                this.setState({
                    success: false,
                    message: err.message,
                    displayError: true
                });
            });
    };
    render() {
        const { email, success, message, displayError } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem", marginTop: "6rem" }}>
                            <h2 className="card-header">Reset Password</h2>
                            <form onSubmit={this.handleResetPassword}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="password">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            value={email}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    {displayError &&
                                        (success ? (
                                            <div className="alert alert-success">{message}</div>
                                        ) : (
                                            <div className="alert alert-danger">{message}</div>
                                        ))}
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Reset Password
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
