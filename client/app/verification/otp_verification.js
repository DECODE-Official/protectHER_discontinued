import {Text, View, SafeAreaView, ScrollView, useColorScheme, TextInput, TouchableOpacity} from "react-native";
import {Stack} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import Styles from "../../Styles/otp_verification_styles";
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";

const otp_verification = () => {

    const router = useRouter();

    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;
    return (<ScrollView
        contentContainerStyle={{
            justifyContent: 'center',
            height: '100%',
            backgroundColor: Theme.background
        }}>
        <SafeAreaView style={Styles.container}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <Text style={Styles.icon}>******</Text>
            <View style={Styles.HeadingSec}>
                <Text style={[Styles.heading, {color: Theme.primary_Text}]}>Verify otp</Text>
            </View>
            <View style={Styles.inputArea}>
                <TextInput placeholder={'Enter the six digit pin'} style={[Styles.input, {
                    backgroundColor: Theme.input_Background, color: Theme.input_Color
                }]} keyboardType='number-pad' maxLength={6} placeholderTextColor={Theme.secondary_Text}/>
            </View>
            <View style={Styles.infoSec} >
                <Text style={[Styles.inputInfo, {color: Theme.secondary_Text}]}>Didn't received any otp?</Text>
                <Text style={[Styles.inputInfo, {color: Theme.highlighted_Text}]} >Resend OTP</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/auth/Password_Reset')} style={{width: '80%'}}>
                <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.otpButton} >
                    <Text style={Styles.otpText}>CONTINUE</Text>
                </LinearGradient>
            </TouchableOpacity>

        </SafeAreaView>
    </ScrollView>);
}

export default otp_verification;