import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { generateMessage } from "@/services/ai/generator";
import { router } from "expo-router";
import styles from "@/styles/base";
import resultStyles from "@/styles/result";
import { Colors } from "@/constants/Colors";

export default function Result() {
    const { target, event, information } = useLocalSearchParams();

    const [generatedMessage, setGeneratedMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const generateResult = async () => {
        try {
            const result = await generateMessage(target, event, information);
            setGeneratedMessage(result);
        } catch (err) {
            alert(err);
        } finally {
            setIsLoading(false);
        }
    }

    const handleCopyToClipboard = async () => {
        await Clipboard.setStringAsync(generatedMessage);
    };

    const handleRestartButton = () => {
        router.dismissAll();
    }

    useEffect(() => {
        generateResult();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={resultStyles.loadingContainer}>
                    <ActivityIndicator size="large" color={Colors.loading} />
                    <Text style={resultStyles.loadingText}>Estamos gerando sua mensagem...</Text>
                </View>
            ) : (
                <View style={resultStyles.messageContainer}>
                    <Text style={resultStyles.generatedMessage}>{generatedMessage}</Text>

                    <View style={resultStyles.buttonContainer}>
                        <TouchableOpacity style={resultStyles.button} onPress={handleCopyToClipboard}>
                            <Text style={resultStyles.buttonText}>Copiar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={resultStyles.button} onPress={handleRestartButton}>
                            <Text style={resultStyles.buttonText}>Reiniciar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}