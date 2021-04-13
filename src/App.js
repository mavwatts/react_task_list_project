import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
//to use a hook state inside of a function you import it and 'useState'
import {useState} from 'react'
//Inside the bracket 'tasks' is what you want to call the piece of state and the 'setTasks' is the function to update the state
//the 'tasks' variable in the brackets is being used in the return statement below 
//*Its important to know state is immutable, you change it you would use 'setTasks'

const App = () => {
    const[showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at school',
          day: 'Feb 9th at 4:30pm',
          reminder: true,
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 6th at 1:30pm',
          reminder: false,
      },
  ])

  //Add a task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete a task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
    id))
  }

  //Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
   <div className ='container'>
     <Header title='Task List' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
   </div>
  )
}

export default App;
