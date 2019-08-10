import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{

  constructor()
  {
      super();

      this.state = {
        names: [],
        searchField: ''
      };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({names:user}));
  }

 

  render(){
    const {names,searchField} = this.state;
    const filteredNames = names.filter(names => names.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Peoples API</h1>
        <SearchBox class="search" placeholder='Search People' handleChange={e => {this.setState({searchField:e.target.value}, () => console.log(this.state));}} />
        <CardList names={filteredNames} />
      </div>
    )
  };
  
}

export default App;
