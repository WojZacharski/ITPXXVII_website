import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import useMediaQuery from "../utils/UseMediaQuery";
import PartnerGears from "./PartnerGears";

import background from "../images/desktop_backgrounds/buildings_bg.svg";
import crane_left from "../images/desktop_backgrounds/crane-left.svg";
import crane_right from "../images/desktop_backgrounds/crane-right.svg";
import crane_left_mobile from "../images/mobile_backgrounds/crane-left-mobile-cropped.svg";
import crane_right_mobile from "../images/mobile_backgrounds/crane-right-mobile-cropped.svg";
import useResponsiveScroll from "./SponsorsScroll";


function importAll(r: any) {
  return r.keys().map(r);
}

const imagesDesktop = importAll(
    require.context("../images/desktop_backgrounds", false, /\.(png|jpe?g|svg)$/)
);
const imagesMobile = importAll(
    require.context("../images/mobile_backgrounds", false, /\.(png|jpe?g|svg)$/)
);
const logos = importAll(
    require.context("../images/logos", false, /\.(png|jpe?g|svg)$/)
);

// PANELS

// Style dla tła
const Background = styled.div<{ isFixed: boolean; topOffset: number }>`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed, topOffset }) => (isFixed ? "0px" : `${topOffset}px`)};
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;

  @media (max-width: 768px) {
    background-size: contain; 
    background-position: top center; 
    //height: auto; 
  }
`;


const ParentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  
  @media (max-width: 768px) {
    min-height: auto;
    height: auto;
    //padding: 0 1rem;
  }
`;


const ChildDiv = styled.div`
  flex: 1; 
`;

const CenterDiv = styled(ChildDiv)`
  position: relative;
  padding: 0 0.5rem 0 0.5rem;
  display:grid;
  grid-template-rows: auto 1fr;

  @media (max-width: 768px) {
    padding: 0; 
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


const CraneLeft = styled.img<{ isFixed: boolean; reachedEnd: boolean; topOffset: number }>`
  position: ${({ isFixed, reachedEnd }) => (reachedEnd ? "absolute" : isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed, reachedEnd, topOffset }) =>
      reachedEnd ? `calc(100% - 50vh)` : isFixed ? "3.5vh" : `${topOffset}px`};
  left: 5vw;
  width: clamp(25vw, 40vw, 50vw);
  height: auto;
  z-index: 2;
  object-fit: cover;
  max-width: 100%;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CraneRight = styled.img<{ isFixed: boolean; reachedEnd: boolean; topOffset: number }>`
  position: ${({ isFixed, reachedEnd }) => (reachedEnd ? "absolute" : isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed, reachedEnd, topOffset }) =>
    reachedEnd ? `calc(100% - 50vh)` : isFixed ? "3vh" : `${topOffset}px`};
  right: 5vw;
  width: clamp(25vw, 40vw, 50vw);
  height: auto;
  z-index: 2;
  object-fit: cover;
  max-width: 100%;
  
  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    display: none;
    z-index: -1;
  }
`;

const CraneRightMobile = styled.img<{ isFixed: boolean; reachedEnd: boolean; topOffset: number }>`
  position: ${({ isFixed, reachedEnd }) => (reachedEnd ? "absolute" : isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed, reachedEnd, topOffset }) =>
      reachedEnd ? `calc(100% - 50vh)` : isFixed ? "3vh" : `calc(${topOffset}px + 3vh)`};
  right: 0; /* Wyrównanie do prawej krawędzi */
  max-width: 100%; /* Zapobieganie wychodzeniu poza ekran */
  width: clamp(25vw, 47vw, 50vw);
  height: auto;
  z-index: 2;
  object-fit: cover;
  //overflow: hidden; 

  @media (min-width: 769px) {
    display: none;
  }
`;

const CraneLeftMobile = styled.img<{ isFixed: boolean; reachedEnd: boolean; topOffset: number }>`
  position: ${({ isFixed, reachedEnd }) => (reachedEnd ? "absolute" : isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed, reachedEnd, topOffset }) =>
    reachedEnd ? `calc(100% - 40vh)` : isFixed ? "3vh" : `calc(${topOffset}px + 3vh)`};
  left: 0;
  width: clamp(25vw, 47vw, 50vw);
  height: auto;
  z-index: 2;
  object-fit: cover;
  max-width: 100%;
  
  @media (min-width: 769px) {
    display: none;
  }

`;
const RightDiv = styled(ChildDiv)`

