import Tag from "@shared/components/Tag";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { useTheme } from "@contexts/ThemeContext";

// TODO: Tirar o texto hardcoded e receber via props
export default function TodayTraining() {
  const { theme } = useTheme();

  return (
    <Card
      style={[
        styles.todayCard,
        { borderColor: theme.Border, backgroundColor: theme.Background },
      ]}
      mode="contained"
    >
      <View style={styles.todayHeader}>
        <View style={styles.avatar}>
          <LinearGradient
            colors={[theme.Orange[600], theme.Orange[900]]}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ color: "white" }}>A</Text>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Text style={{ color: theme.Text }} variant="titleLarge">
              Superiores
            </Text>
            <Tag type="moderado" label="Moderado" />
          </View>
          <View style={styles.exerciseList}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Text style={{ color: theme.Text }}>▸ Abdômen</Text>
              <Text style={{ color: theme.Text }}>▸ Antebraço</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Text style={{ color: theme.Text }}>▸ Bíceps</Text>
              <Text style={{ color: theme.Text }}>▸ Costa</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 8,
    marginLeft: 4,
  },
  todayCard: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  todayHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  exerciseList: {
    flexDirection: "column",
    gap: 1,
    marginLeft: 4,
  },
});
