import React, { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button className="darkmode-toggle" onClick={() => setDark((d) => !d)}>
            {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
};

export default DarkMode;