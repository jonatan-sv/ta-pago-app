import Colors from "@consts/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppFrame from "@shared/components/AppFrame";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";
import ExerciseCard from "../components/ExerciseCard";
import RestTimer from "../components/RestTimer";
import { useState } from "react";
import TreinoA from "@trainings/treinoA.json";
import TreinoB from "@trainings/treinoB.json";
import TreinoC from "@trainings/treinoC.json";
import TreinoD from "@trainings/treinoD.json";
import TreinoE from "@trainings/treinoE.json";

export default function TreinoEmAndamento() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params || {};

  const treino = {
    A: TreinoA,
    B: TreinoB,
    C: TreinoC,
    D: TreinoD,
    E: TreinoE,
  }[id];

  const [restSeconds, setRestSeconds] = useState(null);
  const [completed, setCompleted] = useState([]);

  const handleExerciseComplete = (exercise, index, secs) => {
    const id = exercise?.id ?? index;
    if (completed.includes(id)) return;
    setCompleted((p) => [...p, id]);
    setRestSeconds(Number(secs));
  };

  return (
    <AppFrame>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.headerTitles}>
            <Text variant="titleLarge" style={styles.title}>
              Treino em andamento
            </Text>
            <Text style={styles.subtitle}>
              {completed.length} de {treino.exercicios.length} concluídos
            </Text>
          </View>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${Math.round(
                    (completed.length / treino.exercicios.length) * 100
                  )}%`,
                },
              ]}
            />
          </View>
        </View>
      </View>

      {/* Temporizador */}
      {restSeconds != null && (
        <RestTimer
          durationSeconds={restSeconds}
          onFinish={() => setRestSeconds(null)}
        />
      )}

      {/* Exercício */}
      {treino.exercicios.map((exercise, index) => (
        <ExerciseCard
          key={index}
          exercise={exercise}
          onComplete={handleExerciseComplete}
        />
      ))}

      <Button
        mode="contained"
        style={styles.finishTrainingButton}
        contentStyle={{ paddingVertical: 8 }}
        buttonColor={Colors.Orange[300]}
        textColor={Colors.Blue[700]}
        onPress={() => navigation.push("TrainingRating")}
      >
        <Text variant="labelLarge">Finalizar treino</Text>
      </Button>
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 16,
  },

  headerText: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  headerTitles: {
    flexDirection: "column",
    paddingTop: 12,
  },

  title: {
    fontWeight: "600",
  },

  subtitle: {
    marginBottom: 10,
  },

  progressBar: {
    paddingHorizontal: 16,
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
