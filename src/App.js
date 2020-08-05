import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList'

let users=["amuto77"]


class App extends Component {
  constructor(){
    super();
    this.state ={
      people:[]
    };
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/amuto77/followers`)
      .then(res => {
        res.data.map(u => {
          users=[...users,u.login]
        })
        console.log(users)
        users.map(p => {
          axios.get (`https://api.github.com/users/${p}`)
          .then (res => {
            let person ={
              img:res.data.avatar_url,
              name:res.data.name,
              username:res.data.login,
              followers:res.data.followers,
              following:res.data.following,
              id:res.data.id,
              link:res.data.html_url
            }
            this.setState({
              people: [...this.state.people, person]
  
            })
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
  }
  
  render() {
    return(
      <div className="App">
        <header className="App-header">
        </header>
          <div className="MyInfo">
            <h1>My Followers</h1>
          </div>
          <div class="cards">
            <CardList people={this.state.people}/>
          </div>
       </div>
    );
  }
}

export default App;
