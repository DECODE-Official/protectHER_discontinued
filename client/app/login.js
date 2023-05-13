import {View, Text, SafeAreaView, TextInput, ScrollView, useColorScheme} from "react-native";
import Styles from '../Styles/LoginScreenStyle';
import {Link, Stack} from "expo-router";
import {LIGHT, DARK} from "../Styles/GlobalStyles";
import {Formik} from "formik";
import {Gstyles} from "../Styles/GlobalStyles";
import {loginSchema} from "./schemas";
import {Button, Input, Heading} from "./components/reusable_unauth";
import {themeProvider} from "./themProvider";

const Login = () => {

    // Get the current theme
    let Theme = themeProvider();

    return (<ScrollView
        contentContainerStyle={{justifyContent: 'center', height: '100%', backgroundColor: Theme.background}}>
        <SafeAreaView style={Styles.container}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <Heading heading={'Login'} />
            <Formik initialValues={{
                email: '', phone: '', password: ''
            }} onSubmit={values => console.log(values)} validationSchema={loginSchema}>
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (<View style={Styles.Form}>
                    <View style={[Gstyles.inputArea, {height: 200}]}>
                        <Input title={'Phone No.'} keyboard={'phone-pad'}
                               textChange={handleChange('phone')} handleblur={handleBlur('phone')}
                               values={values.phone}/>
                        {errors.phone && touched.phone ?
                            <Text style={{color: 'red', fontWeight: '100'}}>{errors.phone}</Text> : null}
                        <Input title={'password'} keyboard={'default'}
                               textChange={handleChange('password')} handleblur={handleBlur('password')}
                               values={values.password}/>
                        {errors.password && touched.password ?
                            <Text style={{color: 'red', fontWeight: '100'}}>{errors.password}</Text> : null}
                    </View>
                    <Button text='Login' onpress={handleSubmit}/>
                </View>)}
            </Formik>
            <View style={Styles.resetPassword}>
                <Text style={[Styles.passwordText, {color: Theme.secondary_Text}]}>Forgot Your Password? </Text>
                <Link href="/verification/Phone_No_Verification"
                      style={[Styles.resetLink, {color: Theme.highlighted_Text}]}>Reset now</Link>
            </View>
            <View style={Styles.register}>
                <Text style={[Styles.registerText, {color: Theme.secondary_Text}]}>Don't have an account? </Text>
                <Link href='/auth/Tutorial' style={[Styles.registerLink, {color: Theme.highlighted_Text}]}>Register
                    Now</Link>
            </View>
        </SafeAreaView>
    </ScrollView>)
}

export default Login;