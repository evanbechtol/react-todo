import TodoHeader from "./TodoHeader";
import "./TodoView.css";
import TodoModal from "./TodoModal";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoView = () => {
  const DUMMY_TODO_LIST = [
    { id: 1, name: "item 1", description: "this is a description for item 1" },
    { id: 2, name: "item 2", description: "this is a description for item 2" },
    { id: 3, name: "item 3", description: "this is a description for item 3" }
  ];

  const [ todos, setTodos ] = useState( DUMMY_TODO_LIST );

  const [ showModal, setShowModal ] = useState( false );

  const handlers = {
    openModal: () => {
      console.log( "opened modal" );
      setShowModal( true );
    },
    closeModal: () => {
      console.log( "closed modal" );
      setShowModal( false );
    },
    addTodoItem: ( data ) => {
      setTodos( () => [ ...todos, data ] );
      setShowModal( false );
    },
    deleteTodoItem: ( data ) => {
      setTodos((todos) => {
        return todos.filter((item) => item.id !== data.uid);
      });
    },
    editTodoItem: ( data ) => {
      console.log( "edit item" );
      console.log( data );
    },
    completeTodoItem: ( data ) => {
      console.log( "complete item" );
      console.log( data );
    }
  };

  return (
    <div id="todo-view" className="todo-view">
      <TodoModal title="Add New Todo"
                 visible={showModal}
                 handleClickClose={handlers.closeModal}
                 handleClickAdd={handlers.addTodoItem}
      />
      <TodoHeader title="Todo List" handleOpenModal={handlers.openModal}/>
      <ul className="todo-list__container">
        {
          todos.map( item => {
            return <TodoItem className="todo-item"
                             key={item.name}
                             name={item.name}
                             description={item.description}
                             uid={item.id}
                             content={item}
                             handleDelete={handlers.deleteTodoItem}
                             handleComplete={handlers.completeTodoItem}
                             handleEdit={handlers.editTodoItem}/>;
          } )
        }
      </ul>
    </div>
  );
};

export default TodoView;
