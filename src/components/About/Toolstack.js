import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiWindows
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h3>Linux</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3>Visual Studio Code</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h3>Postman</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h3>Windows</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h3>Heroku</h3>
      </Col>
    </Row>
  );
}

export default Toolstack;
