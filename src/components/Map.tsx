import React from "react";
//@ts-ignore
import map_24 from "../images/map/MapaITP.svg";
//@ts-ignore
import legend_24 from "../images/map/legend-25_new.svg";
//@ts-ignore
import styled from "styled-components";

function importAll(r: any) {
  return r.keys().map(r);
}

const mapImages = importAll(
    require.context("../images/map", false, /\.(png|jpe?g|svg)$/)
);

const Container = styled.div`
    color: #F0933B;
    background-color: #F0933B;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //width: 100%;
    min-height: 100vh;
    max-width: 100%; //99% za mało 100% za dużo


    @media (max-width: 769px) {
        //height: auto;
        min-height: 50vh;
    }
    
    @media (max-width: 769px) and (orientation: landscape) {
        min-height: 120vh; 
    }
`;

const MapHeader = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8); 
    padding: 1rem 0;
    z-index: 2;

    @media (max-width: 769px) {
        display: none;
    }
`;

const MapText = styled.p`
    color: #f08e17;
    font-weight: bold;
    font-size: clamp(1rem, 15vw, 4.5em);
    letter-spacing: 0.03em;
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.5rem;
    z-index: 2;

    @media (max-width: 769px) {
        display: none;
    }
`;


const MapContainer = styled.div`
    position: relative;
    flex-grow: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
`;

const MapImg = styled.img`
    //position: absolute;
    //top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    object-fit: contain;
    z-index: 0;
    max-width: 100vw;
`;

const MapLegend = styled.img`
    position: absolute;
    left: 9%;
    top: 77.5%;
    width: 25%;
    z-index: 2;
    @media (max-width: 769px) {
        left: 7.5%;
        top: 55%;
        width: 80%;
        max-width: 80vw;  
        height: auto;  
    }
`;

const Map: React.FC = () => {
  return (

      <Container id="map">
          <MapHeader>
              <MapText>Mapa wydarzenia</MapText>
          </MapHeader>
          <MapContainer>
              <MapImg src={map_24} alt="map" />
          </MapContainer>
      </Container>

  );
};

export default Map;
