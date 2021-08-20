import React, { Component } from 'react';
import ToggleLabel from './ToggleLabel';

export default class Toggle extends Component {
    render() {
        return (
            <div className="toggle-label" align="center">
                <ToggleLabel Tag="Standard Calculator" /> 
                <ToggleLabel Tag="Scientific Calculator" />
            </div>
        )
    }
}