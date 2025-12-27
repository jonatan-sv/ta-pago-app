import Colors from "@consts/Colors";
import { NavigationContext } from "@contexts/NavigationContext";
import { msAlarmFill } from "@material-symbols-react-native/outlined-400";
import History from "@models/history.model";
import WeekInfo from "@models/weekInfo.model";
import AppFrame from "@shared/components/AppFrame";
import { MsIcon } from "material-symbols-react-native";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import Calendar from "../components/Calendar";
import Exercise from "../components/Exercise";
import TodayExercise from "../components/TodayExercise";

export default function HomeScreen() {
  const { setIndex } = useContext(NavigationContext);

  // Dados temporários
  const weekInfo = new WeekInfo("Novembro", 2025, 11, 12, 365, [
    false,
    false,
    true,
    true,
    false,
    true,
    true,
  ]);

  const history = new History();
  history.addEntries([
    {
      tipo: "Superiores",
      data: "27 de agosto de 2025",
      label: "Ruim",
      tag: "rigoroso",
    },
    {
      tipo: "Inferiores",
      data: "26 de agosto de 2025",
      label: "Médio",
      tag: "moderado",
    },
    {
      tipo: "Superiores",
      data: "25 de agosto de 2025",
      label: "Bom",
      tag: "leve",
    },
    {
      tipo: "Inferiores",
      data: "24 de agosto de 2025",
      label: "Médio",
      tag: "moderado",
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <AppFrame>
        {/* Calendário */}
        <Calendar weekInfo={weekInfo}></Calendar>

        {/* Treino de Hoje */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Treino de Hoje
        </Text>
        <TodayExercise></TodayExercise>

        {/* Histórico */}
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Histórico de Treinos
        </Text>
        {history.list.map((item, i) => (
          <Exercise key={i} item={item}></Exercise>
        ))}
      </AppFrame>
      {/* Botão Flutuante */}
      <View style={styles.fabContainer}>
        <FAB
          style={{ backgroundColor: Colors.Orange[700] }}
          color="white"
          icon={() => <MsIcon icon={msAlarmFill} color="white" size={24} />}
          label="Treinar"
          onPress={() => setIndex(0)}
        ></FAB>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 12,
    marginLeft: 4,
    color: Colors.Blue[700],
  },
  fabContainer: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
});
