import React, { useState, useRef } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import DesignPad from './DesignPad'

const DesignBoard = (props) => {
  return(
      <React.Fragment>
         <Row
          className="justify-content-center my-5"
          onDragOver={(e) => props.onDragOver(e)}
          onDragEnter={(e) => props.onDragEnter(e)}
        >
          <Col>
            {" "}
            <DesignPad id="designPad1"/>
          </Col>
          <Col>
            {" "}
            <DesignPad id="designPad2"/>

          </Col>
        </Row>
    </React.Fragment>
  );
};
export default DesignBoard;
