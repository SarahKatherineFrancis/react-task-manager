import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  // Define a state variable 'tasks' using the 'useState' hook, initialized as an empty array.
  const [tasks, setTasks] = useState([]);

  // Use the 'useHttp' custom hook to manage HTTP requests and store its return values.
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // Use the 'useEffect' hook to run code when the component mounts or 'fetchTasks' changes.
  useEffect(() => {
    // Define a function 'transformTasks' to process data retrieved from the HTTP request.
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      // Loop through the tasks retrieved from the API and format them as an array of objects.
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      // Update the 'tasks' state with the loaded tasks.
      setTasks(loadedTasks);
    };

    // Use the 'fetchTasks' function to send an HTTP GET request to fetch tasks from a remote API.
    // Pass a configuration object with the API URL and the 'transformTasks' function to process the data.
    fetchTasks(
      {
        url: "https://react-http-9b836-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]); // This effect depends on 'fetchTasks' changing.

  // Define a function 'taskAddHandler' to add a new task to the 'tasks' state.
  const taskAddHandler = (task) => {
    // Use the 'setTasks' function to update the 'tasks' state by concatenating the new task.
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  // Render the main application component.
  return (
    <React.Fragment>
      {/* Render the 'NewTask' component, passing the 'taskAddHandler' function as a prop. */}
      <NewTask onAddTask={taskAddHandler} />

      {/* Render the 'Tasks' component, passing 'tasks', loading status, error, and 'fetchTasks' function as props. */}
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
