import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from 'expo-clipboard'; 
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { generateMessage } from "@/services/ai/generator";

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

    useEffect(() => {
        generateResult();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#4CAF50" />
                    <Text style={styles.loadingText}>Estamos gerando sua mensagem...</Text>
                </View>
            ) : (
                <View style={styles.messageContainer}>
                    <Text style={styles.generatedMessage}>{generatedMessage}</Text>

                    <TouchableOpacity style={styles.copyButton} onPress={handleCopyToClipboard}>
                        <Text style={styles.copyButtonText}>Copiar</Text>
                    </TouchableOpacity>
                </View>
            )}
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
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 20,
        fontSize: 16,
        color: "#555",
    },
    messageContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding: 20,
    },
    generatedMessage: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
    },
    copyButton: {
        marginTop: 10,
        backgroundColor: "#4CAF50",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    copyButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});