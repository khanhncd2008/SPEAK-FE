import { useState } from "react";
import "./App.css";
import { store } from "./redux/strore";
import { increaseCount, decreaseCount, addTodo, deleteTodo } from "./redux/action";
import { connect, useDispatch, useSelector } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todo)
  console.log("store", store.getState());
  console.log("todos", todos);

  const [name, setName] = useState("");
  const handleIncrease = () => {
    props.increaseCount(10);
  };

  const handleDecrease = () => {
    props.decreaseCount(10);
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({
        name,
        id: Math.random(),
    }))
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <div className="App">
        <h1>Redux tutorials</h1>
        <h1>{props.count.count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <div>
          <input value={name} onChange={handleOnChange} />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        {
          todos?.map((todo, index) => {
            return (
              <div key={todo.id}>{index} - {todo.name}
              <span onClick={(e) => handleDeleteTodo(todo.id)} style={{cursor:"pointer"}}>X</span>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    count: store.getState().count,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    increaseCount: (data) => store.dispatch(increaseCount(data)),
    decreaseCount: (data) => store.dispatch(decreaseCount(data)),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
