import { createContext } from "react";
import { useState } from "react";

const ModeContext = createContext();

export default ModeContext;

export const ModeProvider = ({ children }) => {
    const [styles, setStyles] = useState("dark-mode");

    const toggleStyles = () => {
        setStyles((styles) => (styles === "dark-mode" ? "light-mode" : "dark-mode"));
    }

    return (
        <ModeContext.Provider value={{ styles, toggleStyles }}>
            {children}
        </ModeContext.Provider>
    );
}