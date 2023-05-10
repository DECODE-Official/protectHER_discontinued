import {Text, View, SafeAreaView, ScrollView, useColorScheme} from "react-native";
import {Stack} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import Styles from "../../Styles/otp_verification_styles";

const otp_verification = () => {
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
            <Text style={Styles.icon}>****</Text>
            <View style={Styles.HeadingSec} >
                <Text style={[Styles.heading, {color: Theme.primary_Text}]}>Verify otp</Text>
            </View>

        </SafeAreaView>
    </ScrollView>);
}

export default otp_verification;