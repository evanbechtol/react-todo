import "./Todo.css";
import Card from "../UI/Card";
import { useState } from "react";

const TodoItem = ( {
                     item,
                     handleDelete,
                     handleEdit,
                     handleComplete
                   } ) => {
  const [ isEdit, setIsEdit ] = useState( false );
  const [enteredName, setEnteredName] = useState(item.name);
  const [enteredDescription, setEnteredDescription] = useState(item.description);

  const updateName = (e) => {
    setEnteredName(e.target.value);
  };

  const updateDescription = (e) => {
    setEnteredDescription(e.target.value);
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

  return (
    <li className="todo-item">
      <Card>
        <div className="todo-item-container">
          <div className="todo-item__row">
            {!isEdit && <p className="todo-item__name">{enteredName}</p>}
            {isEdit && <input className="todo-item__name"
                              value={enteredName}
                              onChange={updateName}/>}
          </div>

          <div className="todo-item__row">
            {
              !isEdit &&
              <div className="todo-item__description">
                {enteredDescription}
              </div>
            }

            {
              isEdit &&
              <textarea className="todo-item__description"
                        value={enteredDescription}
                        onChange={updateDescription}>
              {item.description}
            </textarea>
            }
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
