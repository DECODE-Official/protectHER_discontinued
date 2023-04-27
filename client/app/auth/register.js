import {View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, useColorScheme} from "react-native";
import {Link, Stack} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import Styles from "../../Styles/RegisterStyle";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";

const register = () => {

    let theme = useColorScheme();

    let Theme = theme === 'light' ? LIGHT : DARK;

    return (
        <ScrollView style={Styles.view} contentContainerStyle={{
            justifyContent: 'center',
            height: '100%',
            backgroundColor: Theme.background
        }}>
            <SafeAreaView style={Styles.container}>
                <Stack.Screen options={{
                    headerShown: false
                }}/>
                <Text style={[Styles.text, {color: Theme.primary_Text}]}>Register</Text>
                <View style={Styles.inputArea}>
                    <TextInput
                        style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                        placeholderTextColor={Theme.input_Color} placeholder="Email"/>
                    <TextInput
                        style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                        placeholderTextColor={Theme.input_Color} placeholder="Phone No."/>
                    <TextInput
                        style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                        placeholderTextColor={Theme.input_Color} secureTextEntry={true} placeholder="Create Password"/>
                    <TextInput
                        style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                        placeholderTextColor={Theme.input_Color} secureTextEntry={true} placeholder="Confirm Password"/>
                </View>
                <TouchableOpacity style={Styles.login}>
                    <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.loginButton}>
                        <Text style={Styles.loginText}>Register</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={Styles.register}>
                    <Text style={[Styles.registerText, {color: Theme.secondary_Text}]}>Already have an account? </Text>
                    <Link href='/login' style={[Styles.registerLink, {color: Theme.highlighted_Text}]}>Login Now</Link>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default register