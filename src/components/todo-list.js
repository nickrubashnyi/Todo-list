import React from 'react';

import TodoListItem from "./todo-list-item";

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem /></li>
            <li>Build todo list</li>
        </ul>
    );
};

export default TodoList;