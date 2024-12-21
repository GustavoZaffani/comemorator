import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const resultStyles = StyleSheet.create({
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 20,
        fontSize: 16,
        color: Colors.loadingText,
    },
    messageContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: Colors.containerMessageResult,
        borderRadius: 10,
        padding: 20,
    },
    generatedMessage: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.messageResult,
    },
    button: {
        marginTop: 10,
        marginRight: 5,
        backgroundColor: Colors.buttonBackground,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: Colors.buttonLabel,
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
});

export default resultStyles;