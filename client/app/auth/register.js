import {View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, useColorScheme} from "react-native";
import {Link, Stack} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import Styles from "../../Styles/RegisterStyle";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import {Formik, useFormik} from "formik";

const register = () => {


    // Getting the theme from device
    let theme = useColorScheme();
    let Theme = theme === 'light' ? LIGHT : DARK;


    return (<ScrollView style={Styles.view} contentContainerStyle={{
        justifyContent: 'center', height: '100%', backgroundColor: Theme.background
    }}>
        <SafeAreaView style={Styles.container}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <Text style={[Styles.text, {color: Theme.primary_Text}]}>Register</Text>
            <Formik initialValues={{
                email: '', phone: '', password: '', confirmPassword: ''
            }} onSubmit={values => console.log(values)}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View style={Styles.Form}>
                        <View style={Styles.inputArea}>
                            <TextInput style={[Styles.input, {
                                backgroundColor: Theme.input_Background,
                                color: Theme.input_Color
                            }]} placeholder='Email'
                                       placeholderTextColor={Theme.secondary_Text} onChangeText={handleChange('email')}
                                       onBlur={handleBlur('email')} value={values.email}/>
                            <TextInput style={[Styles.input, {
                                backgroundColor: Theme.input_Background,
                                color: Theme.input_Color
                            }]} placeholder='Phone'
                                       placeholderTextColor={Theme.secondary_Text} onChangeText={handleChange('phone')}
                                       onBlur={handleBlur('phone')} value={values.phone}/>
                            <TextInput style={[Styles.input, {
                                backgroundColor: Theme.input_Background,
                                color: Theme.input_Color
                            }]} placeholder='Create Password'
                                       placeholderTextColor={Theme.secondary_Text}
                                       onChangeText={handleChange('password')} secureTextEntry={true}
                                       onBlur={handleBlur('password')} value={values.password}/>
                            <TextInput style={[Styles.input, {
                                backgroundColor: Theme.input_Background,
                                color: Theme.input_Color
                            }]} placeholder='Comfirm Password'
                                       placeholderTextColor={Theme.secondary_Text}
                                       onChangeText={handleChange('confirm password')}
                                       onBlur={handleBlur('confirm password')} value={values.confirmPassword}/>
                        </View>
                        <TouchableOpacity style={Styles.register} onPress={handleSubmit}>
                            <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.registerButton}>
                                <Text style={Styles.registerText}>Register</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>

            <View style={Styles.login}>
                <Text style={[Styles.loginText, {color: Theme.secondary_Text}]}>Already have an account? </Text>
                <Link href='/login' style={[Styles.loginLink, {color: Theme.highlighted_Text}]}>Login Now</Link>
            </View>
        </SafeAreaView>
    </ScrollView>)
}

export default register