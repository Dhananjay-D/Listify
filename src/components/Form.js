import styles from "../style.module.css";
import shortid from "shortid";

const Form=({todo,setTodo,todoList,setTodoList})=>{ //destructuring the props

    const handleChange=(event)=>{
        setTodo(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList,{ name:todo, id:shortid.generate()}]); //...todoList will get the orginal array having all todoitems and then it will add new todo item to it.
        console.log(todoList);
        setTodo("");
    }

    return (
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input className={styles.todoinput} value={todo} onChange={handleChange} placeholder="Add Todo Items"></input>
                <button className={styles.todobutton} type="submit">Add</button>
            </form>
        </div>
    )
};
export default Form;