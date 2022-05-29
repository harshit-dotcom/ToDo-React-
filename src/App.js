import './App.css';
import '../src/Components/style.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../src/Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "../src/Components/Footer";
import { AddToDo } from "../src/Components/AddToDo";
import { About } from "../src/Components/About";

function App() {
  let initTodo;
  if (localStorage.getItem('taskList') === null) initTodo = [];
  else initTodo = JSON.parse(localStorage.getItem('taskList'));


  const [taskList, removeTodos] = useState(initTodo);

  const Delete = (item) => {
    removeTodos(
      initTodo = taskList.filter((e) => {
        return e !== item;
      }))
    localStorage.setItem('taskList', JSON.stringify(initTodo));
  }

  const Add = (title, desc) => {
    let newItem = {
      title, desc
    }; taskList.push(newItem);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    removeTodos(
      taskList.map(e => e)
    )

  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <div className='TodosSection'>
                <div className='Todos'>
                  <Todos todos={taskList} delete={Delete} />
                </div>
                <div className='newTodo'>
                  <AddToDo newTodo={Add} />
                </div>
              </div>
            </>
          } />
          <Route path="about" element={
            <>
              <Header />
              <div className='my-3 mx-3'>
                  <About />
              </div>
            </>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;