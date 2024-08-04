import React, { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const change = (e) => setInputText(e.target.value);
  const add = (e) => {
    setTodoList([...todoList, { text: inputText }]);
    setInputText("");
  };
  return (
    <div className="App">
      <div>
        <div className="main text-center">
          <input
            type="text"
            id="input"
            value={inputText}
            onChange={change}
            className="border border-gray-700 rounded-xl p-4 m-6 w-2/4"
          />
          <button
            id="add"
            className="p-4 bg-blue-600 text-white m-4 rounded-xl"
            onClick={add}
          >
            追加
          </button>
        </div>
        <div className="todo-container">
          <ol id="todos" className="todos">
            {todoList.map((todo, index) => (
              <li
                key={index}
                className="w-3/4 mx-auto my-4 p-4 text-xl bg-blue-300 list-decimal rounded-xl"
              >
                {todo.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Todo;
