import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([])

  return (
    <div className="App">
      <Header show={show} setShow={setShow} />
      {show && <AddTask items={items} setItems={setItems} />}
      <TaskList items={items} setItems={setItems} />



    </div>
  );
}

export default App;
