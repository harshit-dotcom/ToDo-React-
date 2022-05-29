import React from 'react';

export const Todo = (props) => {
  return (
      <div className="my-2 mx-2 mb-2 card cardv" style={{width: 18+"rem"}}>
          <div className="card-body">
            <h5 className="card-title"> {props.item.title} </h5>
            <p className="card-text"> {props.item.desc} </p>
            <button type="button" className="btn btn-danger" onClick={ () => {
              props.delete(props.item);
              console.log("Item Deleted");
              }}>Delete</button>
          </div>
      </div>
  )
}
