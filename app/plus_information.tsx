import QuestionScreen from "@/components/QuestionScreen";
import { router, useLocalSearchParams } from "expo-router";

export default function PlusInformation() {
  const { target, event } = useLocalSearchParams();

  const handlePress = (answer: string) => {
    router.push({
      pathname: "/result",
      params: { target, event, information: answer }
    })
  }
    
      return <QuestionScreen
        question="Mais alguma informação importante?" 
        placeholderQuestion="É meu melhor amigo... Conheço a 10 anos..."
        labelButton="Gerar mensagem"
        imageSource={require("../assets/images/info.png")}
        handlePress={handlePress}/>;

}