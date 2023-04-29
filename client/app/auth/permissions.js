import {View, SafeAreaView, Text, useColorScheme, Button} from "react-native";
import {Stack} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import {Camera, CameraType} from "expo-camera";
import {useState} from "react";
import * as Location from "expo-location";

const Permissions = () => {
    // Camera
    const [type, setType] = useState(CameraType.back);

    // Permissions
    const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
    const [audioPermission, requestAudioPermission] = Camera.useMicrophonePermissions();
    const [locationPermission, requestLocationPermission] = Location.useForegroundPermissions();

    // Permissions Functions
    async function checkCameraPermissions() {
        let CameraPermission = await cameraPermission.status;
        if (CameraPermission !== 'granted') {
            await requestCameraPermission();
        }
        CameraPermission === 'granted' ? console.log("permission granted for camera") : console.log("permission denied for camera");
    }

    async function checkAudioPermissions() {
        let AudioPermission = await audioPermission.status;
        if (AudioPermission !== 'granted') {
            await requestAudioPermission();
        }
        AudioPermission === 'granted' ? console.log("permission granted for audio") : console.log("permission denied for audio");
    }

    async function checkLocationPermissions() {
        let LocationPermission = await locationPermission.status;
        if (LocationPermission !== 'granted') {
            await requestLocationPermission();
        }
        LocationPermission === 'granted' ? console.log("permission granted for location") : console.log("permission denied for location");
    }

    //------------------------------------------------------------------------------------

    // Getting Theme from device settings
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;

    return (<SafeAreaView
        style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
        <Stack.Screen options={{
            headerShown: false
        }}/>
        <Button title={'Request Camera Permission'} onPress={() => checkCameraPermissions()}/>
        <Button title={'Request Audio Permission'} onPress={() => checkAudioPermissions()}/>
        <Button title={'Request Location Permission'} onPress={() => checkLocationPermissions()}/>
        <View>
        </View>
    </SafeAreaView>)
}

export default Permissions;