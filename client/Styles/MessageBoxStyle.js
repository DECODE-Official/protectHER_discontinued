import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    icon: {
        opacity: 0.5
    },
    Heading: {
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(122,122,122,0.5)',
        width: '100%',
        padding: 15,
        justifyContent: "center"
    },
    HeadingText: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    MessageBox: {
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        width: 400,
        borderRadius: 25
    },
    MessageText: {
        fontSize: 20,
        padding: 25,
        lineHeight: 30
    },
    ButtonSection: {
        height: 80,
        borderTopWidth: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: "flex-end",
        borderTopColor: 'rgba(122,122,122,0.5)'
    },
    MessageButton: {
        backgroundColor: '#26beff',
        elevation: 10,
        shadowColor: '#26beff',
        marginRight: 15,
        borderRadius: 5
    },
    MessageButtonText: {
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 20,
    }
})

export default Styles;