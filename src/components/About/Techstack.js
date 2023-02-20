import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3Full,
  DiHtml5,DiMysql,DiBootstrap,DiGit
} from "react-icons/di";
import {
  SiFirebase,SiNextdotjs,
  SiPostgresql,SiCsharp,SiTypescript,SiN
  
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full/>
        <h3>Css</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
        <h3>HTML</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3>JavaScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h3>Bootstrap</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>Node JS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h3>TypeScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>React</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3>MongoDB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h3>Next</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h3>FireBase</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h3>PostgreSQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h3>MYSQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <h3>C#</h3>
      </Col>
     
    </Row>
  );
}

export default Techstack;
