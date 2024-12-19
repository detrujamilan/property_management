import { useState, useEffect } from "react";

// Utility functions for calculations
const pxToVh = (px: number): number => +(px / window.innerHeight * 100).toFixed(2);
const pxToVw = (px: number): number => +(px / window.innerWidth * 100).toFixed(2);

// Reusable hook for both vh and vw
export const useDynamicViewport = (px: number, mode: "vh" | "vw"): number => {
    const calculateValue = () => (mode === "vh" ? pxToVh(px) : pxToVw(px));
    const [value, setValue] = useState<number>(calculateValue);

    useEffect(() => {
        const handleResize = () => {
            setValue(calculateValue());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [px, mode]);

    return value;
};
