import {View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, useColorScheme} from "react-native";
import Styles from '../Styles/LoginScreenStyle';
import {LinearGradient} from "expo-linear-gradient";
import {Link, Stack} from "expo-router";
import {LIGHT, DARK} from "../Styles/GlobalStyles";
import {Formik} from "formik";
import {loginSchema} from "./schemas";

const Login = () => {

    // Get the current theme
    const theme = useColorScheme();
    const Theme = theme === 'light' ? LIGHT : DARK;

    return (<ScrollView
        contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
        <SafeAreaView style={Styles.container}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <Text style={[Styles.text, {color: Theme.primary_Text}]}>Login</Text>
            <Formik initialValues={{
                email: '', phone: '', password: ''
            }} onSubmit={values => console.log(values)} validationSchema={loginSchema}>
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (<View style={Styles.Form}>
                    <View style={Styles.inputArea}>
                        <TextInput
                            style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                            placeholder='Phone No.'
                            placeholderTextColor={Theme.secondary_Text} onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')} value={values.phone}/>
                        {errors.phone && touched.phone ?
                            <Text style={{color: 'red', fontWeight: '100'}}>{errors.phone}</Text> : null}
                        <TextInput
                            style={[Styles.input, {backgroundColor: Theme.input_Background, color: Theme.input_Color}]}
                            placeholder='Password' placeholderTextColor={Theme.secondary_Text} secureTextEntry={true}
                            onChangeText={handleChange('password')} onBlur={handleBlur('password')}
                            value={values.password}/>
                        {errors.password && touched.password ?
                            <Text style={{color: 'red', fontWeight: '100'}}>{errors.password}</Text> : null}
                    </View>
                    <TouchableOpacity style={Styles.login} onPress={handleSubmit}>
                        <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.loginButton}>
                            <Text style={Styles.loginText}>LOGIN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>)}
            </Formik>
            {/*<View style={Styles.inputArea}>*/}
            {/*    {// Map the input array to create the input fields*/}
            {/*        Input.map((item) => {*/}
            {/*            return (<TextInput key={item._id} style={[Styles.input, {*/}
            {/*                    backgroundColor: Theme.input_Background, color: Theme.input_Color*/}
            {/*                }]} placeholderTextColor='#808080' placeholder={item.placeholder}*/}
            {/*                               secureTextEntry={item.secureTextEntry}/>)*/}
            {/*        })}*/}
            {/*</View>*/}
            <View style={Styles.resetPassword}>
                <Text style={[Styles.passwordText, {color: Theme.secondary_Text}]}>Forgot Your Password? </Text>
                <Link href="/" style={[Styles.resetLink, {color: Theme.highlighted_Text}]}>Reset now</Link>
            </View>
            {/*<TouchableOpacity style={Styles.login}>*/}
            {/*    <LinearGradient colors={['#5fcfff', '#00a0e5']} style={Styles.loginButton}>*/}
            {/*        <Text style={Styles.loginText}>Login</Text>*/}
            {/*    </LinearGradient>*/}
            {/*</TouchableOpacity>*/}
            <View style={Styles.register}>
                <Text style={[Styles.registerText, {color: Theme.secondary_Text}]}>Don't have an account? </Text>
                <Link href='/auth/Tutorial' style={[Styles.registerLink, {color: Theme.highlighted_Text}]}>Register
                    Now</Link>
            </View>
        </SafeAreaView>
    </ScrollView>)
}

export default Login;