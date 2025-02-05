import React from "react";
//@ts-ignore
import map_24 from "../images/map/map-24_final.svg";
//@ts-ignore
import legend_24 from "../images/map/legend-24_new.svg";
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
  top: 8%;
  left: 33%;
  color: #f08e17;
  font-weight: bold;
  font-size: 7vw;
  @media (max-width: 769px) {
    font-size: 4.25vw;
    right: 7.5%;
  }
`;

const Container = styled.div`
  background-color: #fce8cf; 
  position: relative;
  display: grid;
  top: 1.75rem;
  width: 100%;
  height: 100vh;
`;

const MapImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 80%;
  z-index: 2;
  @media (max-width: 769px) {
    width: 90%;
  }
`;

const MapLegend = styled.img`
  position: absolute;
  left: 12%;
  top: 77.5%;
  width: 25%;
  z-index: 2;
  @media (max-width: 769px) {
    left: 7.5%;
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
