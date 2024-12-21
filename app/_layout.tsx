import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: "Bem vindo" }}></Stack.Screen>
    <Stack.Screen name="choose_target" options={{ title: "Escolha o destinatário" }}></Stack.Screen>
    <Stack.Screen name="choose_event" options={{ title: "Escolha a comemoração" }}></Stack.Screen>
    <Stack.Screen name="plus_information" options={{ title: "Informe mais detalhes" }}></Stack.Screen>
    <Stack.Screen name="result" options={{ title: "Resultado" }}></Stack.Screen>
  </Stack>;
}