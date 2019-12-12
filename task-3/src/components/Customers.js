import React, { useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Filter from './Filter'
import AddNewCustomer from './AddNewCustomer'

const Customers = ({ customers, newCustomer, setNewCustomer, addCustomer, updateCustomer, updatedCustomer, setUpdatedCustomer, deleteCustomer, columnStyle }) => {
  const [filter, setFilter] = useState('')
  const columns = [
    { id: 'name', Header: 'Name', accessor: customer => customer.firstname + ' ' + customer.lastname },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone', accessor: 'phone' },
    { id: 'address', Header: 'Address', accessor: customer => customer.streetaddress + ' ' + customer.postcode + ' ' + customer.city },
    {
      id: 'delete',
      Header: '', accessor: '',
      Cell: row => (
        <span>
          <button onClick={() => setUpdatedCustomer(row.value)}>
            Edit
          </button>
          <button onClick={deleteCustomer(row.value)}>
            Delete
          </button>
        </span>
      )
    }
  ]

  customers = customers.filter(customer => {
    return customer.firstname.toLowerCase().includes(filter.trim().toLowerCase()) ||
      customer.lastname.toLowerCase().includes(filter.trim().toLowerCase())
  })

  return (
    <div>
    { updatedCustomer &&
      <div>
        <h1>Edit customer</h1>
        <form>
          <label>First Name</label>
          <br />
          <input type="text"
            onChange={event => setUpdatedCustomer({
              ...updatedCustomer,
              firstname: event.target.value})}
            value={updatedCustomer.firstname}
          />
          <br />
          <label>Last Name</label>
          <br />
          <input type="text"
            onChange={event => setUpdatedCustomer({
              ...updatedCustomer,
              lastname: event.target.value})}
            value={updatedCustomer.lastname}
          />
          <br />          
          <label>Email</label>
          <br />
          <input type="text"
            onChange={event => setUpdatedCustomer({
              ...updatedCustomer,
              email: event.target.value})}
            value={updatedCustomer.email}
          />
          <br />
          <label>Phone</label>
          <br />
          <input type="text"
            onChange={event => setUpdatedCustomer({
              ...updatedCustomer,
              phone: event.target.value})}
            value={updatedCustomer.phone}
          />
          <br />
          <label>Street Address</label>
          <br />
          <input type="text"
            onChange={event => setUpdatedCustomer({
              ...updatedCustomer,
              streetaddress: event.target.value})}
            value={updatedCustomer.streetaddress}
          />
          <br />
          <label>Post Code</label>
          <br />
          <input type="text"
            onChange={event => setUpdatedCustomer({
              ...updatedCustomer,
              postcode: event.target.value})}
            value={updatedCustomer.postcode}
          />
          <br />
          <label>City</label>
          <br />
          <input type="text"
            onChange={event => setUpdatedCustomer({
              ...updatedCustomer,
              city: event.target.value})}
            value={updatedCustomer.city}
          />
          <br />                    
          <button type="button" onClick={() => setUpdatedCustomer('')}>Back</button>
          &nbsp;
          <button type="button" onClick={() => updateCustomer(updatedCustomer)}>Save</button>
        </form>
      </div>
    }
    { !updatedCustomer &&
      <div>
        <h1>Customers</h1>
        <Filter filter={filter} setFilter={ setFilter } />
        <AddNewCustomer newCustomer={newCustomer} setNewCustomer={setNewCustomer} addCustomer={addCustomer} />
        <ReactTable data={customers} columns={columns} sortable={true} defaultPageSize={10} getTdProps={columnStyle} />
      </div>
    }
    </div>
  )
}

export default Customers