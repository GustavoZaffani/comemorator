import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import indexStyles from "@/styles";
import styles from "@/styles/base";

export default function Index() {
  const handlePress = () => {
    router.push({
      pathname: "/choose_target"
    })
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/party.png")}
        style={indexStyles.image}
      />

      <Text style={indexStyles.appName}>Comemorator</Text>

      <Text style={indexStyles.description}>
        Gere mensagens de felicitações personalizadas para qualquer ocasião! Seja para aniversários,
        casamentos, ou qualquer evento especial, o Comemorator cria palavras especiais para tornar o momento ainda mais único.
      </Text>

      <TouchableOpacity style={indexStyles.button} onPress={handlePress}>
        <Text style={indexStyles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}