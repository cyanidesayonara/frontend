import React, { useState } from 'react';

const AddNewCustomer = ({ newCustomer, setNewCustomer, addCustomer }) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      { !show &&
        <h2>Add New Customer <button onClick={() => setShow(true)}>Show</button></h2>
      }
      {
        show &&
        <div>
          <h2>Add New Customer <button onClick={() => setShow(false)}>Hide</button></h2>
          <label>First Name</label>
          <br />
          <input type="text" onChange={event => setNewCustomer({...newCustomer, firstname: event.target.value}) } value={ newCustomer.firstname } />
          <br />
          <label>Last Name</label>
          <br />
          <input type="text" onChange={event => setNewCustomer({...newCustomer, lastname: event.target.value}) } value={ newCustomer.lastname } />
          <br />
          <label>Street Address</label>
          <br />
          <input type="text" onChange={event => setNewCustomer({...newCustomer, streetaddress: event.target.value}) } value={ newCustomer.streetaddress } />
          <br />
          <label>Post Code</label>
          <br />
          <input type="text" onChange={event => setNewCustomer({...newCustomer, postcode: event.target.value}) } value={ newCustomer.postcode } />
          <br />
          <label>City</label>
          <br />
          <input type="text" onChange={event => setNewCustomer({...newCustomer, city: event.target.value}) } value={ newCustomer.city } />
          <br />
          <label>Email</label>
          <br />
          <input type="text" onChange={event => setNewCustomer({...newCustomer, email: event.target.value}) } value={ newCustomer.email } />
          <br />
          <label>Phone</label>
          <br />
          <input type="text" onChange={event => setNewCustomer({...newCustomer, phone: event.target.value}) } value={ newCustomer.phone } />
          <br />
          <button onClick={() => addCustomer(newCustomer)}>Add New Customer</button>
        </div>
      }
    </div>
  )
}

export default AddNewCustomer