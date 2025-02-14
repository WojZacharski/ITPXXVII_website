import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import useMediaQuery from "../utils/UseMediaQuery";
import PartnerGears from "./PartnerGears";

import background from "../images/desktop_backgrounds/buildings_bg.svg";
import crane_left from "../images/desktop_backgrounds/crane-left.svg";
import crane_right from "../images/desktop_backgrounds/crane-right.svg";

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
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  //transition: top 0.3s ease; /* Dodanie płynnego przejścia dla tła */
`;

const ParentDiv = styled.div`
  margin-top: clamp(3rem, 10vw, 12em);
  width: 100%;
  display: flex;
  position: relative;
  //height: auto;
  //margin-bottom: 20rem; // Dodajemy margines dolny (dostosuj wartość)
  
`;

const ChildDiv = styled.div`
  flex: 1; 
`;

const CenterDiv = styled(ChildDiv)`
  position: relative;
  //top: 5rem;
  padding: 0 0.5rem 0 0.5rem;
  display:grid;
  grid-template-rows: auto 1fr;
  //height: auto;
`;

const CraneLeft = styled.img<{ isFixed: boolean; topOffset: number }>`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed, topOffset }) => (isFixed ? "0px" : `${topOffset}px`)};
  left: 5%;
  width: 42%;
  height: auto;
  z-index: 2;
`;

const CraneRight = styled.img<{ isFixed: boolean; topOffset: number }>`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed, topOffset }) => (isFixed ? "0px" : `${topOffset}px`)};
  right: 5%;
  width: 42%;
  height: auto;
  z-index: 2;
`;
const RightDiv = styled(ChildDiv)`
`;
const LeftDiv = styled(ChildDiv)`
`;

const Card = styled.div<{ isFixed: boolean; reachedEnd: boolean }>`
  height: 50vh;
  background: #fffffa;
  display: flex;
  flex-direction: column;
  position: ${({ isFixed, reachedEnd }) => (reachedEnd ? 'relative' : isFixed ? 'sticky' : 'static')};
  top: ${({ isFixed, reachedEnd }) => (reachedEnd ? 'auto' : isFixed ? '10rem' : 'auto')};
  border: solid 2px black;
  z-index: 3;

  @media (max-width: 768px) {
    height: clamp(18em, 50vw, 60vh);
  }
`;
const EmptyCard = styled.div`
  height: 50vh;
  //background: ;
  display:flex;
  flex-direction: column;
  position:sticky;
  //top:10rem;
  //border: solid 2px black;

  @media (max-width: 768px) {
    height:clamp(18em, 50vw, 60vh);
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
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    height: clamp(18em, 50vw, 60vh);
  }
`;

const Ground = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    background: #fce8cf;
    z-index: 1;
    `;


    // CONTAINER
const Container = styled.div`
  position: relative;
  display: grid;
  top: 1.75rem;
  aspect-ratio:1;
  
`;

const SponsorsPanel = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 10%;
  display: grid;
  grid-template-columns: repeat(3, calc(1/3 * 100%));
  align-content: center;
  // background: #bb25de44;
  justify-content: space-around;
  gap: 2.5%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
  };
`;

// ELEMENTS

const PartnershipText = styled.span`
  font-size: 2.2vw;
  font-weight: 600;
  grid-column: span 3;
  justify-self: center;
  @media (max-width: 768px) {
    grid-column: span 2;
    font-size: clamp(0.8rem, 5vw, 1.2rem);
  } ;
`;

const SponsorImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 3/2;
  object-fit: contain;
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

const PMIImg = styled(SabreImg)``;
const PMIText = styled(SabreText)``;

const KMSImg = styled(SabreImg)``;
const KMSText = styled(SabreText)``;

const DKMSImg = styled(SabreImg)``;
const DKMSText = styled(SabreText)``;

const SatrentImg = styled(SabreImg)``;
const SatrentText = styled(SabreText)``;

// SPONSORS

const ParentLink = styled.a`
  align-self: center;
  width: 100%;
`;

const Sabre = styled.a`
  width: 100%;
  position: absolute;
  align-self: center;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const PMI = styled(Sabre)`
  width: 50%;
  top: 55%;
`;

