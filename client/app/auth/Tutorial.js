import {Text, View, Image, TouchableOpacity, useColorScheme, SafeAreaView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Link, Stack} from "expo-router";
import Styles from "../../Styles/TutorialStyle";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import TutorialDark from '../../assets/images/TutorialDark.png'
import TutorialLight from '../../assets/images/Tutorial.png'
import Icon from "react-native-vector-icons/AntDesign";

const Tutorial = () => {

    let theme = useColorScheme();

    let Theme = theme === 'light' ? LIGHT : DARK;

    return (
        <SafeAreaView style={[Styles.container, {backgroundColor: Theme.background}]}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <Text style={[Styles.Heading, {color: Theme.primary_Text}]}>Welcome to ProtectHer</Text>
            <View style={Styles.VideoSec}>
                <Image source={theme === 'light' ? TutorialDark : TutorialLight} style={Styles.Video}/>
                <View style={Styles.VideoLink}>
                    <Text style={[Styles.VideoText, {color: '#fff'}]}>Want to learn How the app
                        Works</Text>
                    <TouchableOpacity>
                        <LinearGradient colors={['#fff', '#c9c9c9']} style={Styles.VideoButton}>
                            <Text style={Styles.VideoButtonText}>Watch Video</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[Styles.InfoText, {color: Theme.secondary_Text}]}>Ensure your safety with just one tap
                👆️ </Text>
            <Link href='/auth/register'>
                <LinearGradient colors={['#5fcfff', '#00a0e5']}  style={Styles.NextButton}>
                    <Icon name="arrowright" size={30} color="#fff"/>
                </LinearGradient>
            </Link>
        </SafeAreaView>
    )
}

export default Tutorial;