import React, {ChangeEvent, useContext} from "react";
import {ButtonAdd} from "../ButtonAdd/ButtonAdd";
import './Todo.css';
import {observer} from "mobx-react";
import {TodoStoreContext} from "../../TodoStore";

const defaultTodo = {
    name: '',
    description: ''
};

export const TodoAdd = observer(() => {

    const todoStore = useContext(TodoStoreContext)
    const [todo, setTodo] = React.useState(defaultTodo);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setTodo({...todo, [name]: value})
    }

    const onClick = () => {
        todoStore.addTodo({
            name: todo.name,
            description: todo.description,
            completed: false
        })
        setTodo(defaultTodo)
    }

    return (
        <div className="container">
            <form>
                <label>
                    Название задачи
                    <input type='text' id='name' value={todo.name} name='name' placeholder="Название задачи" className={"first"} onChange={onChange}/>
                </label>

                <label>
                    Описание задачи
                    <input type='text' id='description' value={todo.description} name='description' placeholder="Описание задачи" className={"second"} onChange={onChange}/>
                </label>

                <ButtonAdd color={'blue'} onClick={onClick}>
                    Добавить
                </ButtonAdd>
            </form>
        </div>
    );
})

