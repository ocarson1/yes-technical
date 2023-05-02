import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import TodoList from './components/TodoList'

function App(props) {
  const [lists, setLists] = useState(props.lists)

  const listBoard = lists.map((list) => (
    <TodoList title={list.title} tasks={list.tasks}></TodoList>
  ))

  function addList() {
    const newList = {title: " ", tasks: []}
    setLists([...lists, newList])
  }

  return (
    <div>
      {listBoard}
      <button onClick={() => addList()}>Add a New List</button>
    </div>
  );
}

export default App;
