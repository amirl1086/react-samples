import React, { useEffect, useState } from 'react';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);



  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const resultCallback = (result) => {
      const loadedTasks = [];
  
      for (const taskKey in result) {
        loadedTasks.push({ id: taskKey, text: result[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks({ url: 'http://localhost:3030/tasks' }, resultCallback);
    
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
