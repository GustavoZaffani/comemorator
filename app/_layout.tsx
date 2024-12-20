import { Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title: "Bem vindo"}}></Stack.Screen>
    <Stack.Screen name="choose_target" options={{title: "Escolha o destinatário"}}></Stack.Screen>
    <Stack.Screen name="choose_event" options={{title: "Escolha a comemoração"}}></Stack.Screen>
    <Stack.Screen name="plus_information" options={{title: "Informe mais detalhes"}}></Stack.Screen>
    <Stack.Screen name="result" options={{title: "Resultado", headerRight: headerRightResult}}></Stack.Screen>
  </Stack>;
}

const headerRightResult = () => {
  return (
    <Ionicons
        name="checkmark"
        size={25}
        color="black"
        style={styles.headerRight}
        onPress={() => router.dismissAll()}
      />
  )
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10
  }
})