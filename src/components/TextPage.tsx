import React from "react";
import styled from "styled-components";
import Gears from './Gears';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: clamp(8rem, 75vw, 40rem);
  margin-top: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 50%;
    transform: translateX(-50%);
    width: 300%;
    height: 100%;
    background-color: #fce8cf;
    z-index: -1;
    border-radius: 5px;
    padding: 1rem;
  }
`;

const H2 = styled.h2`
  font-size: clamp(2rem, 5vw, 7rem);
    top: 2vh;
  font-weight: bold;
  color: #000;
`;

const H3 = styled.h3`
  font-size: clamp(1.5rem, 3vw, 3rem);
    top: 10%;
  color: #D2764A;
  font-weight: bold;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
    top: 40vh; 
  max-width: 1200px;
  text-align: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const TextBox = styled.div`
  width: clamp(50%, 70vw, 38%);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #d2764a;
  text-align: justify;
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

                <TextBox>
                    W dniu 19 marca spotkają się pracodawcy szukający przyszłych pracowników oraz studenci starający się o wymarzoną pracę lub staż.
                    Na naszej stronie internetowej znajdziecie informacje o naszych wystawcach i ich ofertach pracy. <br />
                    Istnieje również możliwość przesłania swojego CV do naszej bazy,
                    dzięki której nasi wystawcy poznają Was jeszcze lepiej pod kątem Waszego doświadczenia i umiejętności.
                </TextBox>
            </TextContainer>

            <Gears />
        </Container>
    );
};

export default TextPage;
