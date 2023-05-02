import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const mockData = [ {title: "Groceries", tasks: [
  { id: "todo-0", name: "Salad", completed: true, due:"2023-06-14", assignee: "Self"},
  { id: "todo-1", name: "Butter", completed: false, due:"2023-06-14", assignee: "Self" },
  { id: "todo-2", name: "Eggs", completed: false, due:"2023-06-14", assignee: "Self" }
]}, {title: "Homework", tasks: [{ id: "todo-0", name: "PSet", completed: true, due:"2023-06-14", assignee: "EDUC0300" },
{ id: "todo-1", name: "Drawing", completed: false, due:"2023-06-14", assignee: "EDUC0300" },
{ id: "todo-2", name: "Project", completed: false, due:"2023-06-14", assignee: "EDUC0300" }]}];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App lists={mockData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
