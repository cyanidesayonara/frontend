import React, { useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Moment from 'react-moment';
import Filter from './Filter'
import AddNewTraining from './AddNewTraining'

const Trainings = ({ trainings, newTraining, setNewTraining, addTraining, deleteTraining, columnStyle }) => {
  const [filter, setFilter] = useState('')
  const columns = [
    { Header: 'Date', accessor: 'date',
      Cell: date => (
        <span key={date}>
          <Moment format="DD/MM/YYYY">{date}</Moment>
        </span>
      )
    },
    { Header: 'Duration', accessor: 'duration' },
    { Header: 'Activity', accessor: 'activity' },
    {
      Header: '', accessor: '',
      Cell: training => (
        <button key={training.index} onClick={deleteTraining(training.value)} >
          Delete
        </button>
      )
    }
  ]

  trainings = trainings.filter(training => training.activity.toLowerCase().includes(filter.trim().toLowerCase()))

  return (
    <div>
      <h1>Trainings</h1>
      <Filter filter={filter} setFilter={ setFilter } />
      <AddNewTraining addTraining={addTraining} newTraining={newTraining} setNewTraining={setNewTraining}  />
      <ReactTable data={trainings} columns={columns} sortable={true} defaultPageSize={10} getTdProps={columnStyle} />
    </div>
  )
}

export default Trainings