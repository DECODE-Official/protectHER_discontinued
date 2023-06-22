import {View, Text} from "react-native";
import Styles from '../Styles/LoginScreenStyle';
import {Link} from "expo-router";
import {Formik} from "formik";
import {Gstyles} from "../Styles/GlobalStyles";
import {loginSchema} from "./schemas";
import {Button, Input, Heading, Screen} from "./components/reusable_unauth";
import {useTheme} from "../hooks/useTheme";

const Login = () => {

    // Get the current theme
    let Theme = useTheme();

    return (<Screen>
        <Heading heading={'Login'}/>
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
                <View style={Styles.resetPassword}>
                    <Text style={[Styles.passwordText, {color: Theme.secondary_Text}]}>Forgot Your Password? </Text>
                    <Link href="/verification/Phone_No_Verification"
                          style={[Styles.resetLink, {color: Theme.highlighted_Text}]}>Reset now</Link>
                </View>
                <Button text='Login' onpress={handleSubmit}/>
            </View>)}
        </Formik>

        <View style={Styles.register}>
            <Text style={[Styles.registerText, {color: Theme.secondary_Text}]}>Don't have an account? </Text>
            <Link href='/auth/Tutorial' style={[Styles.registerLink, {color: Theme.highlighted_Text}]}>Register
                Now</Link>
        </View>
    </Screen>)
}

export default Login;