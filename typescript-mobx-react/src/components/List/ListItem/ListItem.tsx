import {FC} from "react";
import {ButtonAdd} from "../../ButtonAdd/ButtonAdd";
import imgEmptyCheck from "../../../assets/circle.png"
import imgFillCheck from "../../../assets/check-circle.png"
import "./ListItem.css"
import {observer} from "mobx-react";
import {Todo} from "../../../TodoStore";


interface ListItemProps {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}
export const ListItem: FC<ListItemProps> = ({ todo, checkTodo, deleteTodo }) => {
    return (
        <div className={"item_container"}>
            <div className={"item_container__text"}>
                <div className={"item_container__text__name"}>
                    <img src={todo.completed ? imgFillCheck : imgEmptyCheck} className={"item_container__text__name"}
                        onClick={() => checkTodo(todo.id)}/>

                    <div
                         style={{
                             opacity: todo.completed ? 0.5 : 1,
                             textDecoration: todo.completed ? 'line-through' : 'none'
                         }}
                         onClick={() => checkTodo(todo.id)}
                    >
                        {todo.name}
                    </div>
                </div>

                <div className={"item_container__text__description"}>
                    {todo.description}
                </div>
            </div>
            <div>
                <ButtonAdd color={'red'} onClick={() => deleteTodo(todo.id)}>
                    Удалить
                </ButtonAdd>
            </div>
        </div>
    )
}

export default observer(ListItem);