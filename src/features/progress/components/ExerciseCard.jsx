import Colors from "@consts/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";

export default function ExerciseCard({ title, muscle }) {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <Card style={styles.card} mode="contained">
      <Card.Content>
        <View style={styles.exerciseHeader}>
          <Checkbox
            color={Colors.Orange[800]}
            uncheckedColor={Colors.Orange[800]}
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View>
            <Text variant="titleMedium" style={styles.exerciseTitle}>
              {title}
            </Text>
            <Text style={styles.exerciseMuscle}>{muscle}</Text>
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

        {[1, 2, 3].map((s) => (
          <View key={s} style={styles.tableRow}>
            <View>
              <LinearGradient
                colors={[Colors.Orange[900], Colors.Orange[600]]}
                style={styles.seriesBadge}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <Text variant="titleMedium" style={{ color: "white" }}>
                  {s}
                </Text>
              </LinearGradient>
            </View>

            <Text style={styles.repText}>12</Text>
            <Text
              style={{ textAlign: "center", marginRight: -20, marginLeft: -12 }}
            >
              X
            </Text>

            <TextInput
              mode="outlined"
              value="0"
              style={styles.cargaInput}
              cursorColor={Colors.Orange[800]}
              activeOutlineColor={Colors.Orange[800]}
              outlineStyle={{ borderRadius: 4, borderWidth: 0.5 }}
            />

            <Checkbox
              color={Colors.Orange[800]}
              uncheckedColor={Colors.Orange[800]}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
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
            value={value}
            keyboardType="numeric"
            onChangeText={(text) => setValue(text.replace(/[^0-9]/g, ""))}
          />

          <TextInput
            mode="outlined"
            label="Peso máximo(kg)"
            style={styles.bottomInput}
            cursorColor={Colors.Orange[800]}
            activeOutlineColor={Colors.Orange[800]}
            outlineColor={Colors.Orange[800]}
            value={value}
            keyboardType="numeric"
            onChangeText={(text) => setValue(text.replace(/[^0-9]/g, ""))}
          />
        </View>

        {/* Botão finalizar série */}
        <Button mode="contained" style={styles.finishSetButton}>
          Finalizar série
        </Button>

        {/* Slider fake */}
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
                <Text variant="labelSmall">Limitada</Text>
              </View>
            </View>

            <View style={styles.sliderTrack}>
              <View style={styles.sliderFill} />
            </View>

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
