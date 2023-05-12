import {View, Text, ScrollView, SafeAreaView, useColorScheme, TextInput, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Gstyles, LIGHT, DARK} from "../../Styles/GlobalStyles";


export const Button = (props) => {
    return (
        <TouchableOpacity style={Gstyles.button} onPress={props.onpress}>
            <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Gstyles.buttonBg}>
                <Text style={Gstyles.buttonText}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export const Input = (props) => {
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;
    return (
        <TextInput style={[Gstyles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                   placeholder={props.title}
                   keyboardType={props.keyboard}
                   onChangeText={props.textChange}
                   onBlur={props.handleblur} value={props.values}
                   placeholderTextColor={Theme.secondary_Text}
        />
    )
}

export const Heading = (props) => {
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;
    return (
        <Text style={[Gstyles.heading, {color: Theme.primary_Text}]}>{props.heading}</Text>
    )
}