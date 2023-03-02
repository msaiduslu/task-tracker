import { IoMdRemoveCircle } from "react-icons/io";
const Task = ({
  id,
  task,
  date,
  isComplited,
  handleDelete,
  handleDoubleClick,
}) => {
  return (
    <div onDoubleClick={() => handleDoubleClick(id)}>
      <div
        className={isComplited ? "task-done task-container" : "task-container"}
      >
        <div className="task">
          <div>
            <p>{task}</p>
          </div>
          <div>
            <p>{`${date.split("T")[0]} , ${date.split("T")[1]} `}</p>
          </div>
        </div>
        <div>
          <IoMdRemoveCircle
            className="icon"
            type="button"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
