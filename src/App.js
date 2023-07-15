import React, { useState } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Item from './components/Item';
import Add from './components/Add';
import './App.css';

function App() {
  const localStorageDatabase = localStorage.getItem('task');

  let parse;

  if (!localStorageDatabase) {
    localStorage.setItem('task', JSON.stringify([]));
    parse = [];
  } else {
    parse = JSON.parse(localStorageDatabase);
  }

  const [tasks, setTasks] = useState(parse);
  const [newTask, setNewTask] = useState('');

  const completed = tasks.filter((item) => item.completed).length;
  const total = tasks.length;

  function onCompleted(item) {
    // Destructure the useState
    const newDatabase = [...tasks];

    // Finding the index with a findindex method.
    const index = newDatabase.findIndex((element) => element === item);

    // changing the object
    newDatabase[index].completed = !newDatabase[index].completed;

    // setTask
    localStorage.setItem('task', JSON.stringify(newDatabase));
    setTasks(newDatabase);
  }

  function onDelete(item) {
    const newDatabase = tasks.filter((element) => element !== item);
    localStorage.setItem('task', JSON.stringify(newDatabase));
    setTasks(newDatabase);
  }

  function onAdd() {
    const newDatabase = [
      { text: newTask, completed: false, id: crypto.randomUUID() },
      ...tasks,
    ];

    localStorage.setItem('task', JSON.stringify(newDatabase));
    setTasks(newDatabase);
    setNewTask('');
  }

  return (
    <div className='app'>
      <Header completed={completed} total={total} />
      <Add newTask={newTask} onSetNewTask={setNewTask} onAdd={onAdd} />
      <ItemList>
        {tasks.map((item) => {
          return (
            <li className='item' key={item.id}>
              <Item item={item} onCompleted={onCompleted} onDelete={onDelete} />
            </li>
          );
        })}
      </ItemList>
    </div>
  );
}

export default App;
