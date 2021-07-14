const TodoItemCardFields = ({isEdit, readOnlyComp, editComp}) => {
  return isEdit ? editComp : readOnlyComp;
};

export default TodoItemCardFields;
