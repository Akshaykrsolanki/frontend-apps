import React from 'react';
import "./TodoStyles.css";
import { useState, useRef, useEffect } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


function Todo() {
    // const Todo  = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const addTodo = () => {
        if(todo !== '') {
            setTodos([...todos,{ list: todo, id: Date.now(), status: false }]);
            console.log(todos);
            setTodo("");
        };

        if(editId){
            const editTodo = todos.find((todo)=>todo.id == editId)
            const updateTodo = todos.map((to)=>to.id=== editTodo.id
            ? (to = {id : to.id , list : todo})
            : (to = {id : to.id , list : to.list}))
            setTodos(updateTodo)
            setEditId(0);
            setTodo('')
        }

    };

    const inputRef = useRef("null");

    useEffect(() => {
        inputRef.current.focus();
    });
  
    const onDelete = (id) => {
        setTodos(todos.filter((to) => to.id !== id));
    }

    const OnComplete =(id) => {
        let complete = todos.map((list) => {
            if(list.id === id) {
                return {...list , status : !list.status };
            }
            return list;
        });
        setTodos(complete);
    };

    const onEdit = (id) => {
        const editTodo = todos.find((to)=> to.id === id)
        setTodo(editTodo.list)
        setEditId(editTodo.id)
        // console.log(editTodo)
    }

    return (
    <div className="container3">
        <h2>To Do App</h2>
        <form className="form-group" onSubmit={handleSubmit}>
            <input
            type="text"
            value={todo}
            ref={inputRef}
            placeholder="Enter Your To Do"
            className="form-control"
            onChange={(event) => setTodo(event.target.value)}
            />
            <div className="todo-td">
            <button onClick={addTodo} > {editId ? 'EDIT' : 'ADD'} </button>
            </div>
        </form>
        <div className="list">
            <ul>
                {todos.map((to) => (
                    <li className="list-items">
                        <span
                        className="list-item-list"
                        id= {to.status ? 'list-item' : ""}
                        >
                            {to.list}
                            </span>
                            <span>
                            <IoMdDoneAll
                            className="list-item-icons"
                            id="complete"
                            title="Complete"
                            onClick={() => OnComplete(to.id)}
                            />

                            <FiEdit
                            className="list-item-icons"
                            id="edit"
                            title="Edit"
                            onClick={() => onEdit(to.id)}
                            />

                            <MdDelete
                            className="list-item-icons"
                            id="delete"
                            title="Delete"
                            onClick={() => onDelete(to.id)}
                            />
                        </span>
                    </li>
                ))}

                {/* <li className='form-control'>First</li>
                <li className='form-control'>Second</li>
                <li className='form-control'>Third</li> */}
            </ul>
        </div>
    </div>
  );
};

export default Todo; 