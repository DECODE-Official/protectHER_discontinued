import {View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity} from "react-native";
import {Link, Stack} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import Styles from "../../Styles/RegisterStyle";

const register = () => {
    return (
        <ScrollView style={Styles.view} contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: '#fff'}} >
            <SafeAreaView style={Styles.container}>
                <Stack.Screen options={{
                    headerShown: false
                }} />
                <Text style={Styles.text}>Register</Text>
                <View style={Styles.inputArea}>
                    <TextInput style={Styles.input} placeholder="Email"/>
                    <TextInput style={Styles.input} placeholder="Phone No."/>
                    <TextInput style={Styles.input} secureTextEntry={true} placeholder="Password"/>
                    <TextInput style={Styles.input} secureTextEntry={true} placeholder="Password"/>
                </View>
                <TouchableOpacity style={Styles.login}>
                    <LinearGradient colors={['#00ffff', '#009dff']} style={Styles.loginButton}>
                        <Text style={Styles.loginText}>Register</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={Styles.register}>
                    <Text style={Styles.registerText}>Already have an account? </Text>
                    <Link href='/auth/login' style={Styles.registerLink} >Login Now</Link>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default register