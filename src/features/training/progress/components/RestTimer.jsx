import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@consts/Colors";

export default function RestTimer({ durationSeconds = 60, onFinish }) {
  const [remaining, setRemaining] = useState(durationSeconds);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const finishTimer = () => {
    clearTimer();
    setRemaining(0);
    onFinish?.();
  };

  // Atualiza o tempo quando a duração muda
  useEffect(() => {
    setRemaining(durationSeconds);
  }, [durationSeconds]);

  // Controla o temporizador
  useEffect(() => {
    if (paused || remaining <= 0) return;

    // A cada 1 segundo, decrementa o tempo restante
    // Se não houver mais tempo, finaliza o temporizador
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          finishTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearTimer;
  }, [paused, remaining]);

  const handleTogglePause = () => {
    setPaused((prev) => !prev);
  };

  const handleSkip = () => {
    finishTimer();
  };

  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");

  return (
    <LinearGradient
      colors={["#FEEBD6", "#FBD2AD"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View>
        <Text variant="titleMedium" style={styles.title}>
          Tempo de descanso
        </Text>
        <Text variant="headlineMedium" style={styles.timer}>
          {minutes}:{seconds}
        </Text>
      </View>

      <View style={styles.controls}>
        <IconButton
          icon={paused ? "play" : "pause"}
          size={28}
          onPress={handleTogglePause}
          iconColor={Colors.Blue[700]}
          style={{ marginRight: -10 }}
        />
        <IconButton
          icon="skip-next"
          size={28}
          onPress={handleSkip}
          iconColor={Colors.Blue[700]}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 8,
    marginVertical: 12,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.Orange[700],
    height: 105,
  },
  title: {
    fontWeight: "600",
    color: Colors.Blue[700],
  },
  timer: {
    fontWeight: "700",
    color: Colors.Blue[700],
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -10,
  },
});
