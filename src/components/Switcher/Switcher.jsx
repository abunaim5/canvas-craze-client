import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hook/useDarkSide";

const Switcher = () => {
    const [setTheme, colorTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = checked => {
        console.log(checked);
        setTheme(colorTheme);
        setDarkSide(checked);
    }


    return (
        <div>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                sunColor="#a55e3f"
                moonColor="#C8CBD0"
                size={30}
            />
        </div>
    );
};

export default Switcher;