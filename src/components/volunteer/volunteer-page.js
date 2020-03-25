
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

// Volunteer Page
export class VolunteerPage extends React.Component {
    render() {
      return <Volunteer />;
    }
}

// Request Page
function Volunteer() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Volunteer</h2>
        <Carousel type="volunteer" />
  
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