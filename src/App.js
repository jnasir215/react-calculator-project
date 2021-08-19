import React, { Component } from 'react';
// import Math from 'mathjs';
import Screen from './components/Screen';
import ScientificKeyboard from './components/ScientificKeyboard';
import './App.css';

const math = require('mathjs');
const he = require('he'); // library for html entities encoding/decoding

//function App() {
export default class App extends Component {
  constructor(props) {  // Calculator App created declaring all initial states
    super(props);
    this.state = {
      result: "0",
      log: '',
      clickedEquals: false,
      ans: "0",
    };

  //const [state] = useState({ result: "0", log: '', clickedEquals: false, ans: "0"});
    this.handleLogChange = this.handleLogChange.bind(this);
    this.keyClick = this.keyClick.bind(this);
  }

    // handle keyboard exceptions
  componentDidMount() {
    window.onerror = () => this.setState({ log: 'Syntax Error', clickedEquals: true });
    window.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleEqualsClick(this.state.log);
      }

      if (e.key.match(/[+\-^]/)) {    // if keystroke matches '+|-^'
        if (this.state.clickedEquals) this.setState({ log: 'Ans', clickedEquals: false });
      }

      const mathEntities = {
        '*': he.decode('&#x000D7;'),  // multiplication identifier?
        '/': he.decode('&divide;'),   // divide identifier
      };

      if (e.key.match(/[*/]/)) {      // if keystroke matches mult or divide
        e.preventDefault();
        const clickedEquals = this.state.clickedEquals;
        if (clickedEquals) this.setState({ log: `Ans${mathEntities[e.key]}`, clickedEquals: false });
        else this.setState({ log: this.state.log + mathEntities[e.key] });
      }

      if (!e.key.match(/[+\-^*/]|Enter/)) {   // if keystroke does not match '+\-^*/' or 'Enter'
        if (this.state.clickedEquals) this.setState({ log: '', clickedEquals: false });
      }
    });
  }

  keyClick(keyLog, math) {
    console.log(math);
    console.log(keyLog);
    const currentLog = this.state.log;
    const clickedEquals = this.state.clickedEquals;
    if (math === 'clear') {      // if 'math: clear' command is passed into function keyClick
      this.setState({ log: '', result: 0 });
    }

    if (math === 'delete') {      // if 'math: delete' command is passed into function keyClick
      if (currentLog.charAt(currentLog.length - 2).match(/[ns]/)) {
        this.setState({ log: currentLog.slice(0, currentLog.length - 4) });
      } else {
        this.setState({ log: currentLog.slice(0, currentLog.length - 1) });
      }
    }

    if (math === 'equals') {     // if 'math: equals' command is passed into function keyClick
      this.handleEqualsClick(currentLog);
    }

      // if any of the following math commands is passed into function keyClick
    if (math.match(/trig|log|number|comma|prnths|ans|sqrt|exponent/)) {
      if (clickedEquals) this.setState({ log: keyLog, clickedEquals: false });
      else this.setState({ log: currentLog + keyLog });
    }

      // if any of the following math commands is passed into function keyClick
    if (math.match(/sum|sub|multiply|divide|power|sqr|inv/)) {
      if (clickedEquals) this.setState({ log: `Ans${keyLog}`, clickedEquals: false });
      else this.setState({ log: currentLog + keyLog });
    }
  }

  handleEqualsClick(currentLog) {
    const times = he.decode('&#x000D7;');  // assigning mult identifier to variable
    const divide = he.decode('&divide;');  // assigning divide identifier to variable
    const sqrt = he.decode('&radic;');     // assigning radical identifier to variable
    const sqrtReg = new RegExp(sqrt, 'g'); // assigning sqRoot identifier to variable
    //const equals = he.decode('&equals;');

    // change log so it's understanable to mathjs eval() method
    const newLog = currentLog.replace(times, '*')
    .replace(divide, '/')
    .replace(/Ans/g, `(${this.state.ans.toString()})`)
    .replace(/E/g, '10^')
    .replace(/log/g, 'log10')
    .replace(/ln/g, 'log')
    .replace(sqrtReg, 'sqrt');
    //.replace(equals, '=');

    let result = math.evaluate(newLog);
    let finalResult;

    if (currentLog === '') {
      result = 0;
    }

    // trim result if too long
    if (result.toString().length > 11) {
      finalResult = result.toString().slice(0, 11);
    } else finalResult = result;

    this.setState({ ans: finalResult, result: finalResult, clickedEquals: true });
  }

  handleLogChange(input) {
    this.setState({ log: input });
  }

    // Calculator User Interface
  render() {
    return (
      <div className="calc-container">
        <p className="description" >React Calculator App <br/><br/>
          Scientific Mode</p>
        <Screen
          log={this.state.log}
          result={this.state.result}
          handleLogChange={this.handleLogChange}
        />
        <ScientificKeyboard keyClick={this.keyClick} />
      </div>
    );
  }
}

//export default App;