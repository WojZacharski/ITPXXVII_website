import { useEffect, useState, useRef } from "react";

const useResponsiveScroll = (parentRef: React.RefObject<HTMLDivElement>) => {
    const [isFixed, setIsFixed] = useState(false);
    const [topOffset, setTopOffset] = useState(0);
    const [reachedEnd, setReachedEnd] = useState(false);
    const [isFixedCard, setIsFixedCard] = useState(false);
    const [isVisibleGround, setIsVisibleGround] = useState(true);
    const [isMobile, setIsMobile] = useState(false);


    //DEBUG
    /*
    useEffect(() => {
        const handleScroll = () => {
            if (!parentRef.current) return;
            const rect = parentRef.current.getBoundingClientRect();
            const doc = document.documentElement;

            console.log("top:", rect.top, "bottom:", rect.bottom, "height:", rect.height);
            console.log("scrollTop:", doc.scrollTop, "scrollHeight:", doc.scrollHeight, "clientHeight:", doc.clientHeight);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // Nasłuchiwanie zmian okna

        handleScroll(); // Wywołanie na start

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);
*/

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 768);

            const handleResize = () => setIsMobile(window.innerWidth < 768);
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
        if (!parentRef.current) return;
        const { top, bottom, height } = parentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (isMobile) {
            // Dostosowane wartości dla wersji mobilnej
            if (bottom <= windowHeight * 0.3) {
                setReachedEnd(true);
                setIsFixed(false);
            } else if (top <= 0 && bottom > windowHeight * 0.3) {
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
            if (bottom <= windowHeight * 0.3) {
                setReachedEnd(true);
            } else {
                setReachedEnd(false);
            }

            if (top <= windowHeight && !reachedEnd) {
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