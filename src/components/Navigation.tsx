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
// @ts-ignore
import burger_menu from "../images/navbar/burger-menu.svg";

const socialLinks = {
    facebook: "https://www.facebook.com/BEST.itp",
    instagram: "https://www.instagram.com/itp_best/",
    linkedin: "https://www.linkedin.com/company/in%C5%BCynierskie-targi-pracy/",
};

interface ILink {
    name: String;
    path: string;
}

const links: ILink[] = [
    { name: "Strona główna", path: "/" },
    { name: "Mapa", path: "/#map" },
    { name: "Sponsorzy", path: "/#sponsors" },
    { name: "Organizatorzy", path: "/#organizers" },
    { name: "Katalog", path: "https://itp.best.krakow.pl/[ITP2025] Katalog.pdf" },
    { name: "Oferty", path: "/offers" },
    { name: "Wyślij CV", path: "https://forms.gle/Us7y6EFSiXoRWgKq7" },
    { name: "O Beście", path: "https://www.newsite.best.krakow.pl/" },
    { name: "Harmonogram", path: "https://itp.best.krakow.pl/[ITP2025] Harmonogram wydarzenia.pdf" },
];

const popUpLinks: ILink[] = [
    { name: "Regulamin konkursów", path: "https://itp.best.krakow.pl/[ITP2025] Regulamin konkursow.pdf" },
    { name: "Regulaminy wydarzenia", path: "https://itp.best.krakow.pl/[ITP2025] Regulamin wydarzenia.pdf" },
    { name: "RODO", path: "https://itp.best.krakow.pl/[ITP2025] RODO.pdf" },
];

const NavContainer = styled.div<{ isOpen: boolean }>`
    position: relative;
    height: 200px;
    display:block;

    @media (max-width: 768px) {
        height:500px;    
        min-height:60vh;
    }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
    position: absolute;

    left: 6%;
    right: 6%;
    bottom: 0%;
    height: 50px;

    background-color: #e5821a;
    left: 0;
    right: 0;
    border-radius: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    a {
        text-decoration: none;
        color: #fffffa;
    }

    @media (max-width: 768px) {
        height: auto;
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        flex-direction: column;
        align-items: center;
        position: relative; 
        margin-top: 100px; // Dodanie marginesu
        top: 40%;
        
        
        a {
            // font-size: 10;
            text-decoration: none;
            color: #fffffa;
        }
    }
`;

const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2.5em;
    flex-direction: inherit;
    text-align: center;
    text-transform: none;
    
    @media (max-width: 768px) {
        gap: 0;
        width: 100%;
        height: auto;
        flex-direction: column;
        z-index: 100;
    }
`;

const BlockContainer = styled.div`
    position:absolute;
    width:20%;
    height:50%;
    min-height:1px;
    min-width:300px;
    left:10%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
    transform:translateY(-50%);
    top:40%;

    @media (max-width: 768px) {
        width:100%;
        height:25%;
        left:0;
        right:0;
        top: 0%;
        justify-content:center;
    }
`;

const ITPBlock = styled.div`
    position:relative;
    width:auto;
`;

const ITPLogo = styled.img`
    max-width:100%;
    vertical-align:middle;
`;

const BESTBlock = styled.div`
    position:relative;
    width:160px;
`;

const BESTLogo = styled.img`
    max-width:100%;
    vertical-align:middle;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
`;

const SocialsContainer = styled.div`
    position: absolute;
    width:10%;
    min-width:200px;
    height:50%;
    min-height:1px;
    right:10%;
    top:40%;
    transform:translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;

    a {
        min-height:40px;
        height:20%;
        max-height:60px;
    }

    img {
        display: block;
        height: 100%;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        & {
            //position: relative;
            width:100%;
            height:25%;
            right:auto;
            transform:transformX(-50%);
            top:25%;
            // margin-top: 20px;
            min-width:unset;
            justify-content:center;
            z-index: 100;
            
            a {
                height: 8vh;
            }
        }
    }
`;

const PopUpContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5rem;
    background-color: #fff;
    border-radius: 1vh;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
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
        //font-size: clamp(1.33rem, 1.9vw, 2rem);
        font-size: 6vw;
        flex-basis: 100%;
        align-self: center;
        white-space: nowrap;
        margin: 1rem;
        z-index: 1000;
    }
`;

const LinkStyled = styled(Link)`
    font-size: clamp(0.7rem, 2.2vw, 1.9rem);
    flex-basis: auto;
    align-self: center;
    white-space: nowrap;
    flex: 0 0 auto; // Dodano flex-basis


    @media (max-width: 769px) {
        font-size: 1.2rem;
        height: 100%;
        align-items: center;
        display: flex;
        padding-top: 1vh;
        padding-bottom: 0.5vh;
    }
`;

const BurgerButton = styled.button`
    display: none; // Domyślnie ukryty na desktopie

    @media (max-width: 768px) {
        position: absolute; 
        top: 20vh;
        display: block; 
        background: none;
        border: none;
        cursor: pointer;  
        z-index: 100;
  }
`;

const Navigation: React.FC = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const [isOpen, setIsOpen] = useState(true);

    const togglePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        console.log(isOpen);
    };

    return (
        <>
            {showPopUp && (
                <PopUpContainer>
                    <button className="closeButton" onClick={togglePopUp}>
                        &times;
                    </button>
                    {popUpLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            target="_blank">
                            {link.name}
                        </Link>
                    ))}
                </PopUpContainer>
            )}
            <NavContainer isOpen={isOpen}>
                <BlockContainer>
                    <ITPBlock>
                        <ITPLogo src={itp_logo} alt="XXVII ITP" />
                    </ITPBlock>
                    <BESTBlock>
                        <a href="https://www.newsite.best.krakow.pl" target="_blank" rel="noopener noreferrer">
                            <BESTLogo src={BEST_logo} alt="BEST" />
                        </a>
                    </BESTBlock>
                </BlockContainer>
                <SocialsContainer>
                    <a href={socialLinks["facebook"]} target="_blank" rel="noopener noreferrer">
                        <img src={fb_icon} alt="facebook" />
                    </a>
                    <a href={socialLinks["instagram"]} target="_blank" rel="noopener noreferrer">
                        <img src={ig_icon} alt="instagram" />
                    </a>
                    <a href={socialLinks["linkedin"]} target="_blank" rel="noopener noreferrer">
                        <img src={li_icon} alt="linkedin" />
                    </a>
                </SocialsContainer>

                <Nav isOpen={isOpen} key={isOpen ? "open" : "closed"}>
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