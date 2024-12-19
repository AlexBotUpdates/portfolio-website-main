import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <StyledWrapper>
        <div className="main">
          <div className="up">
            <a 
              href="mailto:aryanchavan046@gmail.com"
              className="card1"
            >
              <MdOutlineEmail size={30} className="icon email" />
            </a>
            <a 
              href="https://linkedin.com/in/aryan-chavan-2111a033b"
              target="_blank"
              rel="noopener noreferrer" 
              className="card2"
            >
              <CiLinkedin size={30} className="icon linkedin" />
            </a>
          </div>
          <div className="down">
            <a 
              href="https://instagram.com/damnitsaryan"
              target="_blank"
              rel="noopener noreferrer"
              className="card3"
            >
              <FaInstagram size={30} className="icon instagram" />
            </a>
            <a 
              href="https://github.com/AlexBotUpdates"
              target="_blank"
              rel="noopener noreferrer"
              className="card4"
            >
              <FaGithub size={30} className="icon github" />
            </a>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .up {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .down {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .card1, .card2, .card3, .card4 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card1 {
    border-radius: 90px 5px 5px 5px;
  }

  .card2 {
    border-radius: 5px 90px 5px 5px;
  }

  .card3 {
    border-radius: 5px 5px 5px 90px;
  }

  .card4 {
    border-radius: 5px 5px 90px 5px;
  }

  .icon {
    color: #465697;
  }

  .email {
    color: #DB4437;
  }

  .linkedin {
    color: #0077B5;
  }

  .instagram {
    color: #E4405F;
  }

  .github {
    color: #171515;
  }

  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #DB4437;
  }

  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #0077B5;
  }

  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #E4405F;
  }

  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #171515;
  }

  .card1:hover .icon,
  .card2:hover .icon,
  .card3:hover .icon,
  .card4:hover .icon {
    color: white;
  }
`;

export default Footer;
