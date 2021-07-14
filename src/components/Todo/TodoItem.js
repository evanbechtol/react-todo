import "./Todo.css";
import Card from "../UI/Card";
import TodoItemCardFields from "./TodoItemCardFields";
import { useState } from "react";

const TodoItem = ( {
                     item,
                     handleDelete,
                     handleEdit,
                     handleComplete
                   } ) => {
  const [ isEdit, setIsEdit ] = useState( false );
  const [ enteredName, setEnteredName ] = useState( item.name );
  const [ enteredDescription, setEnteredDescription ] = useState( item.description );

  const updateName = ( e ) => {
    setEnteredName( e.target.value );
  };

  const updateDescription = ( e ) => {
    setEnteredDescription( e.target.value );
  };

  const deleteItem = () => {
    handleDelete( {
      name: item.name,
      description: item.description,
      uid: item.id
    } );
  };

  const editItem = () => {
    setIsEdit( true );
  };

  const saveItem = () => {
    handleEdit( {
      name: item.name,
      description: item.description,
      uid: item.id
    } );
    setIsEdit( false );
  };

  const completeItem = () => {
    handleComplete( {
      name: item.name,
      description: item.description,
      uid: item.id
    } );
  };

  const descriptionReadOnlyComponent = (
    <div className="todo-item__description">
      {enteredDescription}
    </div>
  );

  const descriptionEditComponent = (
    <textarea className="todo-item__description"
              value={enteredDescription}
              onChange={updateDescription}>
              {item.description}
    </textarea>
  );

  const nameReadOnlyComponent = (
    <p className="todo-item__name">{enteredName}</p>
  );

  const nameEditComponent = (
    <input className="todo-item__name"
           value={enteredName}
           onChange={updateName}/>
  );

  return (
    <li className="todo-item">
      <Card>
        <div className="todo-item-container">
          <div className="todo-item__row">
            <TodoItemCardFields isEdit={isEdit}
                                readOnlyComp={nameReadOnlyComponent}
                                editComp={nameEditComponent}/>
          </div>

          <div className="todo-item__row">
            <TodoItemCardFields isEdit={isEdit}
                                readOnlyComp={descriptionReadOnlyComponent}
                                editComp={descriptionEditComponent}/>
          </div>

          <div className="todo-item__actions">
            <button id="delete-item" onClick={deleteItem}>Delete</button>
            <div>
              {
                !isEdit &&
                <button id="edit-item" onClick={editItem}>Edit</button>
              }

              {
                isEdit &&
                <button id="save-item" onClick={saveItem}>Save</button>
              }

              <button id="complete-item"
                      onClick={completeItem}>Complete
              </button>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
