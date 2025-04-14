import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api_url";
import { TaskType } from "../types";

function Day() {
  let { id } = useParams<{ id: string }>();
  const [listOfTasks, setListOfTasks] = useState([]);
  const [listOfCompletions, setListOfCompletions] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/tasks`).then((response) => {
      setListOfTasks(response.data);
    });
    axios.get(`${API_URL}/completions/${id}`).then((response) => {
      const listOfCompletedTasks: any = response.data.map((completion: any) => {
        return completion.activity;
      });
      setListOfCompletions(listOfCompletedTasks);
    });
  }, [id]);

  const taskClick = (task: TaskType, completed: boolean) => {
    const completion = {
      date: id,
      activity: task.title,
    };
    if (!completed) {
      axios.post(`${API_URL}/completions`, completion);
      const newListOfCompletions = [...listOfCompletions, task.title];
      setListOfCompletions(newListOfCompletions);
    } else {
      axios.delete(`${API_URL}/completions/${task.title}/${id}`);
      const newListOfCompletions = listOfCompletions.filter(
        (completion) => completion !== task.title
      );
      setListOfCompletions(newListOfCompletions);
    }
  };

  return (
    <div>
      <h1 className="day-title">{id}</h1>
      <div className="day-tasks">
        {listOfTasks.map((task: TaskType, index: number) => {
          const completed = listOfCompletions.includes(task.title);
          return (
            <div
              className={completed ? "completed-task" : "not-completed-task"}
              key={index}
              onClick={() => taskClick(task, completed)}
            >
              <h2>{task.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Day;
