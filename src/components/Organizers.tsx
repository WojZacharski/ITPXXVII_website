import React, {useEffect, useState} from "react";
//@ts-ignore
import img8_desktop from "../images/desktop_backgrounds/organizatorzy bez napisow 2_Obszar roboczy 1.jpg";
//@ts-ignore
import img6_mobile from "../images/mobile_backgrounds/organizatorzy grafika z napisami_Obszar roboczy 1.jpg";
import styled from "styled-components";

const EmptyElement = styled.div`
  width: 100%;
  height: 6vh;
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
  top: 15%;
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
  width: 22%;
  height: auto;
  font-size: 1.15vw;
  line-height: 130%;
  color: #d2764a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Picture = styled.picture`
  position: relative;
  top: 1.75rem;
`;

const NameText = styled.div`
  font-size: 3vw;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1vh;
`;

const DescText = styled.div`
  font-size: 1.5vw;
  font-weight: 600;
  color: #d2764a;
  text-align: center;
  line-height: 1.4;
`;

const TextBoxLG = styled(TextBox)`
  left: 20%;
  transform: translate(-50%, -50%);
  top: clamp(60%, 65vw, 85%);
`;

const TextBoxMO = styled(TextBox)`
  left: 50%;
  transform: translate(-50%, -50%);
  top: clamp(60%, 65vw, 85%);
`;

const TextBoxFR = styled(TextBox)`
  left: 80%;
  transform: translate(-50%, -50%);
  top: clamp(60%, 85vw, 85%);
`;

// stylizacja stopki
const FooterContainer = styled.div`
  width: 100%;
  background-color: #c8beb3; // Kolor tła
  color: white; //Kolor tekstu
  text-align: center;
  font-size: clamp(1rem, 2vw, 2rem);
  padding: 2rem 0;
  font-weight: 400;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Organizers: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(window.innerWidth <= 768 ? img6_mobile : img8_desktop);

  useEffect(() => {
    const handleResize = () => {
      setSelectedImage(window.innerWidth <= 768 ? img6_mobile : img8_desktop);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
      <>
        <EmptyElement />
        <Container id="organizers">
          <Picture>
            <Img src={selectedImage} alt="last page" />
          </Picture>

          <ContactBoxTitle>
            Kontakt z organizatorami
          </ContactBoxTitle>
          <TextBoxLG>
            <NameText>TOMASZ KOLBUSZ</NameText>
            <DescText>
              KOORDYNATOR DS. LOGISTYKI <br />
              881 682 816 <br />
              TOMASZ.KOLBUSZ@BEST.KRAKOW.PL
            </DescText>
          </TextBoxLG>
          <TextBoxMO>
            <NameText>PATRYK MOTYLSKI</NameText>
            <DescText>
              GŁÓWNY KOORDYNATOR <br />
              531 767 164 <br />
              PATRYK.MOTYLSKI@BEST.KRAKOW.PL
            </DescText>
          </TextBoxMO>
          <TextBoxFR>
            <NameText>BARTOSZ AMALIO</NameText>
            <DescText>
              KOORDYNATOR DS. KONTAKTU Z FIRMAMI <br />
              531 490 520 <br />
              BARTOSZ.AMALIO@BEST.KRAKOW.PL
            </DescText>
          </TextBoxFR>
        </Container>

        <FooterContainer>
          STOWARZYSZENIE STUDENTÓW BEST AGH KRAKÓW <br />
          DS 1 "ALFA" BLOK 1 <br />
          UL. REYMONTA 17/E14 <br />
          30-059 KRAKÓW
        </FooterContainer>
      </>
  );
};

export default Organizers;
