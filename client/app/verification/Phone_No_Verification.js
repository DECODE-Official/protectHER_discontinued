import {View, Text} from "react-native";
import {useRouter} from "expo-router";
import Styles from "../../Styles/Phone_Verification_Styles";
import Icon from 'react-native-vector-icons/Feather';
import {Formik} from "formik";
import {Button, Input, Screen} from "../components/reusable_unauth";
import {useTheme} from "../../hooks/useTheme";

const Phone_No_Verification = () => {

    const Theme = useTheme();

    const router = useRouter();

    function phoneVerification() {
        router.push('/verification/otp_verification')
    }

    return (
        <Screen>
            <View style={Styles.icon}>
                <Icon name="unlock" size={25} color="#009dff"/>
            </View>
            <Text style={[Styles.heading, {color: Theme.primary_Text}]}>Forgot Password?</Text>
            <Formik initialValues={{
                phone: ''
            }}>
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (<View style={Styles.Form}>
                    <View style={Styles.inputArea}>
                        <Input title={'Enter your phone No.'} keyboard={'phone-pad'}
                               textChange={handleChange('phone')} handleblur={handleBlur('phone')}
                               values={values.phone}/>
                        {errors.phone && touched.phone ?
                            <Text style={{color: 'red', fontWeight: '400'}}>{errors.phone}</Text> : null}
                    </View>
                    <Button text={'continue'} onpress={() => phoneVerification()}/>
                </View>)}
            </Formik>
            <View style={Styles.footer}>
                <Text style={[Styles.footerText, {color: Theme.secondary_Text}]}>Forgot your password? Don’t Worry we
                    got you covered just verify yourself & follow the guided steps to reset your password</Text>
            </View>
        </Screen>)
}

export default Phone_No_Verification;