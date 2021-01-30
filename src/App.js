import React, {Component} from 'react';
import './App.css';
import {CardList} from "./componet/card-list/card-list.component";
import {SearchBox} from "./componet/search-box/search-box.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    // binding the function to propagate the class context (including state )  to the method
    //    this.handleChange = this.handleChange.bind(this)
        // ATTN. ! this way is not efficient because you would need to do it for each new method
        // --> use ES6  feature --> arrow functions
    }

    /* Life cycle methods */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    /*
    *
    *  Property or Method : Handle change of the searchField attribute from the state.
    *  @input synthetic event e
    *
    */

 /*   handleChange(e){
      this.setState({searchField: e.target.value})
        // - due to "this" it goes to error because it is not defined;
        // - due to JS way the function scope is not defined;
        // - to fix this ypu need to bind it in the constructor but a better way it to use arrow function because this will propagate
        // the state

    }*/

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }
    render() {
        // destructuring the state , get the monsters and searchField
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase()
            .includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Search monster ..."
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>)
    }
}

export default App;
