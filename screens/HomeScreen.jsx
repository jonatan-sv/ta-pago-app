import {
  msAlarmFill,
  msCalendarToday,
  msExercise,
} from "@material-symbols-react-native/outlined-400";
import { LinearGradient } from "expo-linear-gradient";
import { MsIcon } from "material-symbols-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Chip, FAB, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";

export default function HomeScreen() {
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
      >
        {/* Calendário */}
        <Card mode="contained" style={styles.cardCalendar}>
          <LinearGradient
            colors={["#FEEBD6", "#FBD2AD"]}
            style={{ borderRadius: 14, padding: 16 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text variant="titleMedium">Novembro - 2025</Text>

            <View style={styles.weekRow}>
              {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                <View key={i} style={styles.weekItem}>
                  <View style={styles.dayCircle}>
                    <Text>{d}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.calendarFooter}>
              <Text variant="bodyMedium">11 de 12</Text>
            </View>
          </LinearGradient>
        </Card>

        {/* Treino de Hoje */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Treino de Hoje
        </Text>

        <Card style={styles.todayCard}>
          <View style={styles.todayHeader}>
            <View style={styles.avatar}>
              <Text>A</Text>
            </View>
            <Text variant="titleMedium">Superiores</Text>
            <Chip style={styles.moderateChip} textStyle={{ fontSize: 12 }}>
              Moderado
            </Chip>
          </View>

          <View style={styles.exerciseList}>
            <Text>• Abdômen</Text>
            <Text>• Antebraço</Text>
            <Text>• Bíceps</Text>
            <Text>• Costa</Text>
          </View>
        </Card>

        {/* Histórico */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Histórico de Treinos
        </Text>

        {[
          {
            tipo: "Superiores",
            data: "27 de agosto de 2025",
            tag: "Ruim",
            color: Colors.Tag.vigoroso,
          },
          {
            tipo: "Inferiores",
            data: "26 de agosto de 2025",
            tag: "Médio",
            color: Colors.Tag.moderado,
          },
          {
            tipo: "Superiores",
            data: "25 de agosto de 2025",
            tag: "Bom",
            color: Colors.Tag.leve,
          },
          {
            tipo: "Inferiores",
            data: "24 de agosto de 2025",
            tag: "Médio",
            color: Colors.Tag.moderado,
          },
        ].map((item, i) => (
          <Card key={i} style={styles.historyCard}>
            <View style={styles.historyHeader}>
              <View style={styles.avatar}>
                <LinearGradient
                  colors={[Colors.Orange[600], Colors.Orange[900]]}
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
                  <MsIcon
                    icon={msExercise}
                    color={Colors.Orange[100]}
                    size={16}
                  ></MsIcon>
                </LinearGradient>
              </View>
              <Text variant="titleMedium">{item.tipo}</Text>
              <Chip
                style={[styles.historyChip, { backgroundColor: item.color }]}
              >
                {item.tag}
              </Chip>
            </View>

            <Text style={styles.historyDate}>
              <MsIcon
                icon={msCalendarToday}
                color={Colors.Blue[700]}
                size={14}
              ></MsIcon>{" "}
              {item.data}
            </Text>
          </Card>
        ))}
      </ScrollView>

      {/* Botão Flutuante */}
      <View style={styles.fabContainer}>
        <FAB
          style={{ backgroundColor: Colors.Orange[700] }}
          color="white"
          icon={() => <MsIcon icon={msAlarmFill} color="white" size={24} />}
          label="Treinar"
          onPress={() => console.log("Pressed")}
        ></FAB>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCalendar: {
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.Orange[800],
    backgroundColor: "white",
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  weekItem: {
    alignItems: "center",
  },
  dayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5b27d",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  calendarFooter: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    marginBottom: 8,
    marginLeft: 4,
  },
  todayCard: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#f5a46b",
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
  moderateChip: {
    marginLeft: 12,
    backgroundColor: "#f7e8a6",
  },
  exerciseList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginLeft: 4,
  },
  historyCard: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#f5a46b",
  },
  historyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  historyChip: {
    marginLeft: 12,
  },
  historyDate: {
    marginLeft: 4,
  },
  fabContainer: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
});
