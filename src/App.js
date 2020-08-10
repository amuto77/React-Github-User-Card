import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList'

let users=["amuto77"]


class App extends Component {
  constructor(){
    super();
    this.state ={
      followers:[],
    };

    this.fetchGithubInfo = this.fetchGithubInfo.bind(this);
  }
  
  // componentDidMount() {
  //   axios.get(`https://api.github.com/users/amuto77/followers`)
  //     .then(res => {
  //       res.data.map(u => {
  //         users=[...users,u.login]
  //       })
  //       console.log(users)
  //       users.map(p => {
  //         axios.get (`https://api.github.com/users/${p}`)
  //         .then (res => {
  //           let person = res.data
  //           this.setState({
  //             people: [...this.state.people, person]
  
  //           })
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  //       })
  //     })
  // }

  fetchGithubInfo = async () => {
    try {
      const andrew = await axios.get("https://api.github.com/users/amuto77");
      const andrewsFollowers = await axios.get("https://api.github.com/users/amuto77/followers")

      this.setState({
        followers: [...this.state.followers, andrew.data]
      })

      console.log(andrewsFollowers);
      console.log(andrew);

      andrewsFollowers.data.forEach(async (follower) => {
        const retrievedfollower = await axios.get(`https://api.github.com/users/${follower.login}`)

        this.setState({
          followers: [...this.state.followers, retrievedfollower.data]
        })
      })

      console.log(this.state)
   

    }catch(err){
      console.dir(err);
    }   
  }  

  componentDidMount() {

    this.fetchGithubInfo()
  
  }
  
  render() {
    return(
      <div className="App">
        <header className="App-header">
        </header>
          <div className="my-info">
            <h1>My Followers</h1>
          </div>
          <div class="cards">
            <CardList followers={this.state.followers}/>
          </div>
       </div>
    );
  }
}

export default App;
