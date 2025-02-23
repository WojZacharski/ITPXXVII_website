import React from "react";
import styled from "styled-components";
import Gears from './Gears';
import GearsMobile from "./GearsMobile";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
    min-height: 130vh;
  padding-top: 2rem;
    @media (max-width: 768px){
        min-height: auto;
        height: auto;
        padding-bottom: 3rem;
    }
`;

const DesktopGears = styled.div`
    position: absolute;
    width: 100%;
    top: 20vh;
    left: 0;
    z-index: -1;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const MobileGears = styled.div`
    display: flex;
    justify-content: center; /* Wyśrodkowanie poziome */
    align-items: center; /* Wyśrodkowanie pionowe */
    width: 100%; /* Pełna szerokość */
    max-width: 90vw; /* Ograniczenie szerokości */
    margin: 2rem auto; /* Centrowanie i dodanie marginesu */
    right: -50%;
    //z-index: -1;
    //overflow: hidden; /* Zapobieganie overflow */

    @media (min-width: 768px) {
        display: none;
    }
`;


const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: clamp(8rem, 80vw, 40rem);
  margin-top: 2rem;
  position: relative;
    padding: 1rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 80%;
    background-color: #fce8cf;
    z-index: -1;
    border-radius: 5px;
    padding: 1rem;
  }
    @media (max-width: 768px) {
        //width: 50%;
        margin-top: 1rem;

        &::before {
            padding: 1rem 0;
        }
    }
`;

const H2 = styled.h2`
  font-size: clamp(2rem, 5vw, 7rem);
    top: 2vh;
  font-weight: bold;
  color: #000;
    @media (max-width: 768px){
        
    }
`;

const H3 = styled.h3`
  font-size: clamp(1.5rem, 3vw, 3rem);
    top: 10%;
  color: #D2764A;
  font-weight: bold;
`;


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    text-align: center;
    gap: 3rem;
    margin-top: 2rem;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

const TextBox = styled.div`
  width: clamp(50%, 70vw, 38%);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #d2764a;
  text-align: justify;

    @media (max-width: 768px){
        width: 80vw;
    }
`;



const TextPage: React.FC = () => {
    return (
        <Container>
            <HeroTextContainer>
                <H2>19 MARZEC 2025</H2>
                <H3>Stadion Miejski im. Henryka Reymana</H3>
                <H3>10:00-16:00</H3>
            </HeroTextContainer>

            <TextContainer>
                <TextBox>
                    Inżynierskie Targi Pracy organizowane przez Stowarzyszenie Studentów BEST AGH Kraków to projekt, który już od 27 lat łączy środowisko akademickie i biznesowe. <br />
                    Naszym głównym celem jest zapewnienie wszystkim uczestnikom Targów jak najwyższej jakości wydarzenia oraz pełnej satysfakcji.
                </TextBox>
                {/* Zębatki na urządzeniach mobilnych */}
                <MobileGears>
                    <GearsMobile />
                </MobileGears>
                <TextBox>
                    W dniu 19 marca spotkają się pracodawcy szukający przyszłych pracowników oraz studenci starający się o wymarzoną pracę lub staż.
                    Na naszej stronie internetowej znajdziecie informacje o naszych wystawcach i ich ofertach pracy. <br />
                    Istnieje również możliwość przesłania swojego CV do naszej bazy,
                    dzięki której nasi wystawcy poznają Was jeszcze lepiej pod kątem Waszego doświadczenia i umiejętności.
                </TextBox>
            </TextContainer>

            {/* Zębatki na komputerach */}
            <DesktopGears>
                <Gears />
            </DesktopGears>


        </Container>
    );
};

export default TextPage;