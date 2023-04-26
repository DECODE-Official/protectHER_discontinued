import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f6f6f6"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 2,
        color: "#4b4b4b",
    },
    imageContainer: {
        height: 100,
        width: 100,
        marginBottom: 25,
        elevation: 25,
        shadowColor: "#00affb"
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    BottomText: {
        fontSize: 20,
        fontWeight: "light",
        width: "50%",
        textAlign: "center",
        position: "absolute",
        bottom: 50,
        color: "#8a8a8a",
    },
    lottie: {
        height: 100,
        width: 100,
    }
})

export default styles;