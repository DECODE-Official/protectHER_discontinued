import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import Styles from '../../Styles/LoginScreenStyle';
import {LinearGradient} from "expo-linear-gradient";
import {Link, Stack} from "expo-router";

const Login = () => {
    return (
        <ScrollView contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: '#fff'}}>
            <SafeAreaView style={Styles.container}>
                <Stack.Screen options={{
                    headerShown: false
                }}/>
                <Text style={Styles.text}>Login</Text>
                <View style={Styles.inputArea}>
                    <TextInput style={Styles.input} placeholder="Email"/>
                    <TextInput style={Styles.input} secureTextEntry={true} placeholder="Password"/>
                </View>
                <View style={Styles.resetPassword}>
                    <Text style={Styles.passwordText}>Forgot Your Password? </Text>
                    <Link href="/" style={Styles.resetLink}>Reset now</Link>
                </View>
                <TouchableOpacity style={Styles.login}>
                    <LinearGradient colors={['#00ffff', '#009dff']} style={Styles.loginButton}>
                        <Text style={Styles.loginText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={Styles.register}>
                    <Text style={Styles.registerText}>Don't have an account? </Text>
                    <Link href='/register' style={Styles.registerLink}>Register Now</Link>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Login;