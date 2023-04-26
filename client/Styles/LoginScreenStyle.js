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
        color: '#363636',
        marginBottom: 25,

    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: 250,
        borderRadius: 250,
        position: 'relative',
        marginTop: 220,
        marginBottom: 25,
    },
    avatar: {
        width: 250,
        height: 250,
        borderRadius: 250,
        elevation: 50,
        position: 'absolute',
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 90,
        position: "absolute",
        opacity: 0.8,
        bottom: 0,
    },
    welcome: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: "80%",
        position: "absolute",
        top: 75,
    },
    welcomeText: {
        fontSize: 50,
        fontWeight: 'bold',
        width: "70%",
        color: '#808080'
    },
    welcomeEmoji: {
        fontSize: 60,
    },
    inputArea: {
        width: '80%',
        height: '30%',
        marginBottom: 50,
        justifyContent: 'space-between'
    },
    input: {
        height: 80,
        backgroundColor: '#f8f8f8',
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
        color: '#808080',
    },
    resetLink: {
        fontSize: 20,
        color: '#00B4FF',
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
    }
})

export default Styles;