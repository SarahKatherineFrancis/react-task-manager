# Task Management Application
This is a simple React-based task management application that allows users to add tasks and display them. It uses a custom useHttp hook to manage HTTP requests for adding tasks to a remote server. The application consists of two main components: NewTask and useHttp.

## Features
<ul>
<li>Add new tasks with descriptions.</li>
<li>Display a loading indicator while tasks are being added.</li>
<li>Handle errors and display error messages when tasks fail to be added.</li>
  </ul>

## Technologies Used
<ul>
<li>>React</li<
<li>JavaScript</li>
<li>Custom useHttp hook for HTTP requests</li>
  </ul>

## Installation
1.Clone this repository to your local machine using git clone.
git clone https://github.com/SarahKatherineFrancis/react-task-management.git

2.Navigate to the project directory.
cd react-task-management

3.Install the project dependencies using npm or yarn.
npm install

4.Start the development server.
npm start

5. Open your web browser and access the application at http://localhost:3000.

## Usage
<ul>
<li>Upon accessing the application, you will see a form to add new tasks.</li>
<li> a task description and click the "Add Task" button.</li>
<li>While the task is being added, a loading indicator will be displayed.</li>
<li>If an error occurs during the task addition process, an error message will be shown.</li>
<li>Added tasks will be displayed in a list.</li>
  </ul>

## Custom Hooks
useHttp
This custom hook is responsible for handling HTTP requests. It manages loading indicators and error messages for HTTP requests. It is used in the NewTask component to add tasks to the server.

## Folder Structure
<ul>
<li>src/components: Contains React components used in the application.</li>
<li>src/hooks: Contains custom hooks, including useHttp.</li>
<li>src/UI: Contains reusable UI components.</li>
  </ul>

## Contributing
Contributions to this project are welcome. You can contribute by:
1.Opening an issue to report a bug or request a new feature.
2.Forking the repository, making changes, and opening a pull request.
