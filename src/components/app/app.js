import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForms from "../item-add-forms";

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Learn React', important: true, id: 2},
            {label: 'Build nothing', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            };

        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}/>

                <ItemAddForms
                    onItemAdded={this.addItem}/>
            </div>
        );
    };
};
