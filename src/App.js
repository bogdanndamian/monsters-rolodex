import React, {Component} from 'react';
import './App.css';
import {CardList} from "./componet/card-list/card-list.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    /* Life cycle methods */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        // destructuring the state , get the monsters and searchField
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase()
                .includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <input type='search'
                       placeholder='search monster'
                       onChange={e => {
                           this.setState({searchField: e.target.value});
                       }}/>
                <CardList monsters={filteredMonsters}/>
            </div>)
    }
}

export default App;
