import React from "react";
import styled from "styled-components";
import Gears from './Gears';

const Container = styled.div`
  position: relative;
  display: grid;
  top: 2rem;
  aspect-ratio:1;
  //height: 300vh;
`;

const H2 = styled.h2`
  font-size: 7rem;
  font-weight: bold;
  color: #000;
`;

const H3 = styled.h3`
  font-size: 3rem;
  color: #D2764A;
  font-weight: bold;
`;

const TextBox1 = styled.div`
  width: 38%;
  height: auto;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);

  position: absolute;
  text-align: justify;
  font-size: 2.32vw;
  color: #d2764a;

  @media (max-width: 768px) {
    width: 80%;
    top: clamp(5em, 50vh, 4rem);
    height: clamp(7em, 20vh, 6rem);
    font-size: 3vw;
  };
`;

const TextBox2 = styled(TextBox1)`
  height: 5%;
  top: 33%;
  @media (max-width: 768px) {
    top: clamp(9em, 60vh, 8rem);
    height: clamp(10em, 40vh, 9rem);
  }
`;

const TextBox3 = styled(TextBox1)`
  top: 40%;
  @media (max-width: 768px) {
    height: 8.4%;
    top: 38%;
  }
`;

const TextBox4 = styled(TextBox3)`
  top: 85%;
  height: 6.5%;
  @media (max-width: 768px) {
    height: 6%;
    top: 89%;
    left: 10%;
  }
`;

const HeroTextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  width: clamp(6rem, 80vw, 36rem);
  text-align: center;
  position: relative;
  text-align: center;
  //margin-bottom: 1.5rem;

  //tło
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 400%;
    height: 100%;
    background-color: #fce8cf; // Kolor tła
    z-index: -1;  // Umieszczenie w tle
    border-radius: 5px;
  }
`;



const TextPage: React.FC = () => {
  return (
    <>
      <Container>
        <HeroTextContainer>
          <H2>19 MARZEC 2025</H2>
          <H3>Stadion Miejski im. Henryka Reymana</H3>
          <H3>10:00-16:00</H3>
        </HeroTextContainer>

        <TextBox1>
          Inżynierskie Targi Pracy organizowane przez Stowarzyszenie Studentów BEST AGH Kraków to projekt, który już od 27 lat łączy środowisko akademickie i biznesowe. <br />
          Naszym głównym celem jest zapewnienie wszystkim uczestnikom Targów, jak najwyższej jakości wydarzenia oraz pełnej satysfakcji.
        </TextBox1>

        <TextBox3>
          W dniu 19 marca spotkają się pracodawcy szukający
          przyszłych pracowników oraz studenci starający się
          o wymarzoną pracę lub staż.
          Na naszej stronie internetowej znajdziecie informacje
          o naszych wystawcach i ich ofertach pracy. <br />
          Istnieje również możliwość przesłania swojego CV do naszej bazy,
          dzięki której nasi wystawcy poznają Was jeszcze lepiej
          pod kątem waszego doświadczenia i umiejętności.
        </TextBox3>

        <Gears>
        </Gears>
      </Container>
    </>
  );
};

export default TextPage;
