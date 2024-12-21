import QuestionScreen from "@/components/QuestionScreen";
import { router } from "expo-router";

export default function ChooseTarget() {
  const handlePress = (answer: string) => {
    router.push({
      pathname: "/choose_event",
      params: { target: answer }
    })
  }

  return <QuestionScreen
    question="Para quem será a mensagem?"
    placeholderQuestion="Amigo(a), Tio(a), Irmã(o), Pai, Mãe..."
    labelButton="Continuar"
    imageSource={require("../assets/images/target_people.png")}
    handlePress={handlePress} />;
}