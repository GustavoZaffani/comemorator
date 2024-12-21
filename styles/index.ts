import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.title,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.subtitle,
        marginBottom: 30,
    },
    button: {
        backgroundColor: Colors.buttonBackground,
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    buttonText: {
        color: Colors.buttonLabel,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default indexStyles;