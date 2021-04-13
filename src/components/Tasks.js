import Task from './Task'

//In the Task component below each task in the task list should have a unique key prop which is the id
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
         {tasks.map((task) => (
         <Task 
         key={task.id} 
         task={task} 
         onDelete={onDelete}
         onToggle={onToggle}
         />
         ))}   
        </>
    )
}

export default Tasks
