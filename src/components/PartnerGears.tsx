import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// @ts-ignore
import gear_19 from "../images/gears/d19.svg";
// @ts-ignore
import gear_20 from "../images/gears/d20.svg";
// @ts-ignore
import gear_21 from "../images/gears/d21.svg";
// @ts-ignore
import gear_22 from "../images/gears/d22.svg";
// @ts-ignore
import gear_23 from "../images/gears/d23.svg";
// @ts-ignore
import gear_24 from "../images/gears/d24.svg";

const Container = styled.div`

  // background-color: rgba(0,0,0,0.15);

  position: sticky;
  display: grid;
  top: 5rem;

  width: 80%;

  margin: 0 auto;

  aspect-ratio: 1;

  @media (max-width: 768px) {
    top: 2rem;
    aspect-ratio:9/16;
  } ;
`;

const Gear = styled.img`
  // background-color: rgba(0,0,0,0.15);
  position: absolute;
  object-fit: contain;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 0.65s ease-out;
`;

const Gear19 = styled(Gear)`
  width: 16%;
  height: 16%;
  top: -8%;
  bottom: 0;
  left: 20%;
  right: 0;
  @media (max-width: 768px) {
    width:25%;
  }
`;

const Gear20 = styled(Gear)`
  width: 28%;
  height: 28%;
  top: 1%;
  bottom: 0;
  left: -5%;
  right: 0;
  @media (max-width: 768px) {
    width:37%;
  }
`;

const Gear21 = styled(Gear)`
  width: 40%;
  height: 40%;
  top: 6%;
  bottom: 0;
  left: 22%;
  right: 0;
  @media (max-width: 768px) {
    width:49%;
    height:49%;
  }
`;

const Gear22 = styled(Gear)`
  width: 16%;
  height: 16%;
  top: 31%;
  bottom: 0;
  left: 63%;
  right: 0;
  @media (max-width: 768px) {
    width:25%;
    height:28%;
  }
`;

const Gear23 = styled(Gear)`
  width: 21%;
  height: 21%;
  top: 42%;
  bottom: 0;
  left: 14%;
  right: 0;
  @media (max-width: 768px) {
    width:30%;
    height:21%;
  }
`;

const Gear24 = styled(Gear)`
  width: 50%;
  height: 50%;
  top: 45%;
  bottom: 0;
  left: 32%;
  right: 0;
  @media (max-width: 768px) {
    width:59%;
    height:50%;
  }
`;


const gearIds = Array.from({ length: 6 }, (_, index) => `#gear${index + 18}`);
const rotationDirections = Array.from({ length: 6 }, (_, index) => (index % 2 === 0 ? 1 : -1));

const rotateGearOnScroll = () => {
  gearIds.forEach((gearId, index) => {
    const gear = document.querySelector(gearId)?.style;

    if (gear) {
      const rotationFactor = 0.16;
      const rotationDirection = rotationDirections[index];
      gear.transform = `rotate(${window.scrollY * rotationFactor * rotationDirection}deg)`;
    }
  });
};

const PartnerGears: React.FC = () => {
    useEffect(() => {
        window.addEventListener('scroll', rotateGearOnScroll);

        return () => {
            window.removeEventListener('scroll', rotateGearOnScroll);
        };
    }, []);
    return (
        <>
            <Container>
                <Gear19 src={gear_19} id="gear19" />
                <Gear20 src={gear_20} id="gear20" />
                <Gear21 src={gear_21} id="gear21" />
                <Gear22 src={gear_22} id="gear22" />
                <Gear23 src={gear_23} id="gear23" />
                <Gear24 src={gear_24} id="gear24" />
            </Container>
        </>
    )
}

export default PartnerGears;