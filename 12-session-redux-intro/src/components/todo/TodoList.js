import { useDispatch, useSelector } from "react-redux";
import { temizle } from "../../redux/actions/todoActions";
import TodoItem from "./TodoItem";


const TodoList = () => {

  const dispatch = useDispatch()
  const görevler = useSelector((state)=> state.todoReducer.görevler)
 
 
  return (
    <div>
      <div>

      {görevler.map((i)=>{
        return(
      <TodoItem  görev={i}/>
         
        )
      })}
     

         
      
      </div>
      <div className="clear-wrapper">
        <button className="clear-button" 
        onClick={()=>dispatch(temizle()) } 
         >Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
