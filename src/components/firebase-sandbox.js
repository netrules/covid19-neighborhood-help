import React, { Component } from 'react';
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


// Firebase Testing
export class FirebaseSandbox extends React.Component {
    constructor(){
      super();
      this.state = {
        response:{}
      }
    }
  
    componentDidMount() {
      firebase.firestore().collection("requests").doc("request1").onSnapshot(doc => {
        this.setState({
          response: doc.data()
        });
      })
    }
  
    render() {
      return <h1>Hello, {this.state.response.email}</h1>;
    }
  }