`;

const LeftDiv = styled(ChildDiv)`
`;

const Card = styled.div<{ isFixed: boolean; reachedEnd: boolean }>`
  width: 90vw;
  max-width: 600px;
  height: clamp(20vh, 50vh, 70vh); // Skaluje się do ekranu
  background: #fffffa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${({ isFixed, reachedEnd }) => (reachedEnd ? 'relative' : isFixed ? 'sticky' : 'static')};
  top: ${({ isFixed, reachedEnd }) => (reachedEnd ? '30vh' : '23vh')};
  border: solid 2px black;
  z-index: 3;
  transition: top 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 70vw;  
    max-width: 500px;
    height: clamp(15vh, 20vh, 40vh);
    top: 15vh; 
  }
  
  @media (max-width: 768px) and (orientation: landscape) {
    width: 70vw;
    max-width: 500px;
    height: clamp(15vh, 40vh, 70vh);
    top: 15vh;
  }
`;
const EmptyCard = styled.div`
  height: 50vh;
  display:flex;
  flex-direction: column;
  position:sticky;
  //border: solid 2px black;

  @media (max-width: 768px) {
    height:clamp(10vh, 20vh, 25vh);
  } ;
`;

const EmptyCardLast = styled.div<{ isFixed: boolean; reachedEnd: boolean }>`
  height: 17vh;
  background: none;
  display: flex;
  flex-direction: column;
  position: ${({ isFixed, reachedEnd }) => (reachedEnd ? "relative" : "sticky")};
  top: ${({ isFixed, reachedEnd }) => (reachedEnd ? "auto" : "10rem")};
  //border: solid 2px black;
  z-index: 3;
  //margin-bottom: 10rem;

  @media (max-width: 768px) {
    height: clamp(18em, 50vw, 60vh);
    display: none
  }
`;

const Ground = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vh;
  background: #fce8cf;
  z-index: 1;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;



// CONTAINER
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 5vh;
  
  @media (max-width: 768px) {
    min-height: auto;
    height: auto;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    min-height: 95vh; 
    //padding-bottom: 5vh; 
  }
`;

const SponsorsPanel = styled.div`
height: 100%;
box-sizing: border-box;
padding: 10%;
display: grid;
grid-template-columns: repeat(3, calc(1/3 * 100%));
align-content: center;
justify-content: space-around;
gap: 2.5%;

@media (max-width: 768px) {
  ggrid-template-columns: repeat(3, calc(1/3 * 100%));
  padding: 15%
}

@media (max-width: 768px) and (orientation: landscape) {
  ggrid-template-columns: repeat(3, calc(1/3 * 100%));
  padding: 27%
}
  `;

// ELEMENTS

const PartnershipText = styled.span`
  font-size: 2.2vw;
  font-weight: 600;
  grid-column: span 3;
  justify-self: center;
  @media (max-width: 768px) {
    font-size: clamp(1rem, 5vw, 1.5rem);
    margin-top: 0.4rem; 
    padding: 0 1rem; 
  } ;
`;

const CardHeader = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-size: 2.2vw;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 5vw, 1.5rem);
    top: 5px; 
  }
`;

const SponsorImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 3/2;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-width: 80%;  
    height: auto;  
  }
`;

const SabreText = styled.span`
  font-size: 2.2vw;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 2rem;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 25%;
  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 5vw, 1.2rem);
    text-align:center;
  } ;
`;

const SabreImg = styled.img`
  width: 50%;
  display: block;
  height: 100%;
  margin: 0 auto;
`;


const SponsorsText = styled(SabreText)`
  font-size: 4vw;
  margin-bottom: 1rem;
  left: 50%;
  top: 1%;
  font-weight: bold;
  color: #ee8b10;
  white-space: nowrap;
  text-align: center;
  
  @media (max-width: 768px) {
    top: 1%;
    font-size: 4vw;
    margin-bottom: 1rem;
    left: 50%;
    top: 1%;
    font-weight: bold;
    color: #ee8b10;
    text-align: center;
    width: 100%; /* Upewnienie się, że tekst dostosowuje się do szerokości */
    max-width: 90vw; /* Ograniczenie szerokości na większych ekranach */
    white-space: normal; /* Pozwala tekstowi przechodzić do nowej linii */
    word-wrap: break-word; /* Zapewnia łamanie długich słów */
    overflow-wrap: break-word; /* Alternatywnie, jeśli \`word-wrap\` nie działa */
    padding: 0 1rem; /* Dodatkowy padding dla bezpieczeństwa */
    @media (max-width: 768px) {
      top: 1%;
      font-size: clamp(1rem, 6vw, 1.5rem); /* Dynamiczna czcionka */
      max-width: 80vw; /* Ograniczenie szerokości na mniejszych ekranach */
      margin-top: 0.5rem;
    }
    font-size: clamp(1rem, 6vw, 2rem); /* Dostosowanie do mobilnych ekranów */
    max-width: 80vw; /* Mniejsze szerokości na telefonach */
    margin-top: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
`;

const Link = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;





