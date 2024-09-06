import { useState } from "react";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 240px;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);

  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(0)" : "translateY(-100%)"};

    z-index: 10;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
  }
`;

const NavBar = ({ handleAccess, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <NavBarToggle onClick={toggleNavBar}>
        <FaBars />
      </NavBarToggle>

      <NavBarContainer $isOpen={isOpen} onClick={toggleNavBar}>
        <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
          <FaQrcode />
          QR Code Generator
        </StyledLink>
        <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
          <FaNetworkWired />
          IP Address Finder
        </StyledLink>
        <StyledLink onClick={() => handleAccess(2, "MovieSearch")}>
          <FaSearch />
          Movie Search
        </StyledLink>
        <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
          <FaTasks />
          Todo App
        </StyledLink>
        <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
          <FaRegQuestionCircle />
          Quiz App
        </StyledLink>
        <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
          <FaGlobeAmericas />
          Translator
        </StyledLink>
        <button
          onClick={logout}
          style={{
            marginTop: "20px",
            color: "white",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          Logout
        </button>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
