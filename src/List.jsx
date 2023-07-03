import { useState } from "react";
import Task from "./Task.jsx";

export default function List() {
  [user, setUser] = useState("Bryan's");
  [isEmpty, setIsEmpty] = useState(false);
  [inputText, setInputText] = useState("");
  [listState, setListState] = useState([]);

  const handleChange = (event) => {
    // if(event.target.value === ""){
    //   setIsEmpty(true);
    // } else{
    //   setIsEmpty(false);
    // }
    const goal = event.target.value;
    setInputText(goal);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    setListState([
      ...listState,
      <Task goal={inputText} key={listState.length} />
    ]);
  };

  return (
    <div className="toDoList">
      <h1> {user} To Do List </h1>
      <form>
        <input type="text" onChange={handleChange}></input> <br />
        <input
          id="subBtn"
          type="submit"
          value="Add Task"
          onClick={handleAddTask}
        />
      </form>

      {listState.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
