import {Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Gstyles} from "../../Styles/GlobalStyles";
import {Stack} from "expo-router";
import {themeProvider} from "./themProvider";


export const Button = (props) => {
    return (
        <TouchableOpacity style={Gstyles.button} onPress={props.onpress} activeOpacity={1}>
            <LinearGradient colors={['#5fcfff', '#00a0e5']} style={[Gstyles.buttonBg, {width: props.width ? props.width: '100%'}]}>
                <Text style={Gstyles.buttonText}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export const Input = (props) => {
    let Theme = themeProvider();
    return (
        <TextInput style={[Gstyles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                   placeholder={props.title}
                   keyboardType={props.keyboard}
                   onChangeText={props.textChange}
                   onBlur={props.handleblur} value={props.values}
                   placeholderTextColor={Theme.secondary_Text}
                   maxLength={props.maxLength}
        />
    )
}

export const Heading = (props) => {
    let Theme = themeProvider();
    return (
        <Text style={[Gstyles.heading, {color: Theme.primary_Text}]}>{props.heading}</Text>
    )
}

export const Screen = (props) => {
    let Theme = themeProvider();
    return (
        <ScrollView
            contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
            <SafeAreaView style={Gstyles.container}>
                <Stack.Screen options={{headerShown: false}}/>
                {props.children}
            </SafeAreaView>
        </ScrollView>
    )
}
