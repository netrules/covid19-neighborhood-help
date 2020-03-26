
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
export class RequesterPage extends React.Component {
    render() {
        return <Request />;
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

