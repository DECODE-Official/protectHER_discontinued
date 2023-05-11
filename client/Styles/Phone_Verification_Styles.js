import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    icon: {
        backgroundColor: 'rgba(0,157,255,0.3)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25,
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
        width: '80%',
        marginBottom: 50,
    },
    Form: {
        width: '80%',
    },
    inputArea: {
        marginBottom: 50,
        justifyContent: 'space-between'
    },
    input: {
        height: 70,
        borderRadius: 20,
        fontSize: 20,
        paddingHorizontal: 20,
        width: '100%',
    },
    otpButton: {
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        elevation: 20,
        shadowColor: '#009dff',
    },
    otpText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 25,
        width: '80%',
    },
    footerText: {
        fontSize: 15,
        textAlign: 'center',
        letterSpacing: 1,
    }
})

export default styles;