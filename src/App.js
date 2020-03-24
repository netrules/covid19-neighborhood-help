import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDLRtZ9MWzqYCeTwfWjc3pFzD9-P2HSq2s",
  authDomain: "covid-19-neighborhood-help.firebaseapp.com",
  databaseURL: "https://covid-19-neighborhood-help.firebaseio.com",
  projectId: "covid-19-neighborhood-help",
  storageBucket: "covid-19-neighborhood-help.appspot.com",
  messagingSenderId: "926958898978",
  appId: "1:926958898978:web:8bc4070b5e6fd445fcdf7b"
}
firebase.initializeApp(config);



export default function App() {


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Request</Link>
            </li>
            <li>
              <Link to="/users">Volunteer</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


class HelloFirebase extends React.Component {
  constructor(){
    super();
    this.state = {
      speed:10
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed.snap.val()
      });
    });
  }

  render() {
    return <h1>Hello, {this.state.speed}</h1>;
  }
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return (
    <div>
    <h2>Users</h2> 
    <HelloFirebase />
    </div>
    );
}
