import React, { Component } from "react";
import { navigate } from "@reach/router";

import { auth } from "../firebase/config";

export default class ChangePassword extends Component {
    state = {
        password: "",
        cpassword: ""
    };
    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handlePasswordChange = event => {
        event.preventDefault();
        const { password, cpassword } = this.state;
        if (password === cpassword) {
            const user = auth.currentUser;
            user.updatePassword(password)
                .then(() => {
                    navigate("/");
                })
                .catch(err => {
                    console.log("Error on password change: ", err);
                });
        } else {
            console.log("Password Doesn't match");
        }
    };
    render() {
        const { password, cpassword } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem", marginTop: "6rem" }}>
                            <h2 className="card-header">Change Password</h2>
                            <form onSubmit={this.handlePasswordChange}>
                                <div className="card-body">
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
                                    <div className="form-group">
                                        <label htmlFor="password">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="cpassword"
                                            className="form-control"
                                            value={cpassword}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Change Password
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
