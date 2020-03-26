

import React, { Component, useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../context/firebase';
import 'firebase/firestore';

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
  const firebase = useContext(FirebaseContext);
  const [list, setList] = useState(null);
  const ref = firebase.firestore().collection(`requests`);

  useEffect(() => {
    ref.get().then(snapshot => {
      if (!snapshot) {
        setList(l => [])
      } else {
        let requests = []
        snapshot.forEach(request => {
          console.log(request);
          console.log(request.data());
          requests.push({ key: request.id, ...request.data() })
        })
        setList(l => requests)
      }
    }).catch(error => {
      // Handle the error
    })
  }, [])


  let listToDisplay
  if (list === null) {
    listToDisplay = (<li>Loading requests...</li>)
  } else if (list.length === 0) {
    listToDisplay = (<li>No requests found</li>)
  } else {
    listToDisplay = list.map(request => {
      return (
      <ul key={request.key} >
        <li>{ request.email }</li>
        <li>{ request.location_description }</li>
        <li>{ request.message }</li>
        <li>{ request.phone }</li>
        { <li>{request.time_created.seconds}</li> }
      </ul>
      )
    })
  }
  return (
    <div>{ listToDisplay }</div>
  )
}