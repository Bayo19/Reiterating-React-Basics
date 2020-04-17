import React, {Component} from 'react';

// Components
import CardList from './components/card-list/card-list-component'
import SearchBox from './components/search-box/search-box-component'

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(peeps => this.setState({monsters: peeps}))
  }

  //lexical scoping no need to bind
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render (){

    const { monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(function(monster){
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (

      <div className="App">
      <h1>Search filter, state and binding in React</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    
    )

  }
 
}

export default App;
