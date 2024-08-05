import React, { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const change = (e) => setInputText(e.target.value);
  const add = (e) => {
    setTodoList([...todoList, { text: inputText }]);
    setInputText("");
  };

  const remove = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
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
          <ol>
            {todoList.map((todo, index) => (
              <li key={index} className="flex justify-center mx-auto w-3/4">
                <div className="w-3/4  my-4 p-4 text-xl bg-blue-300 list-decimal rounded-xl">
                  {todo.text}
                </div>
                <button
                  onClick={() => remove(index)}
                  className="p-4 bg-gray-300
                   text-black m-4 rounded-xl"
                >
                  削除
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Todo;
