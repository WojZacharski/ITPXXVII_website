import { useEffect, useState, useRef } from "react";

const useResponsiveScroll = (parentRef: React.RefObject<HTMLDivElement>) => {
    const [isFixed, setIsFixed] = useState(false);
    const [topOffset, setTopOffset] = useState(0);
    const [reachedEnd, setReachedEnd] = useState(false);
    const [isFixedCard, setIsFixedCard] = useState(false);
    const [isVisibleGround, setIsVisibleGround] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!parentRef.current) return;
            const { top, bottom, height } = parentRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (isMobile) {
                // Dostosowane wartości dla wersji mobilnej
                if (bottom <= windowHeight * 0.6) {
                    setReachedEnd(true);
                    setIsFixed(false);
                } else if (top <= 0 && bottom > windowHeight * 0.6) {
                    setReachedEnd(false);
                    setIsFixed(true);
                    setTopOffset(Math.abs(top));
                } else {
                    setIsFixed(false);
                }
            } else {
                // Logika dla desktopu
                if (bottom <= windowHeight * 0.7) {
                    setReachedEnd(true);
                    setIsFixed(false);
                } else if (top <= 0 && bottom > windowHeight * 0.7) {
                    setReachedEnd(false);
                    setIsFixed(true);
                    setTopOffset(Math.abs(top));
                } else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            if (!parentRef.current) return;
            const { top, bottom, height } = parentRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (isMobile) {
                // Dostosowanie logiki dla mobilnych
                if (bottom <= windowHeight * 0.4) {
                    setReachedEnd(true);
                } else {
                    setReachedEnd(false);
                }

                if (top <= windowHeight * 0.2 && !reachedEnd) {
                    setIsFixedCard(true);
                } else {
                    setIsFixedCard(false);
                }
            } else {
                if (bottom <= windowHeight - 1500) {
                    setReachedEnd(true);
                } else {
                    setReachedEnd(false);
                }

                if (top <= 10000 && !reachedEnd) {
                    setIsFixedCard(true);
                } else {
                    setIsFixedCard(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile, reachedEnd]);

    useEffect(() => {
        const handleScroll = () => {
            if (!parentRef.current) return;
            const { top, bottom } = parentRef.current.getBoundingClientRect();
            setIsVisibleGround(top <= 80 && bottom > window.innerHeight * (isMobile ? 0.4 : 0.7));
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return { isFixed, topOffset, reachedEnd, isFixedCard, isVisibleGround };
};

export default useResponsiveScroll;
