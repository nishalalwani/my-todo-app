import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addTodo,deleteTodo,removeTODO } from '../actions'
import "./Todo.css"

const Todo = () => {
    const[inputData,setInputData]=useState("")
    const list=useSelector((state)=>state.todoReducer.list)
    const dispatch=useDispatch()
  return (
    <>
    <div className='main-wrapper'>
      <h1>TODO LIST</h1>
        <div className='main-form'>
          <form className='todo-form'>

          
     
       

         
            <input type='text' className="input_field" placeholder='Add your list here..' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
            <i className='fa fa-plus add-btn' onClick={()=>dispatch(addTodo(inputData),setInputData(""))}></i>
     
          </form>
          <div className='list-wrapper'>
         

            {list.map((ele)=>{
                return( <div  className='todo-task' key={ele.id}>
                  <div  className='todo-text'> 
                {ele.data}
                </div>
                <i className='fa fa-trash-alt delete-btn'title='Delete Item' onClick={()=>dispatch(deleteTodo(ele.id))}></i>
                </div>)

            })}
           
       
          </div>
            <button className='submit_todo' onClick={()=>dispatch(removeTODO())}>Remove all items</button>
        </div>
        

    
        </div>
    </>
  )
}

export default Todo