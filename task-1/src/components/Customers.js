import React, { useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Filter from './Filter'

const Customers = ({ customers, addCustomer, updateCustomer, deleteCustomer, columnStyle }) => {
  const [filter, setFilter] = useState('')
  const columns = [
    { id: 'name', Header: 'Name', accessor: customer => customer.firstname + ' ' + customer.lastname },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone', accessor: 'phone' },
    { id: 'address', Header: 'Address', accessor: customer => customer.streetaddress + ' ' + customer.postcode + ' ' + customer.city }
  ]

  customers = customers.filter(customer => {
    return customer.firstname.toLowerCase().includes(filter.trim().toLowerCase()) ||
      customer.lastname.toLowerCase().includes(filter.trim().toLowerCase())
  })

  return (
    <div>
      <div>
        <h1>Customers</h1>
        <Filter filter={filter} setFilter={ setFilter } />
        <ReactTable data={customers} columns={columns} sortable={true} defaultPageSize={10} getTdProps={columnStyle} />
      </div>
    </div>
  )
}

export default Customers