import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from '../Styles/LoadingStyle';
import icon from '../assets/icon.png';
import LottieView from "lottie-react-native";
import {useTheme} from "../hooks/useTheme";

const LoadingScreen = () => {
    const Theme = useTheme();
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: Theme.background}]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={icon}/>
            </View>
            <Text style={[styles.text, {color: Theme.primary_Text}]}>protectHER</Text>
            <LottieView source={require('../json/loading.json')} autoPlay loop
                                style={{height: 100, width: 100}}/>
            <Text style={{color: Theme.secondary_Text}} >Loading...</Text>
            <Text style={[styles.BottomText, {color: Theme.secondary_Text}]}>Ensure her Protection with just a tap</Text>
        </SafeAreaView>
    )
}

export default LoadingScreen;