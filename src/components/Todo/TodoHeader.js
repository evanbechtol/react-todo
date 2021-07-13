import "./TodoHeader.css";

const TodoHeader = ( { title, handleOpenModal } ) => {
  return (
    <div className="todo-header">
      <p className="todo-header__title">{title}</p>
      <button onClick={handleOpenModal}
              className="todo-header__add"
      >
        Add New Todo
      </button>
    </div>
  );
};

export default TodoHeader;
