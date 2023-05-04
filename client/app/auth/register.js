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

    // Formik Hook
    const {handleChange, handleBlur, handleSubmit, values} = useFormik({
        initialValues: {
            email: '', phone: '', password: '', confirmPassword: ''
        }
    })


    // Input array to create TextInput
    const Input = [{
        placeholder: "Email",
        secureTextEntry: false,
        _id: 1,
        value: values.email,
        type: 'email-address',
        name: 'email'
    }, {
        placeholder: "Phone No.",
        secureTextEntry: false,
        _id: 2,
        value: values.phone,
        type: 'phone-pad',
        name: 'phone'
    }, {
        placeholder: "Create Password",
        secureTextEntry: true,
        _id: 3,
        value: values.password,
        type: 'default',
        name: 'password'
    }, {
        placeholder: "Confirm Password",
        secureTextEntry: true,
        _id: 4,
        value: values.confirmPassword,
        type: 'default',
        name: 'confirmPassword'
    }]

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
                            {// Mapping the Input array to create TextInput for each item
                                Input.map((item) => {
                                    return (<TextInput key={item._id} style={[Styles.input, {
                                        backgroundColor: Theme.input_Background, color: Theme.input_Color
                                    }]} placeholderTextColor='#818181' placeholder={item.placeholder} value={item.value}
                                                       onChangeText={handleChange(item.name)} id={item._id} name={item.name}
                                                       keyboardType={item.type}
                                                       onBlur={handleBlur(item.name)}
                                                       secureTextEntry={item.secureTextEntry}/>)
                                })}
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