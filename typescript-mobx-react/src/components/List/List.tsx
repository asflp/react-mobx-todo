import {useContext} from "react";
import {ListItem} from "./ListItem/ListItem";
import "./List.css"
import {Todo, TodoStoreContext} from "../../TodoStore";
import {observer} from "mobx-react";

export const List = observer(() => {

    const todoStore = useContext(TodoStoreContext);

    const sortTodo = (todos: Todo[]) => {
        return (todos.filter((todo) => !todo.completed).concat(todos.filter((todo) => todo.completed)));
    };

    return (
        <div className={"container_list"}>

            <div className={"label_list"}>{todoStore.todos.length == 0 ? "Список задач пуст" : "Список задач:"}</div>

            {sortTodo(todoStore.todos).map((todo) => (
                <ListItem key={todo.id} todo={todo} checkTodo={todoStore.toggleTodo} deleteTodo={todoStore.removeTodo}/>
            ))}

        </div>
    )
})
