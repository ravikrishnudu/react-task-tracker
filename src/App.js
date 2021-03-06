import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
// import Task from './components/Task'
const App = () => {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shooping',
        day: 'Feb 6th at 4:30pm',
        reminder: true,
    }
])

//delete task
const deleteTask = (id) =>{
  console.log('delete', id)
}
  return (
    <div className="container">  
    <Header />  
    <Tasks tasks={tasks} />  
    </div>
  )
}

export default App
