import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import customerService from './services/customers'
import trainingService from './services/trainings'
import Home from './components/Home'
import Customers from './components/Customers'
import Trainings from './components/Trainings'

function App() {
  const [customers, setCustomers] = useState([])
  const [trainings, setTrainings] = useState([])

  useEffect(() => {
    fetchCustomers()
    fetchTrainings()
  }, [])

  const fetchCustomers = () => {
    customerService
      .getAll()
      .then(customers => {
        if (customers.content.find(c => c.firstname)) {
          setCustomers(customers.content)
        }
      })
  }

  const fetchTrainings = () => {
    trainingService
      .getAll()
      .then(trainings => {
        if (trainings.content.find(t => t.activity)) {
          setTrainings(trainings.content)
        }
      })
  }

  const columnStyle = () => {
    return (
      {
        style: {
          padding: '10px',
          textAlign: 'left'
        }
      }
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Personal Trainer company
      </header>
      <BrowserRouter>
        <nav>
          <Link to="/">
            Home
          </Link>{' '}
          <Link to="/customers">
            Customers
          </Link>{' '}
          <Link to="/trainings">
            Trainings
          </Link>{' '}
        </nav>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/customers" render={() => 
            <Customers
              customers={customers}
              columnStyle={columnStyle}
            />
          } />
          <Route path="/trainings" render={() => 
            <Trainings
              trainings={trainings}
              columnStyle={columnStyle}
            />
          } />
          <Route render={() => <h1>Page not found</h1>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
