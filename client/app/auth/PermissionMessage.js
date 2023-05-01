import {SafeAreaView, View, ScrollView, Text, TouchableOpacity, useColorScheme, Button} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import Styles from "../../Styles/MessageBoxStyle";
import Icon from "react-native-vector-icons/Feather";

const PermissionMessage = (props) => {

    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;

    return (<SafeAreaView>
        <View style={{backgroundColor: Theme.background, borderRadius: 15 }}>
            <View style={Styles.MessageBox} >
                <View style={Styles.Heading}>
                    <Icon name="alert-triangle" color='#ff8282' size={45} style={Styles.icon}/>
                    <Text style={[Styles.HeadingText, {color: Theme.primary_Text}]}>Important!!</Text>
                </View>
                <ScrollView>
                    <Text style={[Styles.MessageText, {color: Theme.secondary_Text}]} >Dear users,{'\n'}
                        To ensure optimal functionality and experience of our app, we kindly request you to allow all
                        permissions for always use. Please be assured that we prioritize the privacy and security of our
                        users and any information collected will be kept strictly confidential. Thank you for your
                        cooperation.</Text>
                </ScrollView>
                <View style={Styles.ButtonSection} >
                    <TouchableOpacity style={Styles.MessageButton} onPress={props.onpress} >
                        <Text style={Styles.MessageButtonText} >I Understand</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>)
}

export default PermissionMessage;