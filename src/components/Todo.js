import React, { useState, useEffect, useContext } from "react";
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
    setArray,currectColor
  } = useContext(MyContext);
  const appStyle = {
    backgroundColor: currectColor,
  };
  //   const [buttonValue, setbuttonvalue] = useState(false);
  //   const [inputvalue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState([]);
  //   const [arry, setArry] = useState(
  //     localStorage.getItem("arry") === null
  //       ? []
  //       : JSON.parse(localStorage.getItem("arry"))
  //   );
  // const [arry, setArry] = useState([])

  //   useEffect(() => {
  //     localStorage.setItem("arry", JSON.stringify(arry));
  //   }, [arry]);

  const handleButton = () => {
    setButtonValue(true);
  };

  const handleinputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCancel = () => {
    setButtonValue(false);
  };

  //   const handleCreate = () => {
  //     if (inputvalue.length > 0) {
  //       setbuttonvalue(false);
  //       setArry([
  //         ...arry,
  //         {
  //           name: inputvalue,
  //           id:arry.length+1,
  //           receivedData: {
  //             id:arry.length+1,
  //             additionalData: [],
  //           },
  //         },
  //       ]);
  //       console.log(arry, "todo array");
  //     }
  //     setInputValue("");
  //   };

  const handlepath = (index) => {
    navigate(`/list-detail/`);
  };

  const toggleCheck = (index) => {
    const updatedIsChecked = [...isChecked];
    updatedIsChecked[index] = !updatedIsChecked[index];
    setIsChecked(updatedIsChecked);
  };

  const deleteTask = (index) => {
    const updatedArry = [...array];
    updatedArry.splice(index, 1);
    setArray(updatedArry);
    const updatedIsChecked = [...isChecked];
    updatedIsChecked.splice(index, 1);
    setIsChecked(updatedIsChecked);
  };

  return (
    <div className="task-body" style={appStyle}>
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
                onChange={handleinputChange}
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
              <div className="box-task" onClick={handlepath}>
                <p>No task</p>
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
