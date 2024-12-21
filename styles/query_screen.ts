import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const queryScreenStyles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: Colors.inputBorder,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: Colors.buttonBackground,
        width: "100%"
    },
    buttonText: {
        color: Colors.buttonLabel,
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default queryScreenStyles;