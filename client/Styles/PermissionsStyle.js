import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    Title: {
        fontSize: 60,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    TitleSection: {
        width: '80%',
        marginBottom: 50
    },
    Details: {
        width: '80%',
        alignItems: 'center',
        marginBottom: 75
    },
    DetailsText: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: "center",
        letterSpacing: 1,
    },
    PermissionSection: {
        width: '80%',
        alignItems: "center",
        height: '20%',
        justifyContent: "space-between",
        marginBottom: 75
    },
    Permission: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
    },
    ButtonText: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },
    PermissionButton: {
        borderRadius: 10,
        elevation: 15,
        shadowColor: '#0092ce'
    },
    PermissionText: {
        fontSize: 20,
        width: '50%'
    },
    Register: {
        width: '80%',
        justifyContent: "center",
    },
    RegisterButton: {
        borderRadius: 20,
        height: 70,
        justifyContent: "center",
        elevation: 20,
        shadowColor: '#009dff'
    },
    RegisterText: {
        textAlign: "center",
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#fff'
    },
    popupMessage: {
        position: "absolute",
        zIndex: 100,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(23,23,23,0.56)',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    }
})

export default Styles;