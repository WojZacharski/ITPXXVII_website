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
import gear_8 from "../images/gears/g8.svg"; // Upewnienie się, że mamy dokładnie 8 zębatek

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 kolumny */
    grid-template-rows: repeat(2, auto);  /* 2 rzędy */
    gap: 15px; /* Odstępy między zębatkami */
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 90vw;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr); /* Na mobilkach 2 kolumny */
        grid-template-rows: repeat(2, auto);  /* 4 rzędy */
        max-width: 80vw;
    }
`;

const Gear = styled.img<{ size: string }>`
    width: ${({ size }) => size};
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease-out;
`;

const gearsData = [
    { src: gear_1, size: "80px" },
    { src: gear_2, size: "80px" },
    { src: gear_3, size: "80px" },
    { src: gear_4, size: "90px" },
    { src: gear_5, size: "100px" },
    { src: gear_6, size: "90px" },
    { src: gear_7, size: "80px" },
    { src: gear_8, size: "85px" },
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
                    ref={(el) => (gearRefs.current[index] = el)}
                />
            ))}
        </Container>
    );
};

export default Gears;
