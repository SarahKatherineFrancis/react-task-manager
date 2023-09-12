import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

// Define a functional component called 'NewTask' that takes 'props' as its parameter.
const NewTask = (props) => {
  // Use the 'useHttp' custom hook to manage HTTP requests and store its return values.
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  // Define a function 'createTask' that takes 'taskText' and 'taskData' as parameters.
  const createTask = (taskText, taskData) => {
    // Extract the generated ID from the 'taskData' object received from the server.
    const generatedId = taskData.name;
    // Create a new task object with the generated ID and the provided 'taskText'.
    const createdTask = { id: generatedId, text: taskText };

    // Call the 'onAddTask' function from the parent component (App) with the created task as an argument.
    props.onAddTask(createdTask);
  };

  // Define an asynchronous function 'enterTaskHandler' that takes 'taskText' as a parameter.
  const enterTaskHandler = async (taskText) => {
    // Use the 'sendTaskRequest' function to send an HTTP POST request to add a new task to the server.
    // Pass a configuration object with the API URL, method, headers, and request body.
    // Also, bind the 'createTask' function with 'taskText' to process the response data.
    sendTaskRequest(
      {
        url: "https://react-http-9b836-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  // Render the component's UI.
  return (
    <Section>
      {/* Render the 'TaskForm' component, passing 'enterTaskHandler' function and loading status as props. */}
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />

      {/* Display an error message if 'error' is not null. */}
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
