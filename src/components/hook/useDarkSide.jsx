import { useEffect, useState } from "react";

const useDarkSide = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [colorTheme, theme])

    return [setTheme, colorTheme, ];
};

export default useDarkSide;