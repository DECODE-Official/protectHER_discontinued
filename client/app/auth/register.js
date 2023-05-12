import {View, Text, SafeAreaView, ScrollView, TextInput, useColorScheme} from "react-native";
import {Link, Stack} from "expo-router";
import {Gstyles} from "../../Styles/GlobalStyles";
import Styles from "../../Styles/RegisterStyle";
import {LIGHT, DARK} from "../../Styles/GlobalStyles";
import {Formik} from "formik";
import {registerSchema} from "../schemas";
import {Button, Input, Heading} from "../components/reusable_unauth";

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
            <Heading heading={'Register'} />
            <Formik initialValues={{
                email: '', phone: '', password: '', confirmPassword: ''
            }} onSubmit={values => console.log(values)} validationSchema={registerSchema}>
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (<View style={Styles.Form}>
                    <View style={[Gstyles.inputArea, {height: 400}]}>
                        {/*Name*/}
                        <Input title='Email' keyboard='email-address' textChange={handleChange('email')}
                               handleblur={handleBlur('email')} values={values.email}/>
                        {errors.email && touched.email ?
                            <Text style={{color: 'red', position: 'relative', top: 0}}>{errors.email}</Text> : null}

                        {/*Phone*/}
                        <Input title='Phone No.' keyboard={'number-pad'} textChange={handleChange('phone')}
                               handleblur={handleBlur('phone')} values={values.phone}/>
                        {errors.phone && touched.phone ?
                            <Text style={{color: 'red', position: 'relative', top: 0}}>{errors.phone}</Text> : null}

                        {/*Password*/}
                        <Input title='Create Password' keyboard={'default'} textChange={handleChange('password')}
                               handleblur={handleBlur('password')} values={values.password}/>
                        {errors.password && touched.password ?
                            <Text style={{color: 'red', position: 'relative', top: 0}}>{errors.password}</Text> : null}

                        {/*Confirm Password*/}
                        <Input title='Confirm Password' keyboard={'default'}
                               textChange={handleChange('confirmPassword')}
                               handleblur={handleBlur('confirmPassword')} values={values.confirmPassword}/>
                        {errors.confirmPassword && touched.confirmPassword ? <Text
                            style={{color: 'red', position: 'relative', top: 0}}>{errors.confirmPassword}</Text> : null}
                    </View>
                    <Button text='Register' onpress={handleSubmit}/>
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