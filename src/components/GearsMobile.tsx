import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// @ts-ignore
import gear_1 from "../images/gears/g1.svg";
import gear_2 from "../images/gears/g2.svg";
import gear_3 from "../images/gears/g3.svg";
import gear_4 from "../images/gears/g4.svg";
import gear_5 from "../images/gears/g5.svg";
import gear_6 from "../images/gears/g6.svg";
import gear_7 from "../images/gears/g7.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 2rem auto;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 95%;
    //margin-top: 5%;
    //margin-bottom: 5%;
  }
`;

const Gear = styled.img<{ size: string; top: string; left?: string; right?: string }>`
  position: absolute;
  object-fit: contain;
  width: ${({ size }) => size};
  height: auto;
  top: ${({ top }) => top};
  left: ${({ left }) => (left ? left : "auto")};
  right: ${({ right }) => (right ? right : "auto")};
  transition: transform 0.3s ease-out;
`;

const gearsData = [
    { src: gear_1, size: "22%", top: "69%", left: "50%" },
    { src: gear_2, size: "22%", top: "66%", left: "68%" },
    { src: gear_3, size: "22%", top: "63%", left: "14%" },
    { src: gear_4, size: "22%", top: "60%", left: "86%" },
    { src: gear_5, size: "25%", top: "40%", left: "36%" },
    { src: gear_6, size: "25%", top: "29%", left: "74%" },
    { src: gear_7, size: "25%", top: "25%", left: "18%" },
];

const Gears: React.FC = () => {
    const gearRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            gearRefs.current.forEach((gear, index) => {
                if (gear) {
                    const rotationFactor = 0.12;
                    const rotationDirection = index % 2 === 0 ? 1 : -1;
                    gear.style.transform = `rotate(${window.scrollY * rotationFactor * rotationDirection}deg)`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container>
            {gearsData.map((gear, index) => (
                <Gear
                    key={index}
                    src={gear.src}
                    size={gear.size}
                    top={gear.top}
                    left={gear.left}
                    ref={(el) => (gearRefs.current[index] = el)}
                />
            ))}
        </Container>
    );
};

export default Gears;
