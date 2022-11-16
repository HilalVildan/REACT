import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { combineReducers, legacy_createStore } from "redux"
import counterReducer from "./redux/reducers/counterReducer"
import todoReducer from "./redux/reducers/todoReducer"
import { Provider } from "react-redux"

//legacy_createStore eski adi createStore

function App() {

  const topluReducer = combineReducers({
    counterReducer: counterReducer,
    todoReducer: todoReducer

  })
  
  const store = legacy_createStore(topluReducer)
 
  
  return (
    <div className="app">

    <Provider store={store}>
        <Counter />
        <Todo />
     </Provider>
    </div>
  );
}

export default App;
