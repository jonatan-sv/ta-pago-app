import Colors from "@consts/Colors";
import AppFrame from "@shared/components/AppFrame";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Checkbox,
  IconButton,
  Text,
  TextInput,
} from "react-native-paper";

export default function AvaliarTreinoScreen() {
  const [qualidade, setQualidade] = useState(null);
  const [observacoes, setObservacoes] = useState("");
  const [ciclo, setCiclo] = useState(null);

  const CheckboxItem = ({ label, value, selected, onPress }) => (
    <View style={styles.checkboxRow}>
      <Checkbox
        status={selected ? "checked" : "unchecked"}
        onPress={onPress}
        color={Colors.Orange[800]}
        uncheckedColor={Colors.Orange[800]}
      />
      <Text onPress={onPress}>{label}</Text>
    </View>
  );

  return (
    <AppFrame>
      {/* Header */}
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={24} />
        <View>
          <Text variant="titleLarge">Avaliar seu treino</Text>
          <Text variant="bodyMedium">Como foi seu treino hoje?</Text>
        </View>
      </View>

      {/* Qualidade do treino */}
      <Card style={styles.card} mode="contained">
        <Text variant="titleMedium" style={styles.cardTitle}>
          Qualidade do treino
        </Text>

        <CheckboxItem
          label="Bom - Hoje era o meu dia"
          value="bom"
          selected={qualidade === "bom"}
          onPress={() => setQualidade("bom")}
          color={Colors.Orange[800]}
          uncheckedColor={Colors.Orange[800]}
        />

        <CheckboxItem
          label="Médio - Poderia melhorar"
          value="medio"
          selected={qualidade === "medio"}
          onPress={() => setQualidade("medio")}
          color={Colors.Orange[800]}
          uncheckedColor={Colors.Orange[800]}
        />

        <CheckboxItem
          label="Ruim - Hoje não foi o meu dia"
          value="ruim"
          selected={qualidade === "ruim"}
          onPress={() => setQualidade("ruim")}
          color={Colors.Orange[800]}
          uncheckedColor={Colors.Orange[800]}
        />
      </Card>

      {/* Observações */}
      <Card style={styles.card} mode="contained">
        <Text variant="titleMedium" style={styles.cardTitle}>
          Observações (opcional)
        </Text>

        <TextInput
          mode="outlined"
          placeholder="Descreva como foi o seu treino, e como você se sentiu hoje..."
          multiline
          numberOfLines={4}
          value={observacoes}
          onChangeText={setObservacoes}
          cursorColor={Colors.Orange[800]}
          activeOutlineColor={Colors.Orange[800]}
          outlineColor={Colors.Orange[800]}
        />
      </Card>

      {/* Ciclo menstrual */}
      <Card style={styles.card} mode="contained">
        <Text variant="titleMedium" style={styles.cardTitle}>
          Ciclo menstrual (opcional)
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Período do ciclo
        </Text>

        {["Menstruação", "Fase folicular", "Ovulação", "Fase lútea"].map(
          (item) => (
            <CheckboxItem
              key={item}
              label={item}
              value={item}
              selected={ciclo === item}
              onPress={() => setCiclo(item)}
              color={Colors.Orange[800]}
              uncheckedColor={Colors.Orange[800]}
            />
          )
        )}
      </Card>

      {/* Foto / Vídeo */}
      <Card style={styles.card} mode="contained">
        <Text variant="titleMedium" style={styles.cardTitle}>
          Foto/vídeo de progresso (opcional)
        </Text>

        <View style={styles.mediaButtons}>
          <Button mode="outlined" icon="camera" onPress={() => {}}>
            Tirar foto
          </Button>

          <Button mode="outlined" icon="video" onPress={() => {}}>
            Gravar vídeo
          </Button>
        </View>
      </Card>

      {/* Botão concluir */}
      <Button
        mode="contained"
        style={styles.submitButton}
        contentStyle={{ height: 52 }}
        onPress={() => {}}
      >
        Concluir avaliação
      </Button>
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.Orange[900],
    backgroundColor: "white",
  },
  cardTitle: {
    marginBottom: 12,
    fontWeight: "600",
  },
  subtitle: {
    marginBottom: 8,
    opacity: 0.7,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  mediaButtons: {
    flexDirection: "row",
    gap: 12,
  },
  submitButton: {
    borderRadius: 32,
    marginTop: 8,
  },
});
