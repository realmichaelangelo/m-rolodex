import React, { Component } from "react";
import './App.css'
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {date: new Date()};
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render(){
//   return (
//   <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//   </div>
//   );
// }
// }
