import Colors from "@consts/Colors";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExerciseCard from "../components/ExerciseCard";

export default function TreinoEmAndamento() {
  const insets = useSafeAreaInsets();
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
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Header
            TODO: Adicionar a seta de voltar
        */}
        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.title}>
            Treino em andamento
          </Text>
          <Text style={styles.subtitle}>0 de 5 concluídos</Text>

          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: "20%" }]} />
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
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
