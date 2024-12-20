import QuestionScreen from "@/components/QuestionScreen";
import { router, useLocalSearchParams } from "expo-router";

export default function ChooseEvent() {
    const { target } = useLocalSearchParams();


    const handlePress = (answer: string) => {
        router.push({
          pathname: "/plus_information",
          params: { target, event: answer }
        })
      }
    
      return <QuestionScreen
        question="Qual é a comemoração?" 
        placeholderQuestion="Aniversário, Formatura, Gravidez..."
        labelButton="Continuar"
        imageSource={require("../assets/images/party.png")}
        handlePress={handlePress}/>;

}