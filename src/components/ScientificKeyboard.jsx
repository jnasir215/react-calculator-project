import React, { Component } from 'react';
import Key from './Key';

export default class ScientificKeyboard extends Component {
    render() {
    // for better readability of Key components - shorter lines
        const keyClick = this.props.keyClick;
        const x = <span>&#x1D4B3;</span>;
        const inv = <sup>-1</sup>;
        const pow2 = <sup>2</sup>;
        const pow3 = <sup>3</sup>;

        return (
            <div>
                <div className="keyboard-row">
                    <Key className="sm-button" Tag={[x, inv]} keyLog="^-1" math="inv" keyClick={keyClick} />
                    <Key className="sm-button" Tag="&radic;" keyLog="&radic;(" math="sqrt" keyClick={keyClick} />
                    <Key className="sm-button" Tag={[x, pow2]} keyLog="^2" math="sqr" keyClick={keyClick} />
                    <Key className="sm-button" Tag="^" keyLog="^" math="power" keyClick={keyClick} />
                    <Key className="sm-button" Tag="log" keyLog="log(" math="log" keyClick={keyClick} />
                    <Key className="sm-button" Tag="ln" keyLog="ln(" math="log" keyClick={keyClick} />
                </div>
                <div className="keyboard-row">
                    <Key className="sm-button" Tag="(&minus;)" keyLog="-" math="" keyClick={keyClick} />
                    <Key className="sm-button" Tag={[x, pow3]} keyLog="^3" math="power" keyClick={keyClick} />
                    <Key className="sm-button" Tag="hyp" keyLog="hyp" math="log" keyClick={keyClick} />
                    <Key className="sm-button" Tag="sin" keyLog="sin(" math="trig" keyClick={keyClick} />
                    <Key className="sm-button" Tag="cos" keyLog="cos(" math="trig" keyClick={keyClick} />
                    <Key className="sm-button" Tag="tan" keyLog="tan(" math="trig" keyClick={keyClick} />
                </div>
                <div className="keyboard-row">
                    <Key className="sm-button" Tag="RCL" keyLog="" math="" keyClick={keyClick} />
                    <Key className="sm-button" Tag="ENG" keyLog="" math="" keyClick={keyClick} />
                    <Key className="sm-button" Tag="(" keyLog="(" math="prnths" keyClick={keyClick} />
                    <Key className="sm-button" Tag=")" keyLog=")" math="prnths" keyClick={keyClick} />
                    <Key className="sm-button" Tag="," keyLog="" math="comma" keyClick={keyClick} />
                    <Key className="sm-button" Tag="M+" keyLog="" math="log" keyClick={keyClick} />
                </div>
                <div className="keyboard-row">
                    <Key Tag="1" keyLog="1" math="number" keyClick={keyClick} />
                    <Key Tag="2" keyLog="2" math="number" keyClick={keyClick} />
                    <Key Tag="3" keyLog="3" math="number" keyClick={keyClick} />
                    <Key className="orange-button" Tag="DEL" keyLog="DEL" math="delete" keyClick={keyClick} />
                    <Key className="orange-button" Tag="AC" keyLog="AC" math="clear" keyClick={keyClick} />
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