import { createContext } from "react";
import { useState, useMemo, useCallback } from "react";

const ModeContext = createContext();

export default ModeContext;

export const ModeProvider = ({ children }) => {
    const [styles, setStyles] = useState("dark-mode");

    const toggleStyles = useCallback(() => {
        setStyles((styles) => (styles === "dark-mode" ? "light-mode" : "dark-mode"));
    }, []);

    const value = useMemo(() => ({ styles, toggleStyles }), [styles, toggleStyles]);

    return (
        <ModeContext.Provider value={value}>
            {children}
        </ModeContext.Provider>
    );
}