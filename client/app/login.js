import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, useColorScheme} from "react-native";
import Styles from '../Styles/LoginScreenStyle';
import {LinearGradient} from "expo-linear-gradient";
import {Link, Stack} from "expo-router";
import {LIGHT, DARK} from "../Styles/GlobalStyles";

const Login = () => {

    // Get the current theme
    const theme = useColorScheme();
    const Theme = theme === 'light' ? LIGHT : DARK;

    // Array of input fields
    const Input = [{
        placeholder: 'Email/Phone No.', secureTextEntry: false
    }, {
        placeholder: 'Password', secureTextEntry: true
    }]

    return (<ScrollView
            contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
            <SafeAreaView style={Styles.container}>
                <Stack.Screen options={{
                    headerShown: false
                }}/>
                <Text style={[Styles.text, {color: Theme.primary_Text}]}>Login</Text>
                <View style={Styles.inputArea}>
                    {// Map the input array to create the input fields
                        Input.map((item) => {
                            return (<TextInput style={[Styles.input, {
                                    backgroundColor: Theme.input_Background, color: Theme.input_Color
                                }]} placeholderTextColor='#808080' placeholder={item.placeholder}
                                               secureTextEntry={item.secureTextEntry}/>)
                        })}
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
                    <Link href='/auth/Tutorial' style={[Styles.registerLink, {color: Theme.highlighted_Text}]}>Register
                        Now</Link>
                </View>
            </SafeAreaView>
        </ScrollView>)
}

export default Login;