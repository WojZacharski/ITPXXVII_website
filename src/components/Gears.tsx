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
import gear_8 from "../images/gears/g8.svg";
import gear_9 from "../images/gears/g9.svg";
import gear_10 from "../images/gears/g10.svg";
import gear_11 from "../images/gears/g11.svg";
import gear_12 from "../images/gears/g12.svg";

// 📌 Styl kontenera
const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 2rem auto;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 95%;
    margin-top: 20%;
    margin-bottom: 20%;
  }
`;

//Uniwersalny styl dla zębatek
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

//Definicje pozycji i rozmiarów zębatek
const gearsData = [
    { src: gear_1, size: "clamp(8%, 12vw, 12%)", top: "11%", left: "-5%" },
    { src: gear_2, size: "clamp(10%, 15vw, 15%)", top: "18%", left: "0%" },
    { src: gear_3, size: "clamp(12%, 20vw, 20%)", top: "27%", left: "-10%" },
    { src: gear_4, size: "clamp(10%, 14vw, 14%)", top: "39.5%", left: "3%" },
    { src: gear_5, size: "clamp(12%, 18vw, 18%)", top: "49%", left: "-4%" },
    { src: gear_6, size: "clamp(15%, 25vw, 25%)", top: "5%", right: "0%" },
    { src: gear_7, size: "clamp(10%, 17vw, 17%)", top: "21%", right: "-6.7%" },
    { src: gear_8, size: "clamp(7%, 10vw, 10%)", top: "32%", right: "4.7%" },
    { src: gear_9, size: "clamp(10%, 15vw, 15%)", top: "37%", right: "-3%" },
    { src: gear_10, size: "clamp(10%, 16vw, 16%)", top: "49%", right: "-6%" },
    { src: gear_11, size: "clamp(12%, 20vw, 20%)", top: "55.5%", right: "2.5%" },
    { src: gear_12, size: "clamp(10%, 14vw, 14%)", top: "69%", right: "-1.5%" },
];

// 📌 Komponent Gears
const Gears: React.FC<React.PropsWithChildren<{}>> = (props) => {
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
            {props.children}
            {gearsData.map((gear, index) => (
                <Gear
                    key={index}
                    src={gear.src}
                    size={gear.size}
                    top={gear.top}
                    left={gear.left}
                    right={gear.right}
                    ref={(el) => (gearRefs.current[index] = el)}
                />
            ))}
        </Container>
    );
};

export default Gears;
