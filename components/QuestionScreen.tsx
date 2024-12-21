import { Colors } from "@/constants/Colors";
import styles from "@/styles/base";
import queryScreenStyles from "@/styles/query_screen";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
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
                style={queryScreenStyles.image} />

            <Text style={queryScreenStyles.question}>{question}</Text>

            <TextInput
                style={queryScreenStyles.input}
                value={answerValue}
                onChangeText={setAnswerValue}
                placeholderTextColor={Colors.placeholder}
                placeholder={placeholderQuestion} />

            <TouchableOpacity style={queryScreenStyles.button} onPress={handleButtonClick}>
                <Text style={queryScreenStyles.buttonText}>{labelButton}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default QuestionScreen;