import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [show, setShow] = useState(false)
  const [items, setItems] = useState(() => {
    try {
      const list = JSON.parse(localStorage.getItem("items"))
      return list || [];
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    setItemstoLocal()

  }, [items])

  const setItemstoLocal = () => {
    localStorage.setItem("items", JSON.stringify(items))

  }
  console.log(items);
  return (

    <div className="App">

      <Header show={show} setShow={setShow} />
      {show && <AddTask items={items} setItems={setItems} setItemstoLocal={setItemstoLocal} />}
      <TaskList items={items} setItems={setItems} />

    </div>
  );
}

export default App;
