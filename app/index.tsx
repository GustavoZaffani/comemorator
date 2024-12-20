import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

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
        style={styles.image}
      />

      <Text style={styles.appName}>Comemorator</Text>

      <Text style={styles.description}>
        Gere mensagens de felicitações personalizadas para qualquer ocasião! Seja para aniversários,
        casamentos, ou qualquer evento especial, o Comemorator cria palavras especiais para tornar o momento ainda mais único.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});