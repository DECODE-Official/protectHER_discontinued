import {View, Text, ScrollView, SafeAreaView, useColorScheme, TextInput, TouchableOpacity} from "react-native";
import Styles from "../../Styles/resetPassword_styles";
import {Stack} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";

const Password_Reset = () => {

    const router = useRouter();

    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;

    return (<ScrollView
        contentContainerStyle={{
            justifyContent: 'center', height: '100%', backgroundColor: Theme.background
        }}>
        <SafeAreaView style={Styles.container}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <Text style={[Styles.heading, {color: Theme.primary_Text}]}>Reset Password</Text>
            <View style={Styles.inputArea}>
                <TextInput placeholder={'Enter new password'} style={[Styles.input, {
                    backgroundColor: Theme.input_Background, color: Theme.input_Color
                }]} keyboardType='default' maxLength={6} placeholderTextColor={Theme.secondary_Text}/>
                <TextInput placeholder={'Confirm new password'} style={[Styles.input, {
                    backgroundColor: Theme.input_Background, color: Theme.input_Color
                }]} keyboardType='default' maxLength={6} placeholderTextColor={Theme.secondary_Text}/>
            </View>
            <TouchableOpacity onPress={() => router.push('/login')} style={{width: '80%'}}>
                <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.otpButton} >
                    <Text style={Styles.otpText}>CONTINUE</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    </ScrollView>)
}

export default Password_Reset;