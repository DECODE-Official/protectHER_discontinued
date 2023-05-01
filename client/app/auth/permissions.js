import {View, SafeAreaView, Text, useColorScheme, Button, TouchableOpacity} from "react-native";
import {Link, Stack, useRouter} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import {Camera, CameraType} from "expo-camera";
import {useEffect, useState} from "react";
import * as Location from "expo-location";
import Styles from "../../Styles/PermissionsStyle"
import Icon from "react-native-vector-icons/Ionicons"
import {LinearGradient} from "expo-linear-gradient";
import PermissionMessage from "./PermissionMessage";


const Permissions = () => {

    const Router = useRouter();
    const [allowed, setAllowed] = useState(false);
    const [message, setMessage] = useState(false)

    // setting show of message to specify the need for permissions
    useEffect(() => {
        setTimeout(() => {
            setMessage(true)
        }, 500)
    }, [])


    // Permissions
    const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
    const [audioPermission, requestAudioPermission] = Camera.useMicrophonePermissions();
    const [locationPermission, requestLocationPermission] = Location.useForegroundPermissions();
    const [camera, setCamera] = useState();
    const [audio, setAudio] = useState();
    const [location, setLocation] = useState();

    let pcamrea = Camera.getCameraPermissionsAsync();
    let paudio = Camera.getMicrophonePermissionsAsync();
    let plocation = Location.getForegroundPermissionsAsync();

    (async () => {
        setCamera((await pcamrea).status);
        setAudio((await paudio).status);
        setLocation((await plocation).status);
    })();

    async function routeToRegister() {
        if (camera === 'granted' && audio === 'granted' && location === 'granted') {
            Router.push('/auth/register');
        } else {
            alert("Please grant all permissions to continue");
        }
    }

    // Permissions Functions
    async function checkCameraPermissions() {
        let CameraPermission = await cameraPermission.status;
        if (CameraPermission !== 'granted') {
            await requestCameraPermission();
        }
        CameraPermission === 'granted' ? alert("permission already granted for camera") : console.log("permission denied for camera");
    }

    async function checkAudioPermissions() {
        let AudioPermission = await audioPermission.status;
        if (AudioPermission !== 'granted') {
            await requestAudioPermission();
        }
        AudioPermission === 'granted' ? alert("permission already granted for audio") : console.log("permission denied for audio");
    }

    async function checkLocationPermissions() {
        let LocationPermission = await locationPermission.status;
        if (LocationPermission !== 'granted') {
            await requestLocationPermission();
        }
        LocationPermission === 'granted' ? alert("permission already granted for location") : console.log("permission denied for location");
    }

    // Array for Permissions Mapping
    const Permissions = [{
        icon: "location-sharp",
        text: "Grant Location Permission",
        press: () => checkLocationPermissions(),
        _id: 1,
        condition: location === 'granted'
    }, {
        icon: "camera",
        text: "Grant Camera Permissions",
        press: () => checkCameraPermissions(),
        _id: 2,
        condition: camera === 'granted'
    }, {
        icon: "mic",
        text: "Grant Microphone Permissions",
        press: () => checkAudioPermissions(),
        _id: 3,
        condition: audio === 'granted'
    }]

    //------------------------------------------------------------------------------------

    // Getting Theme from device settings
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;

    return (<SafeAreaView
        style={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
        <Stack.Screen options={{
            headerShown: false
        }}/>
        {message ? <View style={Styles.popupMessage}>
            <PermissionMessage onpress={() => setMessage(false)} />
        </View> : ''}
        <View style={Styles.TitleSection}>
            <Text style={[Styles.Title, {color: Theme.primary_Text}]}>Grant Permissions</Text>
        </View>
        <View style={Styles.Details}>
            <Text style={[Styles.DetailsText, {color: Theme.secondary_Text, marginBottom: 10}]}>We will need your
                permissions to Access some features.</Text>
            <Link href="#">
                <Text style={[Styles.DetailsText, {color: Theme.highlighted_Text}]}>Why?</Text>
            </Link>
        </View>
        <View style={Styles.PermissionSection}>
            {Permissions.map((item) => {
                return (<View key={item._id} style={Styles.Permission}>
                        <Icon name={item.icon} size={40} color={Theme.icon_Color}/>
                        <Text style={[Styles.PermissionText, {color: Theme.secondary_Text}]}>{item.text}</Text>
                        <TouchableOpacity onPress={item.press}>
                            <LinearGradient colors={['#5fcfff', '#00a0e5']} style={[Styles.PermissionButton]}>
                                {item.condition === true ?
                                    <Icon name="checkmark" style={Styles.ButtonText} size={20} color="#fff"/> :
                                    <Text style={[Styles.ButtonText, {color: '#fff'}]}>Allow</Text>}
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>)
            })

            }
        </View>
        <TouchableOpacity onPress={() => routeToRegister()} style={Styles.Register}>
            <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.RegisterButton}>
                <Text style={Styles.RegisterText}>Continue</Text>
            </LinearGradient>
        </TouchableOpacity>
    </SafeAreaView>)
}

export default Permissions;