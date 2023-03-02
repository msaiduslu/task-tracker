import { useState } from "react";

const AddTask = ({ items, setItems }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems(...items, { task: task, date: date });
  };
  console.log(items);
  return (
    <div className="add-task-container">
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <div className="input-container">
          <div>
            <label htmlFor="">Task</label>
          </div>
          <div>
            <input onChange={(e) => setTask(e.target.value)} type="text" />
          </div>
          <div>
            <label htmlFor="">Day & Time</label>
          </div>
          <div>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="datetime-local"
            />
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddTask;
