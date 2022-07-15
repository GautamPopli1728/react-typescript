import React, { useState } from "react";
import { Todo } from "../modal";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { json } from "stream/consumers";

interface Props{
    singletodo: Todo;
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
    todoList: Todo[];
}

const SingleTodo = ({singletodo, todoList, setTodoList}:Props) => {

    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [editVal, setEditVal] = useState<string>(singletodo.name)

    const onTodoEdit = () => {
        if(!singletodo.isCompleted){
            setIsEditable(true);
        }
    }

    const onSubmitHandler = (e:React.FormEvent, id:number) => {
        e.preventDefault()
        setTodoList(todoList.map((el)=> el.id === id ? {...el, name:editVal} : el ))
        setIsEditable(false)
    }

    return <form className="todos__single" onSubmit={(e)=>onSubmitHandler(e, singletodo.id)}>
    
        {isEditable ? <input type="text" value = {editVal} onChange={(e)=> setEditVal(e.target.value)} />
         :  singletodo.isCompleted  ? <s className="todos__single--text">{singletodo.name}</s> : <span className="todos__single--text">{singletodo.name}</span>
    }
        <div>
            <span className="icon" onClick={onTodoEdit}>
                <AiFillEdit />
            </span>
            <span className="icon" onClick={()=> setTodoList(todoList.filter((el) => el.id !== singletodo.id))}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={()=> setTodoList(todoList.map((el)=> el.id === singletodo.id ? {...el, isCompleted: !el.isCompleted} : el))}>
                <MdDone />
            </span>
        </div>
    </form>
}

export default SingleTodo;