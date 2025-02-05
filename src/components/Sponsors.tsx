import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import useMediaQuery from "../utils/UseMediaQuery";
import PartnerGears from "./PartnerGears";

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

const ParentDiv = styled.div`
  margin-top: clamp(3rem, 10vw, 12em);
  width: 100%;
  display: flex;
`;

const ChildDiv = styled.div`
  flex: 1;
`;

const CenterDiv = styled(ChildDiv)`
  position: relative;
  padding: 0 0.5rem 0 0.5rem;
  display:grid;
  grid-template-rows: auto 1fr;
  `;

const RightDiv = styled(ChildDiv)`
`;
const LeftDiv = styled(ChildDiv)`
`;


const Card = styled.div`
  height: 60vh;
  background: #fffffa;
  display:flex;
  flex-direction: column;
  position:sticky;
  top:0;
   border: solid 2px black;

  @media (max-width: 768px) {
    height:clamp(18em, 50vw, 60vh);
  } ;
`;

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
  // background-color: rgba(0,0,0,0.15);
  
  aspect-raito: 1;
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
    // grid-column: span 2;
    font-size: clamp(0.8rem, 5vw, 1.2rem);
    text-align:center;
  } ;
`;

const SabreImg = styled.img`
  width: 50%;
  display: block;
  // background-color: rgba(0,0,0,0.15);
  aspect-raito: 1;
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

// ##################################
// SPONSORS
// ##################################

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
  // background-color: rgba(0,0,0,0.15);

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
  return (
    <Container id="sponsors">
      <ParentDiv>
        <PreviousSponsorsText style={{marginBottom: '0.5rem' }}>Sponsorzy poprzedniej edycji</PreviousSponsorsText>
        <LeftDiv>

        </LeftDiv>

        <CenterDiv>

                  <Card>
                      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>

                          <SabreText>Sponsor główny</SabreText>
                      </div>
                      <Sabre href="https://www.sabre.com/locations/poland/" target="_blank">
                          <SabreImg src={logos[0].default} alt="Sabre" />
                      </Sabre>
                  </Card>
          <Card>
            <SponsorsPanel>
              <PartnershipText>Sponsorzy</PartnershipText>
              <Pega href="https://www.pega.com/" target="_blank">
                <SponsorImg src={logos[2].default} alt="Pega" />
              </Pega>

              <Woodward href="https://www.woodward.com/" target="_blank">
                <SponsorImg src={logos[1].default} alt="Woodward" />
              </Woodward>

              <Mars href="https://www.mars.com/" target="_blank">
                <SponsorImg src={logos[3].default} alt="Mars" />
              </Mars>

              <GE href="https://www.ge.com/" target="_blank">
                <SponsorImg src={logos[7].default} alt="GE" />
              </GE>

              <IBM href="https://www.ibm.com/blogs/ibm-poland/" target="_blank">
                <SponsorImg src={logos[16].default} alt="IBM" />
              </IBM>

              <Motorola href="https://www.motorolasolutions.com/pl_pl.html" target="_blank">
                <SponsorImg src={logos[19].default} alt="Motorola" />
              </Motorola>

            </SponsorsPanel>
          </Card>
          <Card>
            <PMIText>Partner Strefy Studenta</PMIText>
            <PMI href="https://www.pmi.com/markets/poland/pl/about-us/overview" target="_blank">
              <PMIImg src={logos[17].default} alt="PMI" />
            </PMI>
          </Card>
          <Card>
            <KMSText>Partner merytoryczny</KMSText>
            <KMS href="https://kms.org.pl/" target="_blank">
              <KMSImg src={logos[13].default} alt="KMS" />
            </KMS>
          </Card>
          <Card>
            <SatrentText>Partner techniczny</SatrentText>
            <Satrent href="https://satrent.pl/" target="_blank">
              <SatrentImg src={logos[20].default} alt="Satrent" />
            </Satrent>
          </Card>
          <Card>
            <DKMSText>Fundacja charytatywna</DKMSText>
            <DKMS href="https://www.dkms.pl/" target="_blank">
              <DKMSImg src={logos[18].default} alt="DKMS" />
            </DKMS>
          </Card>

          <Card>
            <SponsorsPanel>
              <PartnershipText>Patroni medialni</PartnershipText>
              <ParentLink href="http://www.podajdalej.info.pl/" target="_blank">
                <SponsorImg src={logos[10].default} alt="Podaj Dalej" />
              </ParentLink>
              <ParentLink href="https://www.eska.pl/" target="_blank">
                <SponsorImg src={logos[9].default} alt="ESKA" />
              </ParentLink>
              <ParentLink href="https://www.dlastudenta.pl/" target="_blank">
                <SponsorImg src={logos[11].default} alt="Dla Studenta" />
              </ParentLink>
              <ParentLink href="https://eurostudent.pl/" target="_blank">
                <SponsorImg src={logos[12].default} alt="Eurostudent" />
              </ParentLink>
              <ParentLink href="https://radio17.pl/" target="_blank">
                <SponsorImg src={logos[6].default} alt="Radio 1.7" />
              </ParentLink>
              <ParentLink href="https://dziennikpolski24.pl/" target="_blank">
                <SponsorImg src={logos[21].default} alt="Dziennik Polski" />
              </ParentLink>
              <FXMAG href="https://fxmag.pl/" target="_blank">
                <SponsorImg src={logos[14].default} alt="FXMAG" />
              </FXMAG>
            </SponsorsPanel>
          </Card>

          <Card>
            <SponsorsPanel>
              <PartnershipText>Partnerzy medialni</PartnershipText>
              <ParentLink href="https://www.facebook.com/AllInUJ/" target="_blank">
                <SponsorImg src={logos[22].default} alt="All In UJ" />
              </ParentLink>
              <ParentLink href="https://inzynieria.com/" target="_blank">
                <SponsorImg src={logos[23].default} alt="Inzynieria" />
              </ParentLink>
              <ParentLink href="https://krakow.dlawas.info/" target="_blank">
                <SponsorImg src={logos[24].default} alt="Krakow DlaWas" />
              </ParentLink>
              <ParentLink href="https://www.otouczelnie.pl/" target="_blank">
                <SponsorImg src={logos[25].default} alt="Otouczelnie" />
              </ParentLink>
              <ParentLink href="https://www.infopraca.pl/" target="_blank">
                <SponsorImg src={logos[26].default} alt="infopraca" />
              </ParentLink>
              <ParentLink href="https://perspektywy.pl/portal/" target="_blank">
                <SponsorImg src={logos[27].default} alt="Perspektywy" />
              </ParentLink>
              <PodPrad href="https://podprad.pl/" target="_blank">
                <SponsorImg src={logos[28].default} alt="Plyn Pod Prad" />
              </PodPrad>
            </SponsorsPanel>
          </Card>
        </CenterDiv>
        <RightDiv>

        </RightDiv>
      </ParentDiv>
    </Container>
  );
};

export default Sponsors;