import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// @ts-ignore
import itp_logo from "../images/navbar/itp-01.svg";
// @ts-ignore
import BEST_logo from "../images/navbar/BEST_black.svg";
// @ts-ignore
import fb_icon from "../images/navbar/FB_black.svg";
// @ts-ignore
import ig_icon from "../images/navbar/INSTA_black.svg";
// @ts-ignore
import li_icon from "../images/navbar/LNKDN_black.svg";

const socialLinks = {
  facebook: "https://www.facebook.com/BEST.itp",
  instagram: "https://www.instagram.com/itp_best/",
  linkedin: "https://www.linkedin.com/company/in%C5%BCynierskie-targi-pracy/",
};

const NavContainer = styled.div`
  position: relative;
  height: 60vh;
  min-height: 12em;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Nav = styled.nav`
  position: absolute;
  
  left: 6%;
  right: 6%;
  bottom: 0%;
  height: 8vh;

  min-height: 2rem;

  background-color: #e5821a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  
  border-radius: 20vh;

  a {
    text-decoration: none;
    color: #fffffa;
  }

  @media (max-width: 768px) {
    height: 4vh;
    border-radius: 0;
    left: 0;
    right: 0;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5em;
  flex-direction: inherit;
  text-align: center;
  text-transform: none;
  @media (max-width: 768px) {
    gap: 0.2em;
    width: 95%;
    height: 100%;
  }
`;

const ITPLogo = styled.img`
  position: absolute;
  width: clamp(16rem, 32vw, 24rem);
;
  left: 10%;
  user-select: none;
  @media (max-width: 768px) {
    width: clamp(8rem, 32vw, 24rem);
    top: 22%;
  }
  @media (min-width: 769px) {
    top: calc(30.5% + 0.9vw);
  }
`;

const BESTLogoContainer = styled.img`
  position: absolute;
  width: clamp(13rem, 24vw, 20rem);
  left: 70%;  /* Zmiana z 100% na 70%, aby było lepiej widoczne */
  //top: 20%; /* Ustawienie na niższą wartość */
  user-select: none;

  @media (max-width: 768px) {
    width: clamp(8rem, 24vw, 20rem);
    top: 14%;
  }

  @media (min-width: 769px) {
    top: calc(20.5% + 0.9vw);
  }
`;

const SocialsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  top: 65%;
  gap: 1rem;
  left: 43.5%;

  a {
    min-height: 2rem;
    height: 8vh;
  }

  img {
    display: block;
    height: 100%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & {
      top: 57.5%;
      width: clamp(20vw, 30vw, 50vw);
      a {
        height: 4vh;
      }
    }
  }
`;

interface ILink {
  name: String;
  path: string;
}

const links: ILink[] = [
  { name: "Strona główna", path: "/" },
  { name: "Mapa", path: "/#map" },
  { name: "Sponsorzy", path: "/#sponsors" },
  { name: "Organizatorzy", path: "/#organizers" },
  { name: "Katalog", path: "https://itp.best.krakow.pl/Katalog.pdf" },
  { name: "Oferty", path: "/offers" },
  { name: "Wyślij CV", path: "https://forms.gle/fG86afGGonoiqeAV8" },
  { name: "O Beście", path: "https://www.newsite.best.krakow.pl/" },
];

const popUpLinks: ILink[] = [
  { name: "Regulamin wydarzenia", path: "https://itp.best.krakow.pl/[ITP2024] Regulamin wydarzenia.pdf" },
  { name: "Regulaminy konkursów", path: "https://itp.best.krakow.pl/[ITP2024] Regulaminy konkursow.pdf" },
  { name: "RODO", path: "https://itp.best.krakow.pl/[ITP2024] RODO.pdf" },
];

const PopUpContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
  background-color: #fff;
  border-radius: 1vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;

  .closeButton {
    position: absolute;
    top: 3.5%;
    right: 3.5%;
    cursor: pointer;
    font-size: 2rem;
    color: #888;
    border: none;
    background: none;
    padding: 0.33em;
    z-index: 1001;
  }

  a {
    display: block;
    text-decoration: none;
    padding: 0.33em;
    font-size: clamp(1.33rem, 1.9vw, 2rem);
    flex-basis: 100%;
    align-self: center;
    white-space: nowrap;
    margin-bottom: 1rem;
    z-index: 1000;
  }`;

const LinkStyled = styled(Link)`
  font-size: clamp(0.7rem, 1.9vw, 1.9rem);
  flex-basis: auto;
  align-self: center;
  white-space: nowrap;

  @media (max-width: 769px) {
    font-size: 0.8rem;
    height: 100%;
    align-items: center;
    display: flex;
  }
`;

const Navigation: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      {showPopUp && (
        <PopUpContainer>
          <button className="closeButton" onClick={togglePopUp}>
            &times;
          </button>
          {popUpLinks.map((link, i) => (
            <Link key={i} to={link.path}>
              {link.name}
            </Link>
          ))}
        </PopUpContainer>
      )}
      <NavContainer>
        <ITPLogo src={itp_logo} alt="XXVI ITP" />
        <BESTLogoContainer src={BEST_logo} alt="BEST" />
        <SocialsContainer>
          <a href={socialLinks["facebook"]}>
            <img src={fb_icon} alt="facebook" />
          </a>
          <a href={socialLinks["instagram"]}>
            <img src={ig_icon} alt="instagram" />
          </a>
          <a href={socialLinks["linkedin"]}>
            <img src={li_icon} alt="linkedin" />
          </a>
        </SocialsContainer>

        <Nav>
          <LinkContainer className="links">
            {links.map((link, i) => (
              <LinkStyled
                to={link.path}
                key={i}>
                {link.name}
              </LinkStyled>
            ))}
            <LinkStyled
              to={"#"}
              onClick={togglePopUp}>
              Regulaminy
            </LinkStyled>
          </LinkContainer>
        </Nav>
      </NavContainer>
    </>
  );
};
export default Navigation;
