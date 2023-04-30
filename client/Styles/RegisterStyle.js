import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    view: {
        height: '100%',
    },
    container: {
        alignItems: 'center',
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
        height: 400,
        justifyContent: "space-between",
        marginBottom: 50,
    },
    input: {
        height: 70,
        backgroundColor: '#f8f8f8',
        borderRadius: 20,
        fontSize: 20,
        paddingHorizontal: 20
    },
    register: {
        width: '80%',
        marginBottom: 50,
    },
    registerButton: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 20,
        shadowColor: '#009dff'
    },
    registerText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
    login: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginText: {
        fontSize: 20,
        marginRight: 5,
    },
    loginLink: {
        fontSize: 20,
    }
})

export default Styles;