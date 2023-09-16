import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    // SetTodos data
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos);
    }

    //When Todo task complete 
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    // DeleteTodo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // edit the todo list
    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    // edit Task
    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return(
        <div className="todoWrapper">
            <h1>Get Thing Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                // If is editing show this
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            ))}
        </div>
    )
}

export default TodoWrapper;