const KMS = styled(Sabre)``;
const DKMS = styled(Sabre)``;
const Satrent = styled(Sabre)``;

const GE = styled(ParentLink)``;
const Woodward = styled(ParentLink)``;
const IBM = styled(ParentLink)``;
const Aptiv = styled(ParentLink)``;
const Pega = styled(ParentLink)``;
const Mars = styled(ParentLink)``;
const Motorola = styled(ParentLink)``;
const FXMAG = styled(ParentLink)`
  grid-column:2;
  @media (max-width: 768px) {
    grid-column:1;
  }
`;
const PodPrad = styled(ParentLink)`
  grid-column:2;
  @media (max-width: 768px) {
    grid-column:1;
  }
`;
const PreviousSponsorsText = styled(SabreText)`
  font-size: 4vw;
  margin-bottom: 1rem;
  left: 50%;
  top: 1%;
  font-weight: bold;
  color: #ee8b10;
  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 5vw, 1rem);
  }
`;

const Sponsors: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [topOffset, setTopOffset] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null); // Ref do następnej sekcji

  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current) return;

      const { top, bottom } = parentRef.current.getBoundingClientRect();

      //zamienić sprawdzanie wartości na procent
      if (top <= 0 && bottom > 630) {
        setIsFixed(true);
        setTopOffset(Math.abs(top));; // Obliczanie topOffset w zależności od scrollowania
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [reachedEnd, setReachedEnd] = useState(false);
  const [isFixedCard, setIsFixedCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current) return;

      const { top, bottom } = parentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Sprawdzenie, czy sekcja kończy się przed dolną krawędzią ekranu
      // zamienić sprawdzanie wartości na procent
      if (bottom <= windowHeight - 1500) {
        setReachedEnd(true);
      } else {
        setReachedEnd(false);
      }

      //zamienić sprawdzanie wartości na procent
      if (top <= 10000 && !reachedEnd) {
        setIsFixedCard(true);
      } else {
        setIsFixedCard(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reachedEnd]);

  return (
    <Container id="sponsors">
      <PreviousSponsorsText style={{marginBottom: '0.5rem' }}>Sponsorzy poprzedniej edycji</PreviousSponsorsText>
      <ParentDiv ref={parentRef}>
        <Background isFixed={isFixed} topOffset={topOffset}  />
          <LeftDiv>
            <CraneLeft src={crane_left} isFixed={isFixed} topOffset={topOffset} />

          </LeftDiv>

          <CenterDiv ref={parentRef}>
            <EmptyCard></EmptyCard>

            <Card isFixed={isFixedCard} reachedEnd={reachedEnd} >
              <div style={{textAlign: 'center', marginBottom: '0.5rem'}}>

                <SabreText>Sponsor główny</SabreText>
              </div>
              <Sabre href="https://www.sabre.com/locations/poland/" target="_blank">
                <SabreImg src={logos[0].default} alt="Sabre"/>
              </Sabre>
            </Card>
            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SponsorsPanel>
                <PartnershipText>Sponsorzy</PartnershipText>
                <Pega href="https://www.pega.com/" target="_blank">
                  <SponsorImg src={logos[2].default} alt="Pega"/>
                </Pega>

                <Woodward href="https://www.woodward.com/" target="_blank">
                  <SponsorImg src={logos[1].default} alt="Woodward"/>
                </Woodward>

                <Mars href="https://www.mars.com/" target="_blank">
                  <SponsorImg src={logos[3].default} alt="Mars"/>
                </Mars>

                <GE href="https://www.ge.com/" target="_blank">
                  <SponsorImg src={logos[7].default} alt="GE"/>
                </GE>

                <IBM href="https://www.ibm.com/blogs/ibm-poland/" target="_blank">
                  <SponsorImg src={logos[16].default} alt="IBM"/>
                </IBM>

                <Motorola href="https://www.motorolasolutions.com/pl_pl.html" target="_blank">
                  <SponsorImg src={logos[19].default} alt="Motorola"/>
                </Motorola>

              </SponsorsPanel>
            </Card>
            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <PMIText>Partner Strefy Studenta</PMIText>
              <PMI href="https://www.pmi.com/markets/poland/pl/about-us/overview" target="_blank">
                <PMIImg src={logos[17].default} alt="PMI"/>
              </PMI>
            </Card>
            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <KMSText>Partner merytoryczny</KMSText>
              <KMS href="https://kms.org.pl/" target="_blank">
                <KMSImg src={logos[13].default} alt="KMS"/>
              </KMS>
            </Card>
            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SatrentText>Partner techniczny</SatrentText>
              <Satrent href="https://satrent.pl/" target="_blank">
                <SatrentImg src={logos[20].default} alt="Satrent"/>
              </Satrent>
            </Card>
            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <DKMSText>Fundacja charytatywna</DKMSText>
              <DKMS href="https://www.dkms.pl/" target="_blank">
                <DKMSImg src={logos[18].default} alt="DKMS"/>
              </DKMS>
            </Card>

            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SponsorsPanel>
                <PartnershipText>Patroni medialni</PartnershipText>
                <ParentLink href="http://www.podajdalej.info.pl/" target="_blank">
                  <SponsorImg src={logos[10].default} alt="Podaj Dalej"/>
                </ParentLink>
                <ParentLink href="https://www.eska.pl/" target="_blank">
                  <SponsorImg src={logos[9].default} alt="ESKA"/>
                </ParentLink>
                <ParentLink href="https://www.dlastudenta.pl/" target="_blank">
                  <SponsorImg src={logos[11].default} alt="Dla Studenta"/>
                </ParentLink>
                <ParentLink href="https://eurostudent.pl/" target="_blank">
                  <SponsorImg src={logos[12].default} alt="Eurostudent"/>
                </ParentLink>
                <ParentLink href="https://radio17.pl/" target="_blank">
                  <SponsorImg src={logos[6].default} alt="Radio 1.7"/>
                </ParentLink>
                <ParentLink href="https://dziennikpolski24.pl/" target="_blank">
                  <SponsorImg src={logos[21].default} alt="Dziennik Polski"/>
                </ParentLink>
                <FXMAG href="https://fxmag.pl/" target="_blank">
                  <SponsorImg src={logos[14].default} alt="FXMAG"/>
                </FXMAG>
              </SponsorsPanel>
            </Card>

            <Card isFixed={isFixedCard} reachedEnd={reachedEnd}>
              <SponsorsPanel>
                <PartnershipText>Partnerzy medialni</PartnershipText>
                <ParentLink href="https://www.facebook.com/AllInUJ/" target="_blank">
                  <SponsorImg src={logos[22].default} alt="All In UJ"/>
                </ParentLink>
                <ParentLink href="https://inzynieria.com/" target="_blank">
                  <SponsorImg src={logos[23].default} alt="Inzynieria"/>
                </ParentLink>
                <ParentLink href="https://krakow.dlawas.info/" target="_blank">
                  <SponsorImg src={logos[24].default} alt="Krakow DlaWas"/>
                </ParentLink>
                <ParentLink href="https://www.otouczelnie.pl/" target="_blank">
                  <SponsorImg src={logos[25].default} alt="Otouczelnie"/>
                </ParentLink>
                <ParentLink href="https://www.infopraca.pl/" target="_blank">
                  <SponsorImg src={logos[26].default} alt="infopraca"/>
                </ParentLink>
                <ParentLink href="https://perspektywy.pl/portal/" target="_blank">
                  <SponsorImg src={logos[27].default} alt="Perspektywy"/>
                </ParentLink>
                <PodPrad href="https://podprad.pl/" target="_blank">
                  <SponsorImg src={logos[28].default} alt="Plyn Pod Prad"/>
                </PodPrad>
              </SponsorsPanel>
            </Card>
            <EmptyCardLast isFixed={isFixedCard} reachedEnd={reachedEnd}></EmptyCardLast>
          </CenterDiv>

          <RightDiv>
          <CraneRight src={crane_right} isFixed={isFixed} topOffset={topOffset}></CraneRight>
          </RightDiv>
      </ParentDiv>
    </Container>

);
};

export default Sponsors;