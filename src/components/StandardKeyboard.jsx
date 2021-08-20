import React, { Component } from 'react';
import Key from './Key';

export default class StandardKeyboard extends Component {
    render() {
    // for better readability of Key components - shorter lines
        const keyClick = this.props.keyClick;

        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="keyboard-row">
                    <Key Tag="1" keyLog="1" math="number" keyClick={keyClick} />
                    <Key Tag="2" keyLog="2" math="number" keyClick={keyClick} />
                    <Key Tag="3" keyLog="3" math="number" keyClick={keyClick} />
                    <Key className="orange-button" Tag="DEL" keyLogo="DEL" math="delete" keyClick={keyClick} />
                    <Key className="orange-button" Tag="AC" keyLogo="AC" math="clear" keyClick={keyClick} />
                </div>
                <div className="keyboard-row">
                    <Key Tag="4" keyLog="4" math="number" keyClick={keyClick} />
                    <Key Tag="5" keyLog="5" math="number" keyClick={keyClick} />
                    <Key Tag="6" keyLog="6" math="number" keyClick={keyClick} />
                    <Key Tag="&times;" keyLog="&times;" math="multiply" keyClick={keyClick} />
                    <Key Tag="&divide;" keyLog="&divide;" math="divide" keyClick={keyClick} />
                </div>
                <div className="keyboard-row">
                    <Key Tag="7" keyLog="7" math="number" keyClick={keyClick} />
                    <Key Tag="8" keyLog="8" math="number" keyClick={keyClick} />
                    <Key Tag="9" keyLog="9" math="number" keyClick={keyClick} />
                    <Key Tag="+" keyLog="+" math="sum" keyClick={keyClick} />
                    <Key Tag="&minus;" keyLog="-" math="subtract" keyClick={keyClick} />
                </div>
                <div className="keyboard-row">
                    <Key Tag="0" keyLog="0" math="number" keyClick={keyClick} />
                    <Key Tag="." keyLog="." math="decimal" keyClick={keyClick} />
                    <Key Tag="EXP" keyLog="E" math="exponent" keyClick={keyClick} />
                    <Key Tag="ANS" keyLog="Ans" math="ans" keyClick={keyClick} />
                    <Key Tag="=" keyLog="=" math="equals" keyClick={keyClick} />
                </div>
        </div>
        );
    }
}