const Sponsors: React.FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { isFixed, topOffset, reachedEnd, isFixedCard, isVisibleGround } = useResponsiveScroll(parentRef);
  console.log("Załadowane logotypy:", logos);

  return (
      <Container id="sponsors">
        <SponsorsText style={{marginBottom: '0.5rem' }}>Nasi Partnerzy</SponsorsText>
        <ParentDiv ref={parentRef}>
          <Background isFixed={isFixed} topOffset={topOffset}  />
          <LeftDiv>
            <CraneLeft src={crane_left} isFixed={isFixed} reachedEnd={reachedEnd} topOffset={topOffset} />
          </LeftDiv>

          <RightDiv>
            <CraneRight src={crane_right} isFixed={isFixed} reachedEnd={reachedEnd} topOffset={topOffset} />
            <Ground isVisible={isVisibleGround}> </Ground>
          </RightDiv>

          <CraneRightMobile src={crane_right_mobile} isFixed={isFixed} reachedEnd={reachedEnd} topOffset={topOffset} />
          <CraneLeftMobile  src={crane_left_mobile} isFixed={isFixed} reachedEnd={reachedEnd} topOffset={topOffset} />

          <CenterDiv>
            <EmptyCard></EmptyCard>

            <Card isFixed={isFixedCard} reachedEnd={reachedEnd} >
                <CardHeader>Sponsor Główny</CardHeader>
                 <Link href="https://www.sabre.com/locations/poland/" target="_blank" rel="noopener noreferrer"/>
                <Image src={logos[0].default} alt={"Sabre"} />
            </Card>
            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SponsorsPanel>
                <CardHeader>Sponsorzy</CardHeader>

                <Link href="https://www.pega.com/" target="_blank" rel="noopener noreferrer">
                <Image src={logos[2].default} alt={"Pega"} />
                </Link>

                <Link href="https://www.mars.com/" target="_blank" rel="noopener noreferrer">
                <Image src={logos[3].default} alt={"Mars"} />
                </Link>

                <Link href="hhttps://www.aptiv.com" target="_blank" rel="noopener noreferrer">
                <Image src={logos[4].default} alt={"Aptiv"} />
                </Link>

                <Link href="https://www.ibm.com/blogs/ibm-poland/" target="_blank" rel="noopener noreferrer">
                <Image src={logos[16].default} alt={"IBM"} />
                </Link>

                <Link href="https://kza.krakow.pl" target="_blank" rel="noopener noreferrer">
                <Image src={logos[28].default} alt={"KZA"} />
                </Link>

                <Link href="https://www.woodward.com/" target="_blank" rel="noopener noreferrer">
                <Image src={logos[1].default} alt={"Woodward"} />
                </Link>

              </SponsorsPanel>
            </Card>
            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <CardHeader>Partner Strefy Studenta</CardHeader>

              <Link href="https://www.gehealthcare.pl" target="_blank" rel="noopener noreferrer">
                <Image
                    src={logos[7].default} alt={"GEHealthCare"} />
              </Link>
            </Card>

            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SponsorsPanel>
                <CardHeader>Patroni medialni</CardHeader>

                <Link href="https://radio17.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[6].default} alt={"Radio17"} />
                </Link>

                <Link href="https://www.podajdalej.info.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[10].default} alt={"PodajDalej"} />
                </Link>

                <Link href="https://www.dlastudenta.pl.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[11].default} alt={"dlaStudenta"} />
                </Link>

                <Link target="_blank" rel="noopener noreferrer">
                  <Image src={logos[33].default} alt={"BLANK"} />
                </Link>

                <Link href="https://care-er.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[30].default} alt={"CareEr"} />
                </Link>



              </SponsorsPanel>
            </Card>

            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SponsorsPanel>
                <CardHeader>Patroni medialni</CardHeader>

                <Link href="https://www.fxmag.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[14].default} alt={"Fxmag"} />
                </Link>

                <Link href="https://krakow.tvp.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[31].default} alt={"TVP3"} />
                </Link>

                <Link href="https://www.eurostudent.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[34].default} alt={"Eurostudent"} />
                </Link>

              </SponsorsPanel>
            </Card>

            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SponsorsPanel>
                <CardHeader>Partnerzy medialni</CardHeader>

                <Link href="https://www.facebook.com/AllInUJ/?locale=pl_PL" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[22].default} alt={"AllInUJ"} />
                </Link>


                <Link href="https://perspektywy.pl/portal/" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[27].default} alt={"Perpsektywy"} />
                </Link>

                <Link href="https://podprad.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[29].default} alt={"PodPrad"} />
                </Link>

                <Link target="_blank" rel="noopener noreferrer">
                  <Image src={logos[33].default} alt={"BLANK"} />
                </Link>

                <Link href="https://bis.agh.edu.pl" target="_blank" rel="noopener noreferrer">
                  <Image src={logos[32].default} alt={"BIS"} />
                </Link>


              </SponsorsPanel>
            </Card>
            <EmptyCardLast isFixed={isFixedCard} reachedEnd={reachedEnd}></EmptyCardLast>
          </CenterDiv>


        </ParentDiv>
      </Container>

  );
};

export default Sponsors;