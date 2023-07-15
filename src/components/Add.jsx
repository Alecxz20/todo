import React from 'react';
import './Add.css';

function Add({ newTask, onSetNewTask, onAdd }) {
  return (
    <form className='form'>
      <textarea
        value={newTask}
        name='task'
        id='task'
        style={{ width: '100%' }}
        placeholder='Write your task'
        onChange={(e) => onSetNewTask(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onAdd();
        }}
      >
        Add
      </button>
    </form>
  );
}

export default Add;
