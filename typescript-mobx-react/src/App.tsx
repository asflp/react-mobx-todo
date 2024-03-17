import './App.css';
import {Header} from "./components/Header/Header";
import {TodoAdd} from "./components/Todo/TodoAdd";
import {List} from "./components/List/List"
import {observer} from "mobx-react";
import {useContext} from "react";
import {TodoStoreContext} from "./TodoStore";

const App = observer(() => {

    const todoContext = useContext(TodoStoreContext)

  return (
      <div className="container_app">
        <Header todoCount={todoContext.info.notCompleted}/>
        <TodoAdd/>
        <List/>
      </div>
  );
})

export default App;
