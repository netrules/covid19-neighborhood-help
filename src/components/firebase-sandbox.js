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


        let data = {
            username: 'Brandon',
            email: 'brandonbrule@gmail.com',
            location_description: 'Ottawa',
            message: 'I need milk please',
            phone: 5555555555
        }

        firebase.firestore().collection("requests").add(data);





      firebase.firestore().collection("requests").doc("request1").onSnapshot(doc => {
        this.setState({
          response: doc.data()
        });
      })


    }
  
    render() {
      return (
    <React.Fragment>
      <h1>Hello, {this.state.response.email}</h1>
      <h2>test</h2>
      </React.Fragment>
      );
    }
  }