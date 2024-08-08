import React, { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const change = (e) => setInputText(e.target.value);
  const add = () => {
    setTodoList([...todoList, { text: inputText }]);
    setInputText("");
  };

  const remove = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };
  const edit = (index) => {
    setEditIndex(index);
    setEditText(todoList[index].text);
  };

  const save = (index) => {
    const updateTodoList = [...todoList];
    updateTodoList[index].text = editText;
    setTodoList(updateTodoList);
    setEditIndex(null);
    setEditText("");
  };
  const editChange = (e) => {
    setEditText(e.target.value);
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
                {editIndex === index ? (
                  <div className="koko flex justify-center w-full">
                    <input
                      type="text"
                      value={editText}
                      onChange={editChange}
                      className="
                    border border-black w-3/4"
                    />
                    <button
                      onClick={() => save(index)}
                      className="p-4 bg-green-950
                   text-gray-300 m-4 rounded-xl"
                    >
                      保存
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <div className="h-12 pt-4 w-3/4 bg-blue-300">
                      {todo.text}
                    </div>
                    <div className="flex w-1/4 justify-end">
                      <button
                        onClick={() => edit(index)}
                        className="p-4 bg-blue-950
                   text-gray-300 m-4 rounded-xl"
                      >
                        編集
                      </button>
                      <button
                        onClick={() => remove(index)}
                        className="p-4 bg-gray-300
                   text-black m-4 rounded-xl"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Todo;
