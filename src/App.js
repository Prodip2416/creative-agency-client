import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import * as firebase from "firebase/app";
import { firebaseConfig } from './components/Login/firebaseConfig';
import Navbar from './components/Home/Header/Navbar/Navbar';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  useEffect(() => { 
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const newSignInUser = { };
        newSignInUser.name = user.displayName;
        newSignInUser.email = user.email;
        newSignInUser.img = user.photoURL;
        setLoggedInUser(newSignInUser);
      } else {
        // No user is signed in.
      }
    });
  }, [])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/dashboard/:id">
            <Dashboard />
          </PrivateRoute>

          <Route path="*">
            <Navbar/>
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
