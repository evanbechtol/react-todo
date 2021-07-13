import "./Todo.css";
import Card from "../UI/Card";

const TodoItem = ( {
                     item,
                     handleDelete,
                     handleEdit,
                     handleComplete
                   } ) => {

  const deleteItem = () => {
    handleDelete( {
      name: item.name,
      description: item.description,
      uid: item.id
    } );
  };

  const editItem = () => {
    handleEdit( {
      name: item.name,
      description: item.description,
      uid: item.id
    } );
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
        <p className="todo-item__name">{item.name}</p>

        <div className="todo-item__description">
          {item.description}
        </div>

        <div className="todo-item__actions">
          <button id="delete-item" onClick={deleteItem}>Delete</button>
          <div>
            <button id="edit-item" onClick={editItem}>Edit</button>
            <button id="complete-item"
                    onClick={completeItem}>Complete
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
