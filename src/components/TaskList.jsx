import Task from "./Task";

const TaskList = ({ items, setItems }) => {
  const onHandleDelete = (id) => {
    setItems(items.filter((list) => list.id !== id));
  };
  const onHandleDoubleClick = (id) => {
    setItems(
      items.map(
        (list) => list.id == id && { ...list, isComplited: !list.isComplited }
      )
    );
  };

  return (
    <div className="task-list-container">
      {items.length !== 0 ? (
        items.map((list) => {
          return (
            <Task
              key={list.id}
              task={list.task}
              date={list.date}
              id={list.id}
              isComplited={list.isComplited}
              handleDelete={onHandleDelete}
              handleDoubleClick={onHandleDoubleClick}
            />
          );
        })
      ) : (
        <p>No Tasks to Show</p>
      )}
    </div>
  );
};

export default TaskList;
