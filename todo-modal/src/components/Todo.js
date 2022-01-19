
import { useState } from 'react';

import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openDeleteTodoModalHandler = () => {
    console.log(`openDeleteTodoModalHandler ${props.text}`);
    setIsModalOpen(true);
  }
  
  const closeDeleteTodoModalHandler = () => {
    console.log(`closeDeleteTodoModalHandler`);
    setIsModalOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={openDeleteTodoModalHandler}>Delete</button>
      </div>

      { isModalOpen && (
        <Modal onCancelClick={closeDeleteTodoModalHandler} onConfirmClick={closeDeleteTodoModalHandler} />
      )}

      { isModalOpen && <Backdrop onClick={closeDeleteTodoModalHandler}/> }
    </div>
  );
}

export default Todo;