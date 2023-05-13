import {useColorScheme} from "react-native";
import {LIGHT, DARK} from "../Styles/GlobalStyles";

export const themeProvider = () => {
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;
    return Theme
}
