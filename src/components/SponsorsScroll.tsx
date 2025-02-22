import { useEffect, useState, useRef } from "react";

const useResponsiveScroll = (parentRef: React.RefObject<HTMLDivElement>) => {
    const [isFixed, setIsFixed] = useState(false);
    const [topOffset, setTopOffset] = useState(0);
    const [isFixedCard, setIsFixedCard] = useState(false);
    const [isVisibleGround, setIsVisibleGround] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const reachedEndRef = useRef(false);
    const isFixedRef = useRef(false);

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
            const { top, bottom } = parentRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const threshold = isMobile ? 0.2 : 0.7; // Mobilne szybciej blokują

            // Czy sekcja dotarła do dolnej części ekranu?
            const hasReachedEnd = bottom <= windowHeight * threshold;

            if (hasReachedEnd !== reachedEndRef.current) {
                reachedEndRef.current = hasReachedEnd;
            }

            // Blokowanie od razu po wejściu do sekcji
            const shouldBeFixed = isMobile
                ? top <= windowHeight * 0 // Mobilne blokują szybciej
                : top <= 0 && bottom > windowHeight * threshold;

            if (shouldBeFixed !== isFixedRef.current) {
                isFixedRef.current = shouldBeFixed;
                setIsFixed(shouldBeFixed);
                if (!isMobile) setTopOffset(Math.abs(top)); // Dla desktopa nadal używamy topOffset
            }
        };

        const onScroll = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", onScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            if (!parentRef.current) return;
            const { top, bottom } = parentRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const mobileThreshold = 0.4; // Lepsza wartość dla mobilnych
            const desktopThreshold = 1500; // Desktop zostaje

            if (isMobile) {
                setIsFixedCard(top <= windowHeight * mobileThreshold && !reachedEndRef.current);
            } else {
                setIsFixedCard(top <= desktopThreshold && !reachedEndRef.current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            if (!parentRef.current) return;
            const { top, bottom } = parentRef.current.getBoundingClientRect();
            setIsVisibleGround(top <= 80 && bottom > window.innerHeight * (isMobile ? 0.5 : 0.7));
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return { isFixed, topOffset, isFixedCard, isVisibleGround };
};

export default useResponsiveScroll;
