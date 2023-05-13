import {StyleSheet} from "react-native";

// Styles for light theme
export const LIGHT = {
    background: '#fff',
    primary_Text: '#363636',
    secondary_Text: '#808080',
    highlighted_Text: '#00B4FF',
    input_Background: '#F5F5F5',
    input_Color: '#818181',
    icon_Color: '#3a3a3a'
}

// Styles for dark theme
export const DARK = {
    background: '#1f1f1f',
    primary_Text: '#fff',
    secondary_Text: '#c5c5c5',
    highlighted_Text: '#00B4FF',
    input_Background: '#262626',
    input_Color: '#ffffff',
    icon_Color: '#e8e8e8'
}

// Style constants for reusable components

export const Gstyles = StyleSheet.create({
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 5,
        marginBottom: 50,
        textTransform: 'uppercase',
        width: '80%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    button: {
        width: '80%',
        marginBottom: 50,
    },
    buttonBg: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 20,
        shadowColor: '#009dff'
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
    input: {
        height: 80,
        borderRadius: 20,
        gap: 30,
        fontSize: 20,
        paddingHorizontal: 20,
    },
    inputArea: {
        justifyContent: 'space-between',
        marginBottom: 50,
        width: '80%',
    }
})