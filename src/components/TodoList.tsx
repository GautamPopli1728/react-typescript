import React from "react";
import { Todo } from "../modal";
import SingleTodo from "./SingleTodo";


interface Props {
    todoList:Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todoList, setTodoList}: Props) => {
    return <div className="todos">
        {todoList.map((singletodo)=>{
            return <SingleTodo singletodo={singletodo} todoList={todoList} setTodoList={setTodoList} key={singletodo.id} />
        })}
    </div>
}

export default TodoList;