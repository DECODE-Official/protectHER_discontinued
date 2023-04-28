import {View, SafeAreaView, Text, useColorScheme, Button, PermissionsAndroid} from "react-native";
import {Stack} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import {Camera, CameraType} from "expo-camera";
import {useState} from "react";
import * as Location from "expo-location";

const Permissions = () => {

    const [type, setType] = useState(CameraType.back);
    const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
    const [audioPermission, getAudioPermission] = Camera.useMicrophonePermissions();
    const [locationPermission, requestLocationPermission] = Location.useForegroundPermissions();

    console.log(cameraPermission.status)

    //------------------------------------------------------------------------------------

    // Getting Theme from device settings
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;

    return (<SafeAreaView
        style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
        <Stack.Screen options={{
            headerShown: false
        }}/>
        <Button title={'Request Camera Permission'} onPress={() => requestCameraPermission()}/>
        <Button title={'Request Audio Permission'} onPress={() => getAudioPermission()}/>
        <Button title={'Request Location Permission'} onPress={() => requestLocationPermission()}/>
        <View>
        </View>
    </SafeAreaView>)
}

export default Permissions;