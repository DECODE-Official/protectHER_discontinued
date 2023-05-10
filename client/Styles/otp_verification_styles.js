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
        marginBottom: 20,
        textTransform: 'uppercase',
        letterSpacing: 2
    }
})

export default Styles;