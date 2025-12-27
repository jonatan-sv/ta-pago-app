import Colors from "@consts/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppFrame from "@shared/components/AppFrame";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";
import ExerciseCard from "../components/ExerciseCard";

export default function TreinoEmAndamento() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params || {};

  return (
    <AppFrame>
      {/* Header
            TODO: Arrumar o estilo
        */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text variant="titleLarge" style={styles.title}>
            Treino em andamento
          </Text>
          <Text style={styles.subtitle}>0 de 5 concluídos</Text>

          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: "20%" }]} />
          </View>
        </View>
      </View>

      {/* Exercício */}
      <ExerciseCard title="Supino reto" muscle="Peito" />

      <ExerciseCard title="Rosca martelo" muscle="Bíceps" />

      <Button
        mode="contained"
        style={styles.finishTrainingButton}
        contentStyle={{ paddingVertical: 8 }}
        buttonColor={Colors.Orange[300]}
        textColor={Colors.Blue[700]}
        onPress={() => {
          console.log("Pressed");
        }}
      >
        <Text variant="labelLarge">Finalizar treino</Text>
      </Button>
      <Text>ID: {id ?? "—"}</Text>
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 30,
  },

  title: {
    fontWeight: "600",
  },

  subtitle: {
    marginBottom: 10,
  },

  progressBarBackground: {
    height: 6,
    backgroundColor: "#FFDCC4",
    borderRadius: 10,
  },

  progressBarFill: {
    height: 6,
    backgroundColor: "#C44A14",
    borderRadius: 10,
  },

  finishTrainingButton: {
    marginTop: 20,
    borderRadius: 30,
  },
});
