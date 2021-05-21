import React, { useState, useRef } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import PadInput from "./PadInput";
import DesignBoard from "./DesignBoard";

const DesignContainer = () => {
  const draggingItem = useRef();
  const [list] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);
  const [edit, setEdit] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, position) => {
    if (edit == true) {
      draggingItem.current = position;
      localStorage.setItem("id", position);
    } else return false;
  };

  const handleDragEnter = (e) => {
    if (edit == true) {
      var data = localStorage.getItem("id");
      e.target.appendChild(document.getElementById(data));
      localStorage.clear();
      var d = document.getElementById(data);
      d.className = d.className + " padinput-afterDroped";
    } else return false;
  };

  return (
    <React.Fragment>
      <Row className="text-center m-5">
        <Col>
          <h1 className="text-center designPadText">DESIGN PAD</h1>
        </Col>
        <Col>
          <button
            onClick={(e) => setEdit(!edit)}
            className={edit == false ? "edit-button" : "edit-button-clicked"}
          >
            Edit <FaRegEdit className="mb-2"/>
          </button>
        </Col>
      </Row>
      <Container>
        <PadInput list={list} onDragStart={handleDragStart} />
        <DesignBoard
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
        />
      </Container>
    </React.Fragment>
  );
};
export default DesignContainer;
