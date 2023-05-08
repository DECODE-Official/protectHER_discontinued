import {View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, useColorScheme} from "react-native";
import {Link, Stack} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import Styles from "../../Styles/RegisterStyle";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import {Formik} from "formik";
import {registerSchema} from "../schemas";

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
            }} onSubmit={values => console.log(values)} validationSchema={registerSchema}>
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (<View style={Styles.Form}>
                    <View style={Styles.inputArea}>
                        <TextInput style={[Styles.input, {
                            backgroundColor: Theme.input_Background, color: Theme.input_Color
                        }]} placeholder='Email'
                                   placeholderTextColor={Theme.secondary_Text} onChangeText={handleChange('email')}
                                   onBlur={handleBlur('email')} value={values.email}/>
                        {errors.email && touched.email ?
                            <Text style={{color: 'red', position: 'relative', top: 0}}>{errors.email}</Text> : null}
                        <TextInput style={[Styles.input, {
                            backgroundColor: Theme.input_Background, color: Theme.input_Color
                        }]} placeholder='Phone'
                                   placeholderTextColor={Theme.secondary_Text} onChangeText={handleChange('phone')}
                                   onBlur={handleBlur('phone')} value={values.phone}/>
                        {errors.phone && touched.phone ?
                            <Text style={{color: 'red', position: 'relative', top: 0}}>{errors.phone}</Text> : null}
                        <TextInput style={[Styles.input, {
                            backgroundColor: Theme.input_Background, color: Theme.input_Color
                        }]} placeholder='Create Password'
                                   placeholderTextColor={Theme.secondary_Text}
                                   onChangeText={handleChange('password')} secureTextEntry={true}
                                   onBlur={handleBlur('password')} value={values.password}/>
                        {errors.password && touched.password ?
                            <Text style={{color: 'red', position: 'relative', top: 0}}>{errors.password}</Text> : null}
                        <TextInput style={[Styles.input, {
                            backgroundColor: Theme.input_Background, color: Theme.input_Color
                        }]} placeholder='Comfirm Password'
                                   placeholderTextColor={Theme.secondary_Text}
                                   onChangeText={handleChange('confirmPassword')}
                                   onBlur={handleBlur('confirmPassword')} value={values.confirmPassword}/>
                        {errors.confirmPassword && touched.confirmPassword ? <Text
                            style={{color: 'red', position: 'relative', top: 0}}>{errors.confirmPassword}</Text> : null}
                    </View>
                    <TouchableOpacity style={Styles.register} onPress={handleSubmit}>
                        <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.registerButton}>
                            <Text style={Styles.registerText}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>)}
            </Formik>

            <View style={Styles.login}>
                <Text style={[Styles.loginText, {color: Theme.secondary_Text}]}>Already have an account? </Text>
                <Link href='/login' style={[Styles.loginLink, {color: Theme.highlighted_Text}]}>Login Now</Link>
            </View>
        </SafeAreaView>
    </ScrollView>)
}

export default register