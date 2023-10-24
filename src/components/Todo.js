import styles from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div>
      <div className={styles.todoItem}>
        <h3 className={styles.todoName}>{todoItem.name}</h3>
        <button onClick={deleteTodo} className={styles.deleteButton}>
          Done
        </button>
      </div>
    </div>
  );
};
export default Todo;
