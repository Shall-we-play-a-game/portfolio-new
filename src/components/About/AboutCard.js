import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className='purple'>Ibrahim Khan </span>
            from <span className='purple'> Solapur, India.</span>
            <br />
            I am currently Looking for opportunites to Explore
            <br />
            I have completed Masters of Computer Application (MCA) at AKIMSS
            Bharati Vidhyapeeth Deemed University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Cricket
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good
            Programers writ code that Humans can understand!"{" "}
          </p>
          <footer className='blockquote-footer'>Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
