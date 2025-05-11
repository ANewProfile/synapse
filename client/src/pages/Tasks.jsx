import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const statuses = ["Incompleted", "Ongoing", "Finished"];

const KanbanTasks = () => {
  const [tasks, setTasks] = useState(() => {
    //gotta change later rn temporaily storing on local drive
    const saved = localStorage.getItem("kanbanTasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");

  //save new tasks everytime
  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  const taskAdd = () => {
    if (!newTask.trim()) return;
    setTasks([
      {
        id: Date.now(),
        text: newTask.trim(),
        status: "Incompleted",
      },
      ...tasks,
    ]);
    setNewTask("");
  };

  const taskRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskMove = (id, direction) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task;
        //if return nothing still an undefined will be included

        const presentPosition = statuses.indexOf(task.status);
        const newPosititon = presentPosition + direction;

        if (newPosititon >= 0 && newPosititon < statuses.length) {
          return { ...task, status: statuses[newPosititon] };
        }
        return task; //modification failed so return normal
      })
    );
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Task Management{" "}
        <span
          style={{
            color: "blue",
            fontSize: "2.3rem",
          }}
        >
          Kanban
        </span>
      </h2>

      <div
        style={{
          width: "60vw",
        }}
        className="input-group mb-4"
      >
        <input
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="form-control "
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={taskAdd}>
          Add Task
        </button>
      </div>

      <div className="row">
        {statuses.map((status) => (
          <div className="col-md-4" key={status}>
            <h5 className="text-center">{status}</h5>
            <div className="bg-light p-1  rounded shadow-sm min-vh-50">
              {tasks
                .filter((t) => t.status === status)
                .map((task) => (
                  <div className="card " key={task.id}>
                    <div
                      className="
                    card-body d-flex justify-content-between align-items-center
                    "
                    >
                      <span
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {task.text}
                      </span>
                      <div className="btn-group">
                        {status !== "Incompleted" && (
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => taskMove(task.id, -1)}
                          >
                            ←
                          </button>
                        )}
                        {status !== "Finished" && (
                          <div
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => taskMove(task.id, +1)}
                          >
                            →
                          </div>
                        )}

                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => taskRemove(task.id)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanTasks;
