import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Spinner } from "reactstrap";
import Header from "./components/Header";
import { onLoginStatusChange } from "./modules/authManager";
import ApplicationViews from './components/ApplicationViews';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  // The "isLoggedIn" state variable will be null until //  the app's connection to firebase has been established.
  //  Then it will be set to true or false by the "onLoginStatusChange" function
  if (isLoggedIn === null) {
    // Until we know whether or not the user is logged in or not, just show a spinner
    return null;
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <ApplicationViews isLoggedIn={isLoggedIn} />
    </Router>
  );
}

export default App;
