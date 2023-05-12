import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
        width: '80%',
        marginBottom: 25,

    },
    inputArea: {
        width: '80%',
        justifyContent: 'space-between'
    },
    input: {
        height: 80,
        borderRadius: 20,
        gap: 30,
        fontSize: 20,
        paddingHorizontal: 20
    },
    resetPassword: {
        alignItems: 'center',
        marginBottom: 50
    },
    passwordText: {
        fontSize: 20,
    },
    resetLink: {
        fontSize: 20,
    },
    login: {
        width: '80%',
        marginBottom: 50,
    },
    loginButton: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 20,
        shadowColor: '#009dff'
    },
    loginText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
    register: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    registerText: {
        fontSize: 20,
        marginRight: 5,
        color: '#808080',
    },
    registerLink: {
        fontSize: 20,
        color: '#00B4FF',
    },
    Form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Styles;