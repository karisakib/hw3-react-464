import React from "react";
import { Row } from "react-bootstrap";

const PadInput = (props) =>{

    return(
        <Row className="justify-content-center">
          <div className="padinput">
            {props.list &&
              props.list.map((item, index) => (
                <li
                  onDragStart={(e) => props.onDragStart(e, index)}
                  key={index}
                  className="input_one"
                  id={index}
                  draggable
                >
                  {item}
                </li>
              ))}{" "}
          </div>
        </Row>
    )
}
export default PadInput