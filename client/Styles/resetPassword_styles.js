import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
        width: '80%',
        marginBottom: 50,
    },
    inputArea: {
        marginBottom: 50,
        justifyContent: 'space-between',
        width: '80%',
    },
    input: {
        height: 70,
        borderRadius: 20,
        fontSize: 20,
        paddingHorizontal: 20,
        marginBottom: 25,
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
    }
})

export default Styles;