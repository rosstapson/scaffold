import React, { useEffect, useState } from 'react';
import { Todo } from '@afrilaser/data'
import { Todos } from '@afrilaser/ui'

export const App = () => {

  //comment
  
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }
  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>zomg</button>
    </>
  );
};

export default App;
