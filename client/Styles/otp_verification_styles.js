import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    icon: {
        fontSize: 30,
        color: 'rgb(0,157,255)',
        backgroundColor: 'rgba(0,157,255,0.3)',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        letterSpacing: 1,
        marginBottom: 25,
    },
    HeadingSec: {
        width: '80%',
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 50,
        textTransform: 'uppercase',
        letterSpacing: 2,
        textAlign: 'center',
    },
    inputArea: {
        width: '80%',
        marginBottom: 25,
    },
    input: {
        height: 70,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 20,
        textAlign: 'left',
    },
    infoSec: {
        flexDirection: 'row',
        marginBottom: 50,
    },
    inputInfo: {
        fontSize: 15,
        marginRight: 5,
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
    }
})

export default Styles;