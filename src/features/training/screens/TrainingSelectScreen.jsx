import Colors from "@consts/Colors";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Training from "../components/Training";
import WeekProgress from "../components/WeekProgress";

export default function TrainingSelectScreen() {
  const insets = useSafeAreaInsets();

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
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Orange[700],
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingTop: 17,
          paddingHorizontal: 12,
          marginTop: insets.top + 10,
          marginHorizontal: 10,
          backgroundColor: Colors.Orange[100],
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Button icon="arrow-left" onPress={() => console.log("Pressed")}>
            Selecione seu Treino
          </Button>
        </View>
        <WeekProgress></WeekProgress>
        {treinos.map((treino) => (
          <Training key={treino.id} item={treino} />
        ))}

        {/* Espaço Vazio no final da lista */}
        <View style={{ width: "100%", height: 20 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 12,
    marginLeft: 4,
    color: Colors.Blue[700],
  },
});
