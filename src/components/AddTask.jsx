import { useState } from "react";

const AddTask = ({ items, setItems, setItemstoLocal }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: items.length + 1, task: task, date: date, isComplited: false },
    ]);
    setTask("");
    setDate("");
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
            <input
              onChange={(e) => setTask(e.target.value)}
              value={task}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Day & Time</label>
          </div>
          <div>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="datetime-local"
              value={date}
            />
          </div>
        </div>
        <div className="button">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
