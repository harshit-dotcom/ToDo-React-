import React, { useState } from 'react';



export const AddToDo = ({newTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    return (
        <>
            <form className='addTodoForm' onSubmit={e=>
            {
                e.preventDefault();
                newTodo(title, desc)}
            }>
                <h5 className='AddtodoHead'> Add ToDo </h5>
                <div className="mb-3 px-3 py-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Enter Title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Add Description</label>
                    <textarea 
                    className="form-control" 
                    id="desc"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    placeholder='Add Description' 
                    rows="3"
                    required></textarea>
                </div>
                <button type="submit" className="btn-center btn btn-success">Add</button>
            </form>
        </>
    )
}
