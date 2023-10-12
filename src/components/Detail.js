import React, { useState, useEffect, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Detail.css";
import { MyContext } from "../Context/Mycontext";

function Detail() {
  const { inputDetail, setInputDetail, handleInputKeyPress, array } =
    useContext(MyContext);
  // const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);
  //   const [inputList, setInputList] = useState(
  //     localStorage.getItem("inputList") === null
  //       ? []
  //       : JSON.parse(localStorage.getItem("inputList"))
  //   );

  //   useEffect(() => {
  //     localStorage.setItem("inputList", JSON.stringify(inputList));
  //   }, [inputList]);



  const handleInput = (e) => {
    setInputDetail(e.target.value);
  };

  return (
    <div className="Detail-page">
      <div className="boxex">
        {array.length > 0 &&
          array.map((item, index) =>
            item.receivedData && item.receivedData.additionalData.length > 0
              ? item.receivedData.additionalData.map((inp, index) => {
                  return (
                    <div key={index} className="Accords">
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            <input
                              className="input-text"
                              type="text"
                              value={inp.name}
                              // onClick={(e) => handleEdit(e, index)}
                              // onChange={(e) => handleEdit(e, index)}
                            />
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="divide">
                            <div className="note">
                              <textarea
                                rows="12"
                                cols="21"
                                defaultValue="Notes"
                              ></textarea>
                            </div>
                            <div>
                              <div className="date">
                                <div>Due Date</div>
                                <button>Today</button>
                                <button>Tomorrow</button>
                              </div>
                              <div className="options">
                                <div>Priority</div>
                                <select>
                                  <option value="">None</option>
                                  <option value="High">High</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Low">Low</option>
                                </select>
                                <button
                                // onClick={() => handleDelete(index)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  );
                })
              : null
          )}

        <div className="List-input">
          <input
            type="text"
            placeholder="New task..."
            value={inputDetail}
            onChange={handleInput}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { pushToArray, deleteDetailList } from "../actions/index";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import "./Detail.css";

// function Detail() {
//   const { arry } = useContext(MyContext);
//   const [inputDetail, setInputDetail] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const receivedData = location.state;

//   const handleChange = (e) => {
//     setInputDetail(e.target.value);
//   };

//   const handleInputKeyPress = (e) => {
//     if (e.key === "Enter" && inputDetail.trim() !== "") {
//       const obj = {
//         parent_id: receivedData?.id,
//         name: inputDetail,
//       };
//       dispatch(pushToArray(receivedData, obj));
//       setInputDetail("");
//     }
//   };

//   const handleChangePath = (e) => {
//     e.preventDefault();
//     navigate("/");
//   };

//   return (
//     <div className="Detail-page">
//       <div className="back_path">
//         <a href="" onClick={handleChangePath}>
//           Back Button
//         </a>
//       </div>

//       <div className="boxex">
//         {additionalData && additionalData.receivedData.additionalData.length > 0
//           ? additionalData.receivedData.additionalData.map((item, index) => (
//               <div key={index} className="Accords">
//                 <Accordion>
//                   <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls={`panel${index + 1}-content`}
//                     id={`panel${index + 1}-header`}
//                   >
//                     <Typography>
//                       <input
//                         className="input-text"
//                         type="text"
//                         value={item.name}
//                       />
//                     </Typography>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <div className="divide">
//                       <div className="note">
//                         <textarea
//                           rows="12"
//                           cols="21"
//                           defaultValue="Notes"
//                         ></textarea>
//                       </div>
//                       <div>
//                         <div className="date">
//                           <div>Due Date</div>
//                           <button>Today</button>
//                           <button>Tomorrow</button>
//                         </div>
//                         <div className="options">
//                           <div>Priority</div>
//                           <select>
//                             <option value="">None</option>
//                             <option value="High">High</option>
//                             <option value="Medium">Medium</option>
//                             <option value="Low">Low</option>
//                           </select>

//                           <button
//                             onClick={() =>
//                               dispatch(deleteDetailList(item.child_id))
//                             }
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </AccordionDetails>
//                 </Accordion>
//               </div>
//             ))
//           : null}

//         <div className="List-input">
//           <input
//             type="text"
//             placeholder="New task..."
//             value={inputDetail}
//             onChange={handleChange}
//             onKeyPress={handleInputKeyPress}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detail;
