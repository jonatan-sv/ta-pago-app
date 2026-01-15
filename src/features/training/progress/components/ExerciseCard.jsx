import Colors from "@consts/Colors";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";
import Tooltip from "@shared/components/Tooltip";
import { useTheme } from "@contexts/ThemeContext";

export default function ExerciseCard({
  exercise,
  title,
  muscle,
  onComplete,
  index,
}) {
  const initialSeries = exercise?.series ?? 3;
  const { theme, themeName } = useTheme();

  const initialCarga = Array.isArray(exercise?.carga)
    ? exercise.carga.map((c) => (c == null ? "" : String(c)))
    : Array(initialSeries).fill("");

  const [checkedSeries, setCheckedSeries] = useState(
    Array(initialSeries).fill(false)
  );
  const [cargaValues, setCargaValues] = useState(initialCarga);
  const [descanso, setDescanso] = useState(
    exercise?.descansoSegundos ? String(exercise.descansoSegundos) : ""
  );
  const [pesoMaximo, setPesoMaximo] = useState("");
  const [amplitude, setAmplitude] = useState(40);

  const [headerChecked, setHeaderChecked] = useState(false);
  const [finished, setFinished] = useState(false);

  // Tooltip
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");

  const titleText = title ?? exercise?.nome ?? "Exercício";
  const muscleText = muscle ?? exercise?.grupoMuscular ?? "";

  const allChecked = checkedSeries.length > 0 && checkedSeries.every(Boolean);

  useEffect(() => {
    if (!finished) setHeaderChecked(allChecked);
  }, [allChecked, finished]);

  function showTooltip(message) {
    setTooltipMessage(message);
    setTooltipVisible(true);

    setTimeout(() => {
      setTooltipVisible(false);
    }, 2500);
  }

  function pesoValido(idx) {
    const peso = Number(cargaValues[idx]);
    return !isNaN(peso) && peso > 0;
  }

  const cardStyle = allChecked ? styles.cardDone : styles.card;
  const cardBorder = allChecked ? Colors.Green : theme.Border;

  return (
    <Card
      style={[
        cardStyle,
        { borderColor: cardBorder, backgroundColor: theme.CardBackground },
      ]}
      mode="contained"
    >
      <Card.Content>
        <Tooltip visible={tooltipVisible} message={tooltipMessage} />

        {/* Cabeçalho */}
        <View style={styles.exerciseHeader}>
          <Checkbox
            color={Colors.Green}
            uncheckedColor={Colors.Orange[800]}
            status={headerChecked ? "checked" : "unchecked"}
            onPress={() => {
              if (finished) return;

              const algumPesoInvalido = cargaValues.some(
                (c) => Number(c) <= 0 || c === ""
              );

              if (algumPesoInvalido) {
                showTooltip(
                  "Preencha o peso de todas as séries antes de marcar."
                );
                return;
              }

              const next = !headerChecked;
              setCheckedSeries(Array(initialSeries).fill(next));
              setHeaderChecked(next);
            }}
          />

          <View>
            <Text
              variant="titleMedium"
              style={[
                styles.exerciseTitle,
                allChecked && styles.titleStrikethrough,
                { color: theme.Text },
              ]}
            >
              {titleText}
            </Text>
            <Text style={styles.exerciseMuscle}>{muscleText}</Text>
          </View>
        </View>

        {/* Cabeçalho da tabela */}
        <View style={styles.tableHeader}>
          <Text
            style={[
              styles.headerText,
              themeName === "contrast" && { color: theme.Text },
            ]}
          >
            Séries
          </Text>
          <Text
            style={[
              styles.headerText,
              themeName === "contrast" && { color: theme.Text },
            ]}
          >
            Repetições
          </Text>
          <Text
            style={[
              styles.headerText,
              themeName === "contrast" && { color: theme.Text },
            ]}
          >
            Carga(kg)
          </Text>
          <Text
            style={[
              styles.headerText,
              themeName === "contrast" && { color: theme.Text },
            ]}
          >
            Status
          </Text>
        </View>

        {/* Séries */}
        {Array.from({ length: initialSeries }).map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.tableRow,
              themeName === "contrast"
                ? {
                    backgroundColor: theme.cardBackground,
                    borderColor: theme.Border,
                    borderWidth: 2,
                    borderRadius: 12,
                  }
                : {
                    backgroundColor: "#f3f2f4",
                  },
            ]}
          >
            <View>
              {checkedSeries[idx] ? (
                <View style={[styles.seriesBadge, styles.seriesBadgeDone]}>
                  <Text variant="titleMedium" style={{ color: "white" }}>
                    {idx + 1}
                  </Text>
                </View>
              ) : (
                <LinearGradient
                  colors={[Colors.Orange[900], Colors.Orange[600]]}
                  style={styles.seriesBadge}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <Text variant="titleMedium" style={{ color: "white" }}>
                    {idx + 1}
                  </Text>
                </LinearGradient>
              )}
            </View>

            <Text style={[styles.repText, { color: theme.Text }]}>
              {exercise?.repeticoes ?? "—"}
            </Text>

            <Text style={[{ textAlign: "center", color: theme.Text }]}>X</Text>

            <TextInput
              mode="outlined"
              value={cargaValues[idx]}
              style={styles.cargaInput}
              keyboardType="numeric"
              editable={!finished}
              cursorColor={Colors.Orange[800]}
              activeOutlineColor={Colors.Orange[800]}
              onChangeText={(text) => {
                if (finished) return;
                const clean = text.replace(/[^0-9]/g, "");
                const next = [...cargaValues];
                next[idx] = clean;
                setCargaValues(next);
              }}
            />

            <Checkbox
              color={Colors.Green}
              uncheckedColor={Colors.Orange[800]}
              status={checkedSeries[idx] ? "checked" : "unchecked"}
              onPress={() => {
                if (finished) return;

                if (!pesoValido(idx)) {
                  showTooltip(
                    "Informe um peso maior que 0 para marcar a série."
                  );
                  return;
                }

                const next = [...checkedSeries];
                next[idx] = !next[idx];
                setCheckedSeries(next);
              }}
            />
          </View>
        ))}

        {/* Inputs inferiores */}
        <View style={styles.bottomInputs}>
          <TextInput
            mode="outlined"
            label="Descanso (seg)"
            style={[
              styles.bottomInput,
              { backgroundColor: theme.CardBackground },
            ]}
            textColor={theme.Text}
            cursorColor={Colors.Orange[800]}
            activeOutlineColor={Colors.Orange[800]}
            keyboardType="numeric"
            editable={!finished}
            value={descanso}
            onChangeText={(text) => setDescanso(text.replace(/[^0-9]/g, ""))}
          />

          <TextInput
            mode="outlined"
            label="Peso máximo (kg)"
            style={[
              styles.bottomInput,
              { backgroundColor: theme.CardBackground },
            ]}
            textColor={theme.Text}
            cursorColor={Colors.Orange[800]}
            activeOutlineColor={Colors.Orange[800]}
            keyboardType="numeric"
            editable={!finished}
            value={pesoMaximo}
            onChangeText={(text) => setPesoMaximo(text.replace(/[^0-9]/g, ""))}
          />
        </View>

        {/* Botão finalizar */}
        <Button
          mode="contained"
          style={styles.finishSetButton}
          disabled={finished}
          onPress={() => {
            if (finished) return;

            const algumPesoInvalido = cargaValues.some(
              (c) => Number(c) <= 0 || c === ""
            );

            if (algumPesoInvalido) {
              showTooltip(
                "Não é possível finalizar sem informar o peso das séries."
              );
              return;
            }

            setCheckedSeries(Array(initialSeries).fill(true));
            setHeaderChecked(true);
            setFinished(true);

            if (onComplete)
              setTimeout(
                () => onComplete(exercise, index, descanso > 0 ? descanso : 1),
                0
              );
          }}
        >
          Finalizar série
        </Button>

        {/* Slider */}
        <Card style={styles.sliderCard} mode="contained">
          <LinearGradient
            colors={
              themeName === "light"
                ? ["#FEEBD6", "#FBD2AD"]
                : [theme.Background, theme.Background]
            }
            style={{ padding: 12, borderRadius: 10 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.sliderHeader}>
              <Text style={{ color: theme.Text }}>Amplitude do movimento</Text>
              <View style={styles.sliderTag}>
                <Text variant="labelSmall">
                  {amplitude < 50
                    ? "Limitada"
                    : amplitude < 90
                    ? "Parcial"
                    : "Completa"}
                </Text>
              </View>
            </View>

            <Slider
              value={amplitude}
              onValueChange={setAmplitude}
              minimumValue={0}
              maximumValue={100}
              step={1}
              disabled={finished}
              minimumTrackTintColor={Colors.Orange[700]}
              maximumTrackTintColor={Colors.Orange[200]}
              thumbTintColor="transparent"
            />

            <View style={styles.sliderLabels}>
              <Text style={{ color: theme.Text }}>Limitada</Text>
              <Text style={{ color: theme.Text }}>Completa</Text>
            </View>
          </LinearGradient>
        </Card>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 2,
    padding: 8,
  },
  cardDone: {
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 2,
    padding: 8,
  },
  exerciseHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  exerciseTitle: { fontWeight: "600" },
  exerciseMuscle: { color: "#666" },
  titleStrikethrough: { textDecorationLine: "line-through" },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  headerText: {
    fontWeight: "600",
    fontSize: 13,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 10,
  },
  seriesBadge: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  seriesBadgeDone: {
    backgroundColor: Colors.Green,
  },
  repText: { width: 40, textAlign: "center" },
  cargaInput: { width: 56, height: 40 },
  bottomInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  bottomInput: { width: "48%" },
  finishSetButton: {
    marginTop: 20,
    backgroundColor: "#B33F0B",
    borderRadius: 30,
  },
  sliderCard: {
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.Orange[600],
  },
  sliderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sliderTag: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
});
