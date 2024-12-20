import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ImageSourcePropType } from "react-native";

interface IQuestionScreen {
    question: string,
    placeholderQuestion: string,
    labelButton: string,
    imageSource: ImageSourcePropType,
    handlePress: (answer: string) => void,
}

const QuestionScreen = (props: IQuestionScreen) => {
    const { question, placeholderQuestion, labelButton, imageSource, handlePress } = props;

    const [answerValue, setAnswerValue] = useState<string>("");

    const handleButtonClick = () => {
        if (answerValue.trim() === "") {
            Alert.alert("Erro", "Por favor, preencha a resposta antes de continuar.");
        } else {
            handlePress(answerValue);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={imageSource}
                style={styles.image} />

            <Text style={styles.question}>{question}</Text>

            <TextInput
                style={styles.input}
                value={answerValue}
                onChangeText={setAnswerValue}
                placeholderTextColor="#b5b5b5"
                placeholder={placeholderQuestion} />

            <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                <Text>{labelButton}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
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
        borderColor: "#ccc",
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
        backgroundColor: "#efefef",
        width: "100%"
    }
});

export default QuestionScreen;