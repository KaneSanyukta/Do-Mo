import { useState } from "react";
import "./App.css";

function ToDoApp() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false
      }
    ]);

    setTask("");
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, taskIndex) => taskIndex !== index
    );

    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="heading">
          <h1>Do Mo</h1>
      </div>
      <section>
        <div className="inputBox">
          <input
            placeholder="what's a task?"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            onClick={addTask}
            className="btn"
          >
            Add Task <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M720-80v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM381-343q18 18 42.5 18t42.5-18l212-212q12-12 12-28.5T678-611q-12-12-28.5-12T621-611L423-413l-85-85q-12-12-28-12t-28 12q-12 12-12 28t12 28l99 99Zm18 183q-134 0-227.5-93T78-480q0-134 93.5-227T399-800h161q134 0 227.5 93T881-480h-80q0-100-71-170t-171-70H400q-100 0-171 70t-71 170q0 100 71 170t171 70h120v80H399Zm81-320Z"/></svg>
          </button>
        </div>

        <div className="tasks">
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(index)}
                />

                <div
                  className={`taskText ${
                    item.completed ? "completed" : ""
                  }`}
                >
                  {item.text}
                </div>
                <button onClick={() => deleteTask(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
export default ToDoApp;