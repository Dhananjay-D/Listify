import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo
          key={todoItem.id}
          todoItem={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        ></Todo>
      ))}
    </div>
  );
};

export default TodoList;
