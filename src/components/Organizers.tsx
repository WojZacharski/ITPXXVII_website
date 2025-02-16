import React from "react";
//@ts-ignore
//import img8_desktop from "../images/desktop_backgrounds/CT_bg.jpg";
import img8_desktop from "../images/desktop_backgrounds/organizatorzy bez napisow 2_Obszar roboczy 1.jpg";
//@ts-ignore
import img6_mobile from "../images/mobile_backgrounds/CT_mobile_fix.png";
import styled from "styled-components";

const EmptyElement = styled.div`
  width: 100%;
  height: 10rem; // Możesz dostosować wysokość
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  display: grid;
`;

const ContactBoxTitle = styled.h2`
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(5rem, 2vw, 8rem);
  text-align: center;
  line-height: 1.2;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const TextBox = styled.div`
  position: absolute;
  width: 17%;
  height: 10%;
  font-size: 1.15vw;
  line-height: 130%;
  color: #d2764a;
  text-align: center;
  align-items: center;
  display: flexbox;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Picture = styled.picture`
  position: relative;
  top: 1.75rem;
`;

const NameText = styled.span`
  font-size: 120%;
  font-weight: 600;
`;

const TextBoxLG = styled(TextBox)`
  left: 33.33%;
  transform: translate(-50%, -50%);
  top: clamp(75%, 70vw, 81.25%);
`;

const TextBoxMO = styled(TextBox)`
  left: 50%;
  transform: translate(-50%, -50%);
  top: clamp(65%, 70vw, 77.25%);
`;

const TextBoxFR = styled(TextBox)`
  left: 66.66%;
  transform: translate(-50%, -50%);
  top: clamp(75%, 70vw, 81.25%);
`;

const Organizers: React.FC = () => {
  return (
      <>
        <EmptyElement />
        <Container id="organizers">
          <Picture>
            <source srcSet={img8_desktop} media="(min-width: 769px)" />
            <source srcSet={img6_mobile} media="(max-width: 768px)" />
            <Img src={img8_desktop} alt="last page" />
          </Picture>
          <ContactBoxTitle>
            Kontakt z organizatorami
          </ContactBoxTitle>
          <TextBoxLG>
            <NameText>
              TOMASZ KOLBUSZ <br />{" "}
            </NameText>
            KOORDYNATOR DS. LOGISTYKI <br />
            881 682 816 <br />
            TOMASZ.KOLBUSZ@BEST.KRAKOW.PL <br />
          </TextBoxLG>
          <TextBoxMO>
            <NameText>
              PATRYK MOTYLSKI <br />{" "}
            </NameText>
            GŁÓWNY KOORDYNATOR <br />
            531 767 164 <br />
            PATRYK.MOTYLSKI@BEST.KRAKOW.PL <br />
          </TextBoxMO>
          <TextBoxFR>
            <NameText>
              BARTOSZ AMALIO <br />{" "}
            </NameText>
            KOORDYNATOR DS. KONTAKTU Z FIRMAMI <br />
            531 490 520 <br />
            BARTOSZ.AMALIO@BEST.KRAKOW.PL <br />
          </TextBoxFR>
        </Container>
      </>
  );
};

export default Organizers;
