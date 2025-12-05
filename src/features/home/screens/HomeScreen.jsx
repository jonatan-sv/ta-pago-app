import { msAlarmFill } from "@material-symbols-react-native/outlined-400";
import Colors from "@shared/constants/Colors";
import { MsIcon } from "material-symbols-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Calendar from "../components/Calendar";
import TodayExercise from "../components/TodayExercise";
import Exercise from "../components/Exercise";
import WeekInfo from "@models/weekInfo.model";
import History from "@models/history.model";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

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

        {/* Espaço Vazio no final da lista */}
        <View style={{ width: "100%", height: 20 }}></View>
      </ScrollView>

      {/* Botão Flutuante */}
      <View style={styles.fabContainer}>
        <FAB
          style={{ backgroundColor: Colors.Orange[700] }}
          color="white"
          icon={() => <MsIcon icon={msAlarmFill} color="white" size={24} />}
          label="Treinar"
          onPress={() => console.log("Pressed")}
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
