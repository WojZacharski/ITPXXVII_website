import React from "react";
//@ts-ignore
import map_24 from "../images/map/map-25_final.svg";
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

const MapText = styled.p`
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translateX(-50%);
    color: #f08e17;
    font-weight: bold;
    font-size: clamp(1rem, 15vw, 4.5em);
    letter-spacing: 0.03em;
    width: auto;
    max-width: 100vw; 
    white-space: nowrap; 
    text-align: center;

    @media (max-width: 769px) {
        font-size: clamp(1rem, 10vw, 2.5rem); /* Zwiększenie rozmiaru tekstu dla mobilnych */
    }
`;

const Container = styled.div`
    background-color: #f7e0cb;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 2rem 0;

    @media (max-width: 769px) {
        height: auto;
        min-height: 50vh;   
    }
`;

const MapImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 80%;
  z-index: 2;
  @media (max-width: 769px) {
      top: 30%;
    width: 100%;
      height: 140%;
  }
`;

const MapLegend = styled.img`
  position: absolute;
  left: 9%;
  top: 77.5%;
  width: 25%;
  z-index: 2;
  @media (max-width: 769px) {
    left: 7.5%;
      top: 50%;
      width: 80%;
  }
`;

const Map: React.FC = () => {
  return (
      <Container id="map">
        <MapText>Mapa wydarzenia</MapText>
        <MapImg src={map_24} alt="map" />
        <MapLegend src={legend_24} alt="list1" />
      </Container>
  );
};

export default Map;
