import Colors from "@consts/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";
import Slider from "@react-native-community/slider";

export default function ExerciseCard({ exercise, title, muscle }) {
  const initialSeries = exercise?.series ?? 3;
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

  const titleText = title ?? exercise?.nome ?? "Exercício";
  const muscleText = muscle ?? exercise?.grupoMuscular ?? "";
  const [headerChecked, setHeaderChecked] = useState(false);

  const allChecked = checkedSeries.length > 0 && checkedSeries.every(Boolean);

  useEffect(() => {
    setHeaderChecked(allChecked);
  }, [allChecked]);

  return (
    <Card style={allChecked ? styles.cardDone : styles.card} mode="contained">
      <Card.Content>
        <View style={styles.exerciseHeader}>
          <Checkbox
            color={Colors.Green}
            uncheckedColor={Colors.Orange[800]}
            status={headerChecked ? "checked" : "unchecked"}
            onPress={() => {
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
                allChecked ? styles.titleStrikethrough : null,
              ]}
            >
              {titleText}
            </Text>
            <Text style={styles.exerciseMuscle}>{muscleText}</Text>
          </View>
        </View>

        {/** <Divider style={{ marginVertical: 10 }} /> */}

        {/* Tabela de Séries */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Séries</Text>
          <Text style={styles.headerText}>Repetições</Text>
          <Text style={styles.headerText}>Carga(kg)</Text>
          <Text style={styles.headerText}>Status</Text>
        </View>

        {Array.from({ length: initialSeries }).map((_, idx) => (
          <View key={idx} style={styles.tableRow}>
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

            <Text style={styles.repText}>{exercise?.repeticoes ?? "—"}</Text>
            <Text
              style={{ textAlign: "center", marginRight: -20, marginLeft: -12 }}
            >
              X
            </Text>

            <TextInput
              mode="outlined"
              value={cargaValues[idx] ?? ""}
              style={styles.cargaInput}
              cursorColor={Colors.Orange[800]}
              activeOutlineColor={Colors.Orange[800]}
              outlineStyle={{ borderRadius: 4, borderWidth: 0.5 }}
              keyboardType="numeric"
              onChangeText={(text) => {
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
            label="Descanso(seg)"
            style={styles.bottomInput}
            cursorColor={Colors.Orange[800]}
            activeOutlineColor={Colors.Orange[800]}
            outlineColor={Colors.Orange[800]}
            value={descanso}
            keyboardType="numeric"
            onChangeText={(text) => setDescanso(text.replace(/[^0-9]/g, ""))}
          />

          <TextInput
            mode="outlined"
            label="Peso máximo(kg)"
            style={styles.bottomInput}
            cursorColor={Colors.Orange[800]}
            activeOutlineColor={Colors.Orange[800]}
            outlineColor={Colors.Orange[800]}
            value={pesoMaximo}
            keyboardType="numeric"
            onChangeText={(text) => setPesoMaximo(text.replace(/[^0-9]/g, ""))}
          />
        </View>

        {/* Botão finalizar série */}
        <Button mode="contained" style={styles.finishSetButton}>
          Finalizar série
        </Button>

        {/* Slider real */}
        <Card style={styles.sliderCard} mode="contained">
          <LinearGradient
            colors={["#FEEBD6", "#FBD2AD"]}
            style={{ padding: 12, borderRadius: 10 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.sliderHeader}>
              <Text>Amplitude do movimento</Text>
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
              minimumTrackTintColor={Colors.Orange[700]}
              maximumTrackTintColor={Colors.Orange[200]}
              thumbTintColor="transparent"
              style={{
                marginTop: 12,
                width: "100%",
                height: 40,
              }}
            />

            <View style={styles.sliderLabels}>
              <Text>Limitada</Text>
              <Text>Completa</Text>
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
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 0,
    borderWidth: 2,
    borderColor: Colors.Orange[700],
    padding: 8,
  },
  cardDone: {
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 0,
    borderWidth: 2,
    borderColor: Colors.Green,
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

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  headerText: { fontWeight: "600", fontSize: 13 },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#f3f2f4",
  },

  seriesBadge: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },

  titleStrikethrough: { textDecorationLine: "line-through" },

  seriesBadgeDone: {
    backgroundColor: Colors.Green,
    borderWidth: 2,
    borderColor: Colors.Green,
  },

  repText: { width: 40, textAlign: "center" },

  cargaInput: {
    width: 56,
    height: 40,
  },

  bottomInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  bottomInput: {
    width: "48%",
  },

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

  sliderTrack: {
    height: 8,
    backgroundColor: "#FFCCA8",
    borderRadius: 10,
    marginTop: 12,
  },

  sliderFill: {
    width: "40%",
    height: 8,
    backgroundColor: "#B33F0B",
    borderRadius: 10,
  },

  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
});
