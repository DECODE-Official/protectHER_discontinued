import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    Heading: {
        fontSize: 50,
        width: '80%',
        textAlign: 'left',
        fontWeight: 'bold',
        letterSpacing: 2
    },
    VideoSec: {
        position: 'relative',
        width: '80%',
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    Video: {
        height: 500,
        width: 250,
        resizeMode: 'contain',
        borderRadius: 25,
    },
    VideoLink: {
        position: "absolute",
        backgroundColor: "rgba(79,79,79,0.45)",
        width: '50%',
        display: "flex",
        alignItems: "center",
        borderRadius: 15,
        borderTopLeftRadius: 0,
        right: 0,
        bottom: 200,
    },
    VideoText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    VideoButton: {
        borderRadius: 10,
        marginBottom: 10
    },
    VideoButtonText: {
        fontSize: 15,
        padding: 10,
        fontWeight: 'bold',
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
    InfoText: {
        fontSize: 20,
        width: '50%',
        textAlign: "center",
        marginBottom: 50,
    },
    NextButton: {
        padding: 15,
        borderRadius: 50,
        elevation: 10,
        shadowColor: '#00B4FF',
    }
})

export default styles;