import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>  
            Hi everyone, I'm <span className="purple"> Jeffry Pascual Suero Camilo </span>
            I am passionate about technology and programming, with experience in various languages ​​and tools. working on projects of all kinds, from web applications to desktop software.
          </p>
         
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
