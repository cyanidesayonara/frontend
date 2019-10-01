import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  function Home() {
    return <h1>This is home page</h1>
  }

  function About() {
    return <h1>This is about page</h1>
  }
  
  function Contact() {
    return <h1>Contact address</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        Welcome to React Router
      </header>
      <BrowserRouter>
        <div>
          <Link to="/">
            Home
          </Link>{' '}
          <Link to="/about">
            About
          </Link>{' '}
          <Link to="/contact">
            Contact
          </Link>{' '}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
