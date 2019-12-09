import React  from 'react';
import {Todolist} from './Todolist';



export const Todo = (props) => {
    return props.todo.map(todo => 
    <Todolist todo={todo} key={todo.id} 
    markCompleted={props.markCompleted} 
    markDeleted={props.markDeleted}
    />
)}