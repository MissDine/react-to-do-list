import React, { useState, useEffect } from "react";
import "./Home.css";


function List() {
    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9294").then(response => response.json()).then(data =>setTaskList(data))

    })
    return(
        <>
            <div>
            <form>
                <input
                type="text"
                name="text"
                id="text"
                // onChange={(e) => handleChange(e)}
                placeholder="Add list here..."
                />
            </form>
            <ol>
            {tasklist.map(item => (<li key = {item.id}>{item.name}</li>))}
            </ol>
        </div>
        </>
        
    )
}

export default List