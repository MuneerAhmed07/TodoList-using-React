import React from "react";
import {FiEdit} from "react-icons/fi";
import {BsFillTrashFill} from "react-icons/bs";


const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
            <div className="icons">
                <FiEdit className="icon" onClick={() => editTodo(task.id)}/>
                <BsFillTrashFill className="icon" onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}

export  default Todo;