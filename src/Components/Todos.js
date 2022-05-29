import React from 'react';
import { Todo } from "../Components/Todo";

export const Todos = (props) => {
  return (
    <div>
        {
          props.todos.length === 0 ?
          <div className="my-5 mx-5"> No Notes to Display </div>:
            props.todos.map((todo) =>{
              return <Todo item={todo} delete={props.delete} />
            })  
        }
    </div>
  )
}
