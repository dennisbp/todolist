import React, { useState} from 'react';
import './App.css';
import { Todo } from './Components/Todo';
import { Header } from './Components/Header';
import { Todoadd } from './Components/Todoadd';



function App() {

const [ todos, setState ] = useState(
  {todos:[
  {
  id: '1',
  title: 'Do Laundry',
  statusComplete: false  
  },
  {
  id: '2',
  title: 'Exercise Daily',
  statusComplete: false  
  },
  {
  id: '3',
  title: 'Cook',
  statusComplete: false  
  }
]})


function markCompleted(id){
  
setState( 
  {todos: todos.todos.map(todo => {
    if (todo.id === id) {
      todo.statusComplete = !todo.statusComplete;
    }
      return todo                
    }) 
  })
}

function markDeleted(id){
  setState({todos: todos.todos.filter(todo=> todo.id !== id)
})

}
  return (
    <div className="App">
    <Header/>
    <Todoadd/>
    <Todo todo={todos.todos} 
    markCompleted={markCompleted}
    markDeleted={markDeleted}  
    />
    </div>
  );
}

export default App;
