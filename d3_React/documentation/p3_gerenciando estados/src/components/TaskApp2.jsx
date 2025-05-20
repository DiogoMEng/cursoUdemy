import AddTask from './addTask.jsx';
import { TasksProvider } from './TaskContext.jsx'
import TaskList from './TaskList.jsx';

export default function TaskApp2() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
