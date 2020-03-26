import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



import {FirebaseSandbox} from './components/firebase-sandbox';
import {RequesterPage} from './components/requester/requester-page';
import {VolunteerPage} from './components/volunteer/volunteer-page';



export default function App() {


  return (
    <Router>
      <div>
        <nav className="debug-nav">
          <ul>
            <li><Link to="/firebase-sandbox">Firebox Sandbox</Link></li>
          </ul>
        </nav>

        {/* <FirebaseSandbox /> */}

        <FirebaseSandbox />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/request">
            <RequesterPage />
          </Route>
         
          <Route path="/volunteer">
            <VolunteerPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/firebase-sandbox">
            <FirebaseSandbox />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}













function Home() {
  return (
    <nav>
      <Link className="main-choice" to="/request">Request</Link>
      <Link className="main-choice" to="/volunteer">Volunteer</Link>
    </nav>
  );
}



















