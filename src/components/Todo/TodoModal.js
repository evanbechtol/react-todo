import "./TodoModal.css";
import { useState } from "react";

const TodoModal = ( { title, visible, handleClickAdd, handleClickClose } ) => {
  const [ todoName, setTodoName ] = useState( "" );
  const [ todoDescription, setTodoDescription ] = useState( "" );

  if ( !visible ) {
    return null;
  }

  const nameChangeHandler = ( e ) => {
    setTodoName( e.target.value );
  };

  const descriptionChangeHandler = ( e ) => {
    setTodoDescription( e.target.value );
  };

  const add = () => {
    resetForm();
    handleClickAdd( { name: todoName, description: todoDescription } );
  };

  const cancel = () => {
    resetForm();
    handleClickClose();
  };

  const resetForm = () => {
    setTodoDescription( "" );
    setTodoName( "" );
  };

  return (
    <div className={`modal show-modal`}>
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-button"
                  onClick={cancel}>
            &times;
          </button>
          <h3>{title}</h3>
        </div>

        <div className="modal-inputs">
          <div className="modal-inputs__group">
            <label htmlFor="todo-name" className="modal-input__label">
              Name of Todo
            </label>
            <input id="todo-name"
                   type="text"
                   aria-label="todo name"
                   value={todoName}
                   onChange={nameChangeHandler}/>
          </div>

          <div className="modal-inputs__group">
            <label htmlFor="todo-description" className="modal-input__label">
              Description
            </label>
            <textarea id="todo-description"
                      aria-label="todo description"
                      value={todoDescription}
                      onChange={descriptionChangeHandler}/>
          </div>
        </div>

        <div className="modal-actions">
          <button id="cancel"
                  onClick={cancel}>
            Cancel
          </button>
          <button id="add"
                  onClick={add}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
