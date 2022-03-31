import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from "./Timer";

ReactDOM.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>,
    document.getElementById('root')
);