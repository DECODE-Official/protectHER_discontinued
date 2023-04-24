import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import Styles from '../Styles/LoginScreenStyle';
import {LinearGradient} from "expo-linear-gradient";
import {Link} from "expo-router";

const Login = () => {
    return (
        <ScrollView style={Styles.view} >
            <SafeAreaView style={Styles.container}>
                <View style={Styles.welcome}>
                    <Text style={Styles.welcomeText}>Welcome Back</Text>
                    <Text style={Styles.welcomeEmoji}>👋🏻</Text>
                </View>
                <View style={Styles.avatarContainer}>
                    <LinearGradient colors={['#01FAFF', '#006AFF']} style={Styles.avatar}/>
                    <Image source={require('../assets/images/woman.png')} style={Styles.logo}/>
                </View>
                <Text style={Styles.text}>Login</Text>
                <View style={Styles.inputArea}>
                    <TextInput style={Styles.input} placeholder="Email"/>
                    <TextInput style={Styles.input} secureTextEntry={true} placeholder="Password"/>
                </View>
                <View style={Styles.resetPassword}>
                    <Text style={Styles.passwordText}>Forgot Your Password? </Text>
                    <Link href="/reset-password" style={Styles.resetLink}>Reset now</Link>
                </View>
                <TouchableOpacity style={Styles.login}>
                    <LinearGradient colors={['#00ffff', '#009dff']} style={Styles.loginButton}>
                        <Text style={Styles.loginText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={Styles.register}>
                    <Text style={Styles.registerText}>Don't have an account? </Text>
                    <Link href="/register" style={Styles.registerLink}>Register</Link>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Login;