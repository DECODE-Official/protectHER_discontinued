import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from '../Styles/LoadingStyle';
import icon from '../assets/icon.png';
import LottieView from "lottie-react-native";

const LoadingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={icon}/>
            </View>
            <Text style={styles.text}>protectHER</Text>
            <LottieView source={require('../json/loading.json')} autoPlay loop
                                style={{height: 100, width: 100}}/>
            <Text>Loading...</Text>
            <Text style={styles.BottomText}>Ensure her Protection with just a tap</Text>
        </SafeAreaView>
    )
}

export default LoadingScreen;