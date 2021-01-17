import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {displayMsg: 'Mainframes on the web...'}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>{this.state.displayMsg}
                    </p>
                    <button onClick={() => this.setState({displayMsg: 'yes they are'})}>Click me!</button>
                </header>
            </div>
        );
    }
}

export default App;
