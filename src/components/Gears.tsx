import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// @ts-ignore
import gear_1 from "../images/gears/d1.svg";
// @ts-ignore
import gear_2 from "../images/gears/d2.svg";
// @ts-ignore
import gear_3 from "../images/gears/d3.svg";
// @ts-ignore
import gear_4 from "../images/gears/d4.svg";
// @ts-ignore
import gear_5 from "../images/gears/d5.svg";
// @ts-ignore
import gear_6 from "../images/gears/d6.svg";
// @ts-ignore
import gear_7 from "../images/gears/d7.svg";
// @ts-ignore
import gear_8 from "../images/gears/d8.svg";
// @ts-ignore
import gear_9 from "../images/gears/d9.svg";
// @ts-ignore
import gear_10 from "../images/gears/d10.svg";
// @ts-ignore
import gear_11 from "../images/gears/d11.svg";
// @ts-ignore
import gear_12 from "../images/gears/d12.svg";
// import gear_13 from "../images/gears/d13.svg";
// import gear_14 from "../images/gears/d14.svg";
// import gear_15 from "../images/gears/d15.svg";
// import gear_16 from "../images/gears/d16.svg";
// import gear_17 from "../images/gears/d17.svg";
// import gear_18 from "../images/gears/d18.svg";
// import gear_19 from "../images/gears/d19.svg";
// import gear_20 from "../images/gears/d20.svg";
// import gear_21 from "../images/gears/d21.svg";
// import gear_22 from "../images/gears/d22.svg";
// import gear_23 from "../images/gears/d23.svg";
// import gear_24 from "../images/gears/d24.svg";


const Container = styled.div`

  // background-color: rgba(0,0,0,0.15);

  position: relative;
  display: grid;
  top: 0rem;

  width: 80%;

  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 4em;

  aspect-ratio: 1;

  @media (max-width: 768px) {
    margin-top: 38%;
    margin-bottom: 30%;
  } ;
`;

const Gear = styled.img`
  position: absolute;
  object-fit: contain;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 0.65s ease-out;
`;

const Gear1 = styled(Gear)`
  width: 12%;
  height: auto;
  top: 10%;
  left: -5%;
`;

const Gear2 = styled(Gear)`
  width: 15%;
  height: auto;
  top: 22%;
  left: 0%;
`;

const Gear3 = styled(Gear)`
  width: 20%;
  height: auto;
  top: 35%;
  left: -10%;
`;

const Gear4 = styled(Gear)`
  width: 10%;
  height: auto;
  top: 50%;
  left: 5%;
`;

const Gear5 = styled(Gear)`
  width: 18%;
  height: auto;
  top: 60%;
  left: -5%;
`;

const Gear6 = styled(Gear)`
  width: 25%;
  height: auto;
  top: 5%;
  right: 0%;
`;

const Gear7 = styled(Gear)`
  width: 14%;
  height: auto;
  top: 26%;
  right: -5%;
`;

const Gear8 = styled(Gear)`
  width: 10%;
  height: auto;
  top: 36%;
  right: 5%;
`;

const Gear9 = styled(Gear)`
  width: 22%;
  height: auto;
  top: 45%;
  right: -5%;
`;

const Gear10 = styled(Gear)`
  width: 16%;
  height: auto;
  top: 65%;
  right: -6%;
`;

const Gear11 = styled(Gear)`
  width: 20%;
  height: auto;
  top: 75%;
  right: 5%;
`;

const Gear12 = styled(Gear)`
  width: 12%;
  height: auto;
  top: 85%;
  right: -5%;
`;


const gearIds = Array.from({ length: 24 }, (_, index) => `#gear${index + 1}`);
const rotationDirections = Array.from({ length: 24 }, (_, index) => (index % 2 === 0 ? 1 : -1));

const rotateGearOnScroll = () => {
  gearIds.forEach((gearId, index) => {
    const gear = document.querySelector(gearId)?.style;

    if (gear) {
      const rotationFactor = 0.12;
      const rotationDirection = rotationDirections[index];
      gear.transform = `rotate(${window.scrollY * rotationFactor * rotationDirection}deg)`;
    }
  });
};

const Gears: React.FC = (props) => {
    useEffect(() => {
        window.addEventListener('scroll', rotateGearOnScroll);

        return () => {
            window.removeEventListener('scroll', rotateGearOnScroll);
        };
    }, []);
    return (
        <>
            <Container>
              {props.children}
                <Gear1 src={gear_1} id="gear1" />
                <Gear2 src={gear_2} id="gear2" />
                <Gear3 src={gear_3} id="gear3" />
                <Gear4 src={gear_4} id="gear4" />
                <Gear5 src={gear_5} id="gear5" />
                <Gear6 src={gear_6} id="gear6" />
                <Gear7 src={gear_7} id="gear7" />
                <Gear8 src={gear_8} id="gear8" />
                <Gear9 src={gear_9} id="gear9" />
                <Gear10 src={gear_10} id="gear10" />
                <Gear11 src={gear_11} id="gear11" />
                <Gear12 src={gear_12} id="gear12" />
            </Container>
        </>
    )
}

export default Gears;