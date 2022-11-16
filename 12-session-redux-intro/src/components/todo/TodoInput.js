import { useDispatch, useSelector } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";



const TodoInput = () => {

  const dispatch = useDispatch();
  const görevler = useSelector((state)=> state.todoReducer.görevler)
  

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(ekle(görevler.text)) 
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"

       value={görevler.text}
        onChange={(e) => görevler.text = e.target.value}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
