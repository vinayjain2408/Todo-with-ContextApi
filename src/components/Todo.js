import React, { useContext, useState } from "react";
import "./Todo.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { MyContext } from "../Context/Mycontext";

function Todo() {
  const {
    handleCreate,
    inputValue,
    buttonValue,
    setButtonValue,
    array,
    setInputValue,
    currentColor,
    setArray,
  } = useContext(MyContext);

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState([]);

  const handleButton = () => {
    setButtonValue(true);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleCancel = () => {
    setButtonValue(false);
  };

  const handlePath = (index) => {
    navigate(`/list-detail/${index}`);
  };

  const toggleCheck = (index) => {
    const updatedIsChecked = [...isChecked];
    updatedIsChecked[index] = !updatedIsChecked[index];
    setIsChecked(updatedIsChecked);
  };

  const deleteTask = (index) => {
    const updatedArray = [...array];
    updatedArray.splice(index, 1);
    setArray(updatedArray);
    const updatedIsChecked = [...isChecked];
    updatedIsChecked.splice(index, 1);
    setIsChecked(updatedIsChecked);
  };

  return (
    <div className="task-body" style={{ backgroundColor: currentColor }}>
      <div>
        <div className="new-tabe">
          <button onClick={handleButton}>New List</button>
        </div>
        {buttonValue ? (
          <div className="inp-div">
            <div className="inp-box">
              <p>List Name</p>
              <input
                type="text"
                placeholder="Enter Task"
                value={inputValue}
                onChange={handleInput}
              />
              <button type="submit" onClick={handleCancel}>
                Cancel
              </button>
              <button type="text" onClick={handleCreate}>
                Create List
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="multilist">
        {array.map((item, index) => {
          return (
            <div key={index} className="box-list">
              <div className="icons">
                <input
                  type="checkbox"
                  checked={isChecked[index] || false}
                  onChange={() => toggleCheck(index)}
                />
                {isChecked[index] ? (
                  <button onClick={() => deleteTask(index)}>
                    <DeleteIcon />
                  </button>
                ) : (
                  ""
                )}
              </div>
              {/* <div className="box-task" onClick={() => handlePath(index)}>
                <p>No task</p>
              </div> */}

              <div className="box-task" onClick={() => handlePath(index)}>
                <p>
                  {array.receivedData &&
                  array.receivedData.additionalData &&
                  array.receivedData.additionalData.length > 0
                    ? array.receivedData.additionalData.map((name) => {
                        return <p key={name.name}>{name.name}</p>;
                      })
                    : "No task"}
                </p>
              </div>

              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;

