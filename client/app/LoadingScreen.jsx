import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from '../Styles/LoadingScreenStyle';

const LoadingScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} >Hello world</Text>
        </SafeAreaView>
    )
}

export default LoadingScreen;