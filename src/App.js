import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


import FirebaseProvider from './context/firebase';
import {RequesterPage} from './components/requester/requester-page';
import {VolunteerPage} from './components/volunteer/volunteer-page';



export default function App() {


  return (
    <FirebaseProvider>
    <Router>
      <div>
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

        </Switch>
      </div>
    </Router>
    </FirebaseProvider>
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



















