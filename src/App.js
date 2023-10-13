import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Detail from "./components/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyContext } from "./Context/Mycontext";

function App() {
  const [buttonValue, setButtonValue] = useState(false);
  const [inputDetail, setInputDetail] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [currentColor, setCurrentColor] = useState("#191818");

  const handleCreate = () => {
    if (inputValue.trim() !== "") {
      setArray((prevArray) => [
        ...prevArray,
        {
          name: inputValue,
          id: prevArray.length + 1,
          receivedData: {
            id: prevArray.length + 1,
            additionalData: [],
          },
        },
      ]);
      setInputValue("");
      setButtonValue(false);
    }
  };
  console.log("todo",array)

  const handleInputKeyPress = (e, index) => {
    if (e.key === "Enter" && inputDetail.trim() !== "") {
      const updatedArray = [...array];
      updatedArray[index].receivedData.additionalData.push({ name: inputDetail });
      setArray(updatedArray);
      setInputDetail("");
    }
    console.log("Detail",array)
  };


  return (
    <MyContext.Provider
      value={{
        handleCreate,
        inputValue,
        setButtonValue,
        array,
        setArray,
        setInputValue,
        handleInputKeyPress,
        inputDetail,
        setInputDetail,
        buttonValue,
        currentColor,
        setCurrentColor,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/list-detail/:index" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
