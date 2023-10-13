import React, { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Detail.css";
import { MyContext } from "../Context/Mycontext";
import { useParams } from "react-router-dom";

function Detail() {
  const { inputDetail, setInputDetail, handleInputKeyPress, array, currentColor } =
    useContext(MyContext);
  const { index } = useParams();
  const selectedArray = array[index];

  const handleInput = (e) => {
    setInputDetail(e.target.value);
  };

  return (
    <div className="Detail-page" style={{ backgroundColor: currentColor }}>
      <div className="boxex">
        {selectedArray.receivedData && selectedArray.receivedData.additionalData.length > 0
          ? selectedArray.receivedData.additionalData.map((inp, index) => {
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
                          onChange={(e) => handleInput(e, index)}
                        />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="divide">
                        <div className="note">
                          <textarea rows="12" cols="21" defaultValue="Notes"></textarea>
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
                            <button>Delete</button>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })
          : null}
        <div className="List-input">
          <input
            type="text"
            placeholder="New task..."
            value={inputDetail}
            onChange={handleInput}
            onKeyPress={(e) => handleInputKeyPress(e, index)}
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;
