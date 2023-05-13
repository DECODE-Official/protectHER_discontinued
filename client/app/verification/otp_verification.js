import {Text, View, SafeAreaView, ScrollView, useColorScheme, TextInput, TouchableOpacity} from "react-native";
import {Stack} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import Styles from "../../Styles/otp_verification_styles";
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";
import {Button, Input, Screen} from "../components/reusable_unauth";

const otp_verification = () => {

    const router = useRouter();

    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;
    return (
        <Screen>
            <Text style={Styles.icon}>******</Text>
            <View style={Styles.HeadingSec}>
                <Text style={[Styles.heading, {color: Theme.primary_Text}]}>Verify otp</Text>
            </View>
            <View style={Styles.inputArea}>
                <Input title={'Enter six digit otp'} maxLength={6} keyboard={'numeric'}/>
            </View>
            <View style={Styles.infoSec}>
                <Text style={[Styles.inputInfo, {color: Theme.secondary_Text}]}>Didn't received any otp?</Text>
                <Text style={[Styles.inputInfo, {color: Theme.highlighted_Text}]}>Resend OTP</Text>
            </View>

            <Button onpress={() => router.push('/auth/Password_Reset')} text={'Continue'}/>
        </Screen>);
}

export default otp_verification;