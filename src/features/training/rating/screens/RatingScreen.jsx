import Colors from "@consts/Colors";
import {
  msImage,
  msVideocamFill,
} from "@material-symbols-react-native/outlined-400";
import AppFrame from "@shared/components/AppFrame";
import { MsIcon } from "material-symbols-react-native";
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
import { useNavigation } from "@react-navigation/native";

export default function AvaliarTreinoScreen() {
  const [qualidade, setQualidade] = useState(null);
  const [observacoes, setObservacoes] = useState("");
  const [ciclo, setCiclo] = useState(null);
  const [impacto, setImpacto] = useState(null);
  const navigation = useNavigation();

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
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
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
          numberOfLines={10}
          value={observacoes}
          onChangeText={setObservacoes}
          cursorColor={Colors.Orange[800]}
          activeOutlineColor={Colors.Orange[800]}
          outlineColor={Colors.Orange[800]}
          style={{ paddingTop: 10, paddingBottom: 30 }}
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
        {ciclo == "Menstruação" && (
          <Text variant="bodyMedium" style={styles.subtitle}>
            Impacto no desempenho
          </Text>
        )}
        {ciclo == "Menstruação" &&
          [
            "Positivo - Me Senti Forte",
            "Neutro - Não me afetou",
            "Negativo - Perdi o rendimento do treino",
          ].map((item) => (
            <CheckboxItem
              key={item}
              label={item}
              value={item}
              selected={impacto === item}
              onPress={() => setImpacto(item)}
              color={Colors.Orange[800]}
              uncheckedColor={Colors.Orange[800]}
            />
          ))}
      </Card>

      {/* Foto / Vídeo */}
      <Card style={styles.card} mode="contained">
        <Text variant="titleMedium" style={styles.cardTitle}>
          Foto/vídeo de progresso (opcional)
        </Text>

        <View style={styles.mediaButtons}>
          <Button
            mode="outlined"
            onPress={() => {}}
            textColor={Colors.Orange[800]}
            style={{ borderColor: Colors.Orange[800] }}
            contentStyle={{ height: 100, width: 180 }}
          >
            <View
              style={{ flexDirection: "column", alignItems: "center", gap: 8 }}
            >
              <MsIcon icon={msImage} color={Colors.Orange[800]} size={26} />
              <Text> Tirar foto</Text>
            </View>
          </Button>

          <Button
            mode="outlined"
            onPress={() => {}}
            textColor={Colors.Orange[800]}
            style={{
              borderColor: Colors.Orange[800],
            }}
            contentStyle={{ height: 100, width: 180 }}
          >
            <View
              style={{ flexDirection: "column", alignItems: "center", gap: 8 }}
            >
              <MsIcon
                icon={msVideocamFill}
                color={Colors.Orange[800]}
                size={26}
              />
              <Text> Gravar vídeo</Text>
            </View>
          </Button>
        </View>
      </Card>

      {/* Botão concluir */}
      <Button
        mode="contained"
        style={styles.submitButton}
        contentStyle={{ height: 52 }}
        onPress={() => {}}
        buttonColor={Colors.Orange[800]}
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
    justifyContent: "center",
    gap: 12,
  },
  submitButton: {
    borderRadius: 32,
    marginTop: 8,
  },
});
