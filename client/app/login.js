import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, useColorScheme} from "react-native";
import Styles from '../Styles/LoginScreenStyle';
import {LinearGradient} from "expo-linear-gradient";
import {Link, Stack} from "expo-router";
import {LIGHT, DARK} from "../Styles/GlobalStyles";

const Login = () => {

    const theme = useColorScheme();

    const Theme = theme === 'light' ? LIGHT : DARK;

    return (
        <ScrollView
            contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
            <SafeAreaView style={Styles.container}>
                <Stack.Screen options={{
                    headerShown: false
                }}/>
                <Text style={[Styles.text, {color: Theme.primary_Text}]}>Login</Text>
                <View style={Styles.inputArea}>
                    <TextInput style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]} placeholderTextColor={Theme.input_Color} placeholder="Email"/>
                    <TextInput style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]} placeholderTextColor={Theme.input_Color} secureTextEntry={true} placeholder="Password"/>
                </View>
                <View style={Styles.resetPassword}>
                    <Text style={[Styles.passwordText, {color: Theme.secondary_Text}]}>Forgot Your Password? </Text>
                    <Link href="/" style={[Styles.resetLink, {color: Theme.highlighted_Text}]}>Reset now</Link>
                </View>
                <TouchableOpacity style={Styles.login}>
                    <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.loginButton}>
                        <Text style={Styles.loginText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={Styles.register}>
                    <Text style={[Styles.registerText, {color: Theme.secondary_Text}]}>Don't have an account? </Text>
                    <Link href='/auth/register' style={[Styles.registerLink, {color: Theme.highlighted_Text}]}>Register Now</Link>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Login;