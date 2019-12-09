import React from 'react';



export const Todolist = (props) => {
    const {id , title, statusComplete} = props.todo
    let done = null;

    statusComplete ? (done='done') : (done='');


return <div>
        <p className={done}>
        <input type='checkbox' onChange={props.markCompleted.bind(this,id)}/>
        {title}
        <button onClick={props.markDeleted.bind(this,id)}> Delete </button>
        </p>
        
       </div>
};