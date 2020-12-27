import React, { Component } from 'react';
import '../../css/app.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert">
                {this.props.message}
            </div>
        );
    }
}
