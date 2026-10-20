import React, { useEffect, useState } from 'react'

const ToDoList = ({tasks}) => {
 
  const [Tasks, setTasks] = useState(tasks);

  
  return (
    <>
    <div>ToDoList</div>
    <ul>
        {Tasks.map((task) =>  
          <p key = {task}>{task}</p>
        )}
    </ul>

    </>
  )
}

export default ToDoList