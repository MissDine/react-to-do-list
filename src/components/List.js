import React, { useState, useEffect } from "react";
import "./Home.css";


function List() {
    const [task, setTask] = useState({
        user_id:null,
        name:""
    });
    const [tasklist, setTaskList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9291/tasks").then(response => response.json()).then(data =>setTaskList(data))

    },[])
    function handleEdit(id, name){
        setTask({
            ...task,
            user_id:id,
            name:name
        }) 
        
    }

    function handleDelete(id){
        fetch(`http://localhost:9291/tasks/${id}`,{
            method: "DELETE"
        })
        const remaining = tasklist.filter((item)=>item.id!== id)
        setTaskList(remaining)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(task);
        fetch(`http://localhost:9291/tasks/${task.user_id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(task)
        })
        .then(response => response.json())
        .then(data => {
            const rem = tasklist.map((task)=> task.id === data.user_id ? data : task )
            setTaskList(rem) 
        })
        setTask({
            user_id:null,
            name:""
        })
        
    }

    
    return(
        <>
            <div>
            <h1>List of all tasks:</h1>
            <form onSubmit = {handleSubmit}>
                <input
                type="text"
                name="text"
                id="text"
                value = {task.name}
                onChange={(e) => setTask({
                    ...task,
                    name: e.target.value
                })}
                placeholder="Add list here..."
                />
                <input className = "sub"
                type="submit" value="Edit list.." />
            </form>
            <ol>
            {tasklist.map(item => (<li className="list" key = {item.id}>
            {item.name} <button className="edit"
            onClick = {()=>handleEdit(item.id, item.name)} >Edit</button> <button className="dele"
            onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>))}
            </ol>
        </div>
        </>
        
    )
}

export default List