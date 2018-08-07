import React, { Component } from "react";

import { auth } from "../firebase/config";

export default class Home extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3>Home</h3>
                    </div>
                </div>
            </div>
        );
    }
}
