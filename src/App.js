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
  const [ currectColor , setCurrentcolor] = useState("#191818")


  const handleChangeComplete = (color) => {
    setCurrentcolor(color.hex)
    console.log(color)
    console.log(color.hex)
  };
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
  console.log("todo", array); 

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputDetail.trim() !== "") {
      setArray((prevArray) => {
        return prevArray.map((item) => {
          if (item.receivedData) {
            const listIndex = prevArray.findIndex(
              (list) => list.id === item.receivedData.id
            );
            console.log(listIndex, "kk");
            if (listIndex !== -1) {
              const updatedReceivedData = {
                parent_id: item.receivedData.id,
                additionalData: [
                  ...item.receivedData.additionalData.map((child, index) => ({
                    ...child,
                    child_id: index + 1,
                  })),
                  {
                    ParentID: item.receivedData.id,
                    child_id: item[listIndex].receivedData.additionalData.length + 1,
                    name: inputDetail,
                  },
                ],
              };

              const updatedItem = {
                ...item,
                receivedData: updatedReceivedData,
              };

              return updatedItem;
            }
          }
          return item;
        });
      });
      setInputDetail("");
      console.log("todo", array);
    }
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
        handleChangeComplete ,
        currectColor ,
         setCurrentcolor
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/list-detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;







// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Todo from "./components/Todo";
// import Detail from "./components/Detail";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { MyContext } from "./Context/Mycontext";

// function App() {
//   const [buttonValue, setbuttonvalue] = useState(false);
//   const [inputDetail, setInputDetail] = useState("");
//   const [inputvalue, setInputValue] = useState("");
//   const [arry, setArry] = useState([]);

//   const handleCreate = () => {
//     if (inputvalue.length > 0) {
//       setbuttonvalue(false);
//       setArry((prevArry) => [
//         ...prevArry,
//         {
//           name: inputvalue,
//           id: prevArry.length + 1,
//           receivedData: {
//             id: prevArry.length + 1,
//             additionalData: [],
//           },
//         },
//       ]);
//       setInputValue("");
//     }
//     console.log("todo", arry);
//   };

//   // const handleInputKeyPress = (e) => {
//   //   if (e.key === "Enter" && inputDetail.trim() !== "") {
//   //     setArry((prevArry) => {
//   //       return prevArry.map((item) => {
//   //         if (item.receivedData) {
//   //           const updatedReceivedData = {
//   //             ...item.receivedData,
//   //             additionalData: [
//   //               ...item.receivedData.additionalData,
//   //               {
//   //                 ParentID : prevArry.length + 1,
//   //                 child_id: item.receivedData.additionalData.length + 1,
//   //                 name: inputDetail,
//   //               },
//   //             ],
//   //           };
//   //           return {
//   //             ...item,
//   //             receivedData: updatedReceivedData,
//   //           };
//   //         } else {
//   //           return item;
//   //         }
//   //       });
//   //     });
//   //     setInputDetail("");
//   //     console.log("todo",arry)
//   //   }
//   // };

//   const handleInputKeyPress = (e) => {
//     if (e.key === "Enter" && inputDetail.trim() !== "") {
//       setArry((prevArry) => {
//         return prevArry.map((item) => {
//           if (item.receivedData) {
//             const listIndex = prevArry.findIndex(
//               (list) => list.id === item.receivedData.id
//             );

//             console.log(listIndex,"kk");
//             if (listIndex !== -1) {
//               const updatedReceivedData = {
//                 parent_id: item.receivedData.id,
//                 additionalData: [
//                   ...item.receivedData.additionalData.map((child, index) => ({
//                     ...child,
//                     child_id: index + 1,
//                   })),
//                   {
//                     ParentID: item.receivedData.id,
//                     child_id: item.receivedData.additionalData.length + 1,
//                     name: inputDetail,
//                   },
//                 ],
//               };

//               const updatedItem = {
//                 ...item,
//                 receivedData: updatedReceivedData,
//               };

//               return updatedItem;
//             }
//           }
//           return item;
//         });
//       });
//       setInputDetail("");
//       console.log("todo", arry);
//     }
//   };

//   return (
//     <MyContext.Provider
//       value={{
//         handleCreate,
//         inputvalue,
//         buttonValue,
//         setbuttonvalue,
//         arry,
//         setArry,
//         setInputValue,
//         handleInputKeyPress,
//         inputDetail,
//         setInputDetail,
//       }}
//     >
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Todo />} />
//           <Route path="/list-detail" element={<Detail />} />
//           {/* <Route path="/list-detail/:id" element={<Detail />} */}
//         </Routes>
//       </BrowserRouter>
//     </MyContext.Provider>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Todo from "./components/Todo";
// import Detail from "./components/Detail";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { MyContext } from "./Context/Mycontext";
// function App() {
//   const [buttonValue, setbuttonvalue] = useState(false);
//   const [inputDetail, setInputDetail] = useState("");
//   const [inputvalue, setInputValue] = useState("");
//   const [arry, setArry] = useState([]);
//   const handleCreate = () => {
//     if (inputvalue.length > 0) {
//       setbuttonvalue(false);
//       setArry([
//         ...arry,
//         {
//           name: inputvalue,
//           id: arry.length + 1,
//           receivedData: {
//             id: arry.length + 1,
//             additionalData: [],
//           },
//         },
//       ]);
//       console.log(arry, "todo array");
//     }
//     setInputValue("");
//   };

//   // const handleInputKeyPress = (e) => {
//   //   if (e.key === "Enter" && inputDetail.trim() !== "") {
//   //     setArry([...arry, { ...receivedData.additionalData, inputDetail }]);
//   //     setInputDetail("");
//   //   }
//   // };

//   const handleInputKeyPress = (e) => {
//     if (e.key === "Enter" && inputDetail.trim() !== "") {
//       // Create a copy of the array
//       const updatedArray = arry.map(item => {
//         if (item.receivedData && item.receivedData.additionalData) {
//           // Create a copy of receivedData to update it
//           const updatedReceivedData = { ...item.receivedData };
//           const vinay = {
//             id:arry.receivedData.additionalData.length +1,
//             name : inputDetail,
//           }
//           updatedReceivedData.additionalData.push(vinay);

//           return {
//             ...item,
//             receivedData: updatedReceivedData
//           };
//         } else {
//           return item;
//         }
//       });

//       setArry(updatedArray);
//       setInputDetail("");
//     }
//   };

//   return (
//     <MyContext.Provider
//       value={{
//         handleCreate,
//         inputvalue,
//         buttonValue,
//         setbuttonvalue,
//         arry,
//         setArry,
//         setInputValue,
//         handleInputKeyPress,
//         inputDetail,
//         setInputDetail,
//       }}
//     >
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Todo />} />
//           <Route path="/list-detail" element={<Detail />} />
//           {/* <Route path="/list-detail/:id" element={<Detail />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </MyContext.Provider>
//   );
// }

// export default App;
