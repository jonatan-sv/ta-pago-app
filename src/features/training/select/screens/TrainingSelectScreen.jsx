import Colors from "@consts/Colors";
import AppFrame from "@shared/components/AppFrame";
import { StyleSheet } from "react-native";
import Training from "../components/Training";
import WeekProgress from "../components/WeekProgress";

export default function TrainingSelectScreen() {
  const treinos = [
    {
      id: "A",
      tipo: "Superiores",
      muscles: ["Abdômen", "Bíceps", "Antebraço", "Costa"],
      intensity: "Moderado",
    },
    {
      id: "B",
      tipo: "Inferiores",
      muscles: ["Perna - Posterior", "Perna", "Panturrilha", "Quadríceps"],
      intensity: "Rigoroso",
    },
    {
      id: "C",
      tipo: "Superiores",
      muscles: ["Abdômen", "Ombro", "Tríceps", "Costa"],
      intensity: "Leve",
    },
    {
      id: "D",
      tipo: "Inferiores",
      muscles: ["Glúteo", "Perna - Posterior", "Panturrilha"],
      intensity: "Moderado",
    },
    {
      id: "E",
      tipo: "Superiores",
      muscles: ["Abdômen", "Bíceps", "Ombro", "Costa"],
      intensity: "Rigoroso",
    },
  ];

  return (
    <AppFrame>
      {/*
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <CircularButton
            icon={msArrowBack}
            backgroundColor={"transparent"}
            style={{ marginLeft: -12 }}
            onPress={() => setIndex(2)}
          ></CircularButton>
          <Text variant="titleLarge">Selecione seu treino</Text>
        </View>
        */}

      <WeekProgress></WeekProgress>
      {treinos.map((treino) => (
        <Training key={treino.id} item={treino} />
      ))}
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 12,
    marginLeft: 4,
    color: Colors.Blue[700],
  },
});
