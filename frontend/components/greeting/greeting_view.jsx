// // If the user is logged in, then the Greeting should contain:
//
// A welcome message including the user's username
// A button to logout
// If the user is not logged in, then the Greeting should contain:
//
// A <Link to> /#/signup
// A <Link to> /#/login

import React from 'react';
import { Link } from 'react-router-dom';


const userGreeting = (currentUser, logout) => (
  <section className="greeting-section">
    <h2 className="greeting-name">Good to see you! {currentUser.username}!</h2>
     <button className="greeting-button" onClick={logout}>Log Out</button>

  </section>
);

const linkToSessions = () => (
  <nav>
    <Link to="/login">Log In</Link>
    <br />
    <br />
    <span>Or</span>
    <br />
    <br />
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const Greeting = ( {currentUser, logout} ) => (
  currentUser ? userGreeting(currentUser, logout) : linkToSessions()
);

export default Greeting;
