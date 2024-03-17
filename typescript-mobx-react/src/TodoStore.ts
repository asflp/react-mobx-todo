import { observable, action, computed, makeAutoObservable } from "mobx";
import {createContext} from "react";

export interface Todo {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export class TodoStore {
    constructor() {
        makeAutoObservable(this)
    }

    @observable
    todos: Todo[] = localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks') || "")
        : [
        { id: 1, name: "Item #1", description: "Description 1", completed: false },
        { id: 2, name: "Item #2", description: "Description 2", completed: false },
        { id: 3, name: "Item #3", description: "Description 3", completed: false },
        { id: 4, name: "Item #4", description: "Description 4", completed: false },
        { id: 5, name: "Item #5", description: "Description 5", completed: true },
        { id: 6, name: "Item #6", description: "Description 6", completed: false },
    ]

    @action
    addTodo = ({name, description} : Omit<Todo, 'checked' | 'id'>) => {
        this.todos.push({id: this.todos.length == 0 ? 1 :
                this.todos[this.todos.length - 1].id! + 1, name, description, completed: false })
        localStorage.setItem('tasks', JSON.stringify(this.todos));
    }

    @action
    toggleTodo = (id: Todo["id"]) => {
        this.todos = this.todos.map((todo: Todo) => {
                if(todo.id === id) {
                    return { ...todo, completed: !todo.completed};
                }

                return todo;
            })
        localStorage.setItem('tasks', JSON.stringify(this.todos));
    }

    @action
    removeTodo = (id: Todo['id']) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        localStorage.setItem('tasks', JSON.stringify(this.todos));
    }

    @computed get info() {
        return {
            notCompleted: this.todos.filter(todo => !todo.completed).length,
        }
    }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);