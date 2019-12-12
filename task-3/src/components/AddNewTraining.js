import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddNewTraining = ({ newTraining, setNewTraining, addTraining}) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      { !show && 
        <h2>Add New Training <button onClick={() => setShow(true)}>Show</button></h2>
      }
      { show &&
        <div>
          <h2>Add New Training <button onClick={() => setShow(false)}>Hide</button></h2>
          <label>Date</label>
          <br />
          <DatePicker
            selected={newTraining.date}
            onChange={value => setNewTraining({...newTraining, date: value})}
          />
          <br />
          <label>Duration</label>
          <br />
          <input type="number" onChange={event => setNewTraining({...newTraining, duration: event.target.value}) } value={ newTraining.duration } />
          <br />
          <label>Activity</label>
          <br />
          <input type="text" onChange={event => setNewTraining({...newTraining, activity: event.target.value}) } value={ newTraining.activity } />
          <br />
          <button onClick={() => addTraining(newTraining)}>Add New Training</button>
        </div>
      }
    </div>
  )
}

export default AddNewTraining