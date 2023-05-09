import {View, Text, ScrollView, SafeAreaView, useColorScheme, TextInput, TouchableOpacity} from "react-native";
import {Stack} from "expo-router";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import Styles from "../../Styles/Phone_Verification_Styles";
import Icon from 'react-native-vector-icons/Feather';
import {Formik} from "formik";
import {loginSchema} from "../schemas";
import {LinearGradient} from "expo-linear-gradient";

const Phone_No_Verification = () => {
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;
    return (<ScrollView
        contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
        <SafeAreaView style={Styles.container}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <View style={Styles.icon}>
                <Icon name="unlock" size={25} color="#009dff"/>
            </View>
            <Text style={[Styles.heading, {color: Theme.primary_Text}]}>Forgot Password?</Text>
            <Formik initialValues={{
                email: '', phone: '', password: ''
            }} onSubmit={values => console.log(values)} validationSchema={loginSchema}>
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (<View style={Styles.Form}>
                    <View style={Styles.inputArea}>
                        <TextInput
                            style={[Styles.input, {
                                backgroundColor: Theme.input_Background, color: Theme.input_Color
                            }]}
                            placeholder='Enter your Phone no.'
                            placeholderTextColor={Theme.secondary_Text} onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')} value={values.phone}/>
                        {errors.phone && touched.phone ?
                            <Text style={{color: 'red', fontWeight: '400'}}>{errors.phone}</Text> : null}
                    </View>
                    <TouchableOpacity onPress={handleSubmit}>
                        <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.otpButton}>
                            <Text style={Styles.otpText}>CONTINUE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>)}
            </Formik>
            <View style={Styles.footer} >
                <Text style={[Styles.footerText, {color: Theme.secondary_Text}]} >Forgot your password? Don’t Worry we got you covered just verify yourself & follow the guided steps to reset your password</Text>
            </View>
        </SafeAreaView>
    </ScrollView>)
}

export default Phone_No_Verification;