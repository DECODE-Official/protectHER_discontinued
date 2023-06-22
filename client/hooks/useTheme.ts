import {useColorScheme} from "react-native";
import {LIGHT, DARK} from '../Styles/GlobalStyles';

export const useTheme = () => {
    let theme = useColorScheme();
    return theme === 'light' ? LIGHT : DARK;
}
