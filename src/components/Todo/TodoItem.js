import "./Todo.css";
import Card from "../UI/Card";

const TodoItem = ( {
                     name,
                     description,
                     uid,
                     handleDelete,
                     handleEdit,
                     handleComplete
                   } ) => {

  const deleteItem = () => {
    handleDelete({ name, description, uid});
  };

  const editItem = () => {
    handleEdit({ name, description, uid});
  };

  const completeItem = () => {
    handleComplete({ name, description, uid});
  };

  return (
    <li className="todo-item">
      <Card>
        <p className="todo-item__name">{name}</p>

        <div className="todo-item__description">
          {description}
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
