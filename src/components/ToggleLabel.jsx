import React, { Component } from 'react';

export default class ToggleLabel extends Component {
    render() {
        return (
            <p className={this.props.className}>{this.props.Tag}</p>
        );
    }
}