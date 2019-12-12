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
  const [newCustomer, setNewCustomer] = useState({
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode:'',
    city: '',
    email: '',
    phone: ''
  })
  const [updatedCustomer, setUpdatedCustomer] = useState('')
  const [newTraining, setNewTraining] = useState({
    date: '',
    duration: '',
    activity: ''
  })

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

  const validateCustomer = customer => {
    return customer.firstname && customer.lastname && customer.streetaddress && customer.postcode && customer.email && customer.phone
  }

  const addCustomer = customer => {
    if (validateCustomer(customer)) {
      customerService
        .create(customer)
        .then(createdCustomer => setCustomers(customers.concat(createdCustomer)))
        .then(      setNewCustomer({
          firstname: '',
          lastname: '',
          streetaddress: '',
          postcode:'',
          city: '',
          email: '',
          phone: ''
        }))
    }
  }

  const updateCustomer = customer => {
    if (validateCustomer(customer)) {
      customerService
        .update(customer)
        .then(updatedCustomer => {
          setCustomers(
            customers.map(c => {
              return c.links.find(l => l.rel === "self").href !== customer.links.find(l => l.rel === "self").href
              ? c
              : updatedCustomer
            })
          )
        })
        .then(setUpdatedCustomer(''))
    }
  }

  const deleteCustomer = customer => () => {
    customerService
      .remove(customer)
      .then(setCustomers(customers.filter(c => c.links.find(l => l.rel === "self").href !== customer.links.find(l => l.rel === "self").href)))
  }

  const validateTraining = training => {
    return training.date && training.duration && training.activity
  }

  const addTraining = training => {
    if (validateTraining(training)) {
      trainingService
        .create(training)
        .then(createdTraining => setTrainings(trainings.concat(createdTraining)))
        .then(      setNewTraining({
          date: '',
          duration: '',
          activity: ''
        }))
    }
  }

  const deleteTraining = training => () => {
    trainingService
      .remove(training)
      .then(setTrainings(trainings.filter(t => t !== training)))
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
              newCustomer={newCustomer}
              setNewCustomer={setNewCustomer}
              addCustomer={addCustomer}
              updateCustomer={updateCustomer}
              updatedCustomer={updatedCustomer}
              setUpdatedCustomer={setUpdatedCustomer}
              deleteCustomer={deleteCustomer}
              columnStyle={columnStyle}
            />
          } />
          <Route path="/trainings" render={() => 
            <Trainings
              trainings={trainings}
              newTraining={newTraining}
              setNewTraining={setNewTraining}
              addTraining={addTraining}
              deleteTraining={deleteTraining}
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
