import React, { ReactInstance, useRef, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './modal';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [term, setTerm] = useState<string>("")
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setTodoList([...todoList, {id:Date.now(), name:term, isCompleted: false}])
    setTerm('');
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField term={term} setTerm={setTerm} handleSubmit={handleSubmit} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
