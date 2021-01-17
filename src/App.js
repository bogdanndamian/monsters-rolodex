import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [
                {
                    id: '8e385a63-de1e-4535-af8c-598f6a27a22a',
                    name: 'Frankenstein'
                },
                {
                    id: 'b8547809-d51c-4491-a38b-1da0f1c75f3e',
                    name: 'Dracula'
                },
                {
                    id: '0e332c6a-6cc9-4fc4-905c-f18a2bcd83fc',
                    name: 'Zombie'
                }
            ]
        }

    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
                }
            </div>
        );
    }
}

export default App;
