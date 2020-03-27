
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";



import {Carousel} from '../carousel';

import * as firebase from 'firebase';



/*
email

location_description

location_geo

message

phone

time_created

username


*/


// Volunteer Page
export class RequesterPage extends React.Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      location_description: '',
      message: '',
      phone: '',
      time_created: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    let day = firebase.firestore.Timestamp.fromDate(new Date());
    this.state.time_created = day;
    firebase.firestore().collection("requests").add(this.state);
    event.preventDefault();
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>

        <fieldset>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label>Location Description</label>
          <input type="text" name="location_description" onChange={this.handleChange} />
        </fieldset>

        <fieldset>
          <label>Message</label>
          <input type="text" name="message" onChange={this.handleChange} />
        </fieldset>
        
        <fieldset>
          <label>Phone</label>
          <input name="phone" onChange={this.handleChange} />
        </fieldset>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



  
// Request Page
function Request() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Request</h2>
        <Carousel type="requester" />
  
        <ul>
          <li>
            <Link to={`${match.url}/step-1`}>Step 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/step-2`}>
              Step 2
            </Link>
          </li>
        </ul>

      </div>
    );
  }




