import React, { Component } from 'react';
import '../../css/app.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <div className="alert alert-danger">
                    404 Page Not Found. <Link to="/" className="alert-link">Back to home </Link>
                </div>
            </div>
        );
    }
}