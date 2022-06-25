import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Todo_list = () => {
 
const todoList =  useSelector((state) => state.todo)

const disPatch = useDispatch()
const removeTodo = (id) => {
  disPatch({type: 'delete', payload: id})

 console.log(todoList)

}

 
   
    return (
        <div>
          {todoList.map((todo, index) => {
            return(
              <div key={index}>
              <p>{todo} <button onClick={() => removeTodo(index)}>X</button></p>
              </div>
            )
          })}
        </div>
    );
};

export default Todo_list;