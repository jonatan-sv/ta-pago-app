import Colors from "@consts/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Card, ProgressBar, Text } from "react-native-paper";
import Tag from "../../home/components/StreakTag"; // TODO: Trocar para outro tipo de tag

export default function WeekProgress() {
  return (
    <Card mode="contained" style={styles.cardCalendar}>
      <LinearGradient
        colors={["#FEEBD6", "#FBD2AD"]}
        style={{ borderRadius: 14, padding: 16 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Progresso da Semana</Text>
          <Tag label="2 de 5 treinos"></Tag>
        </View>
        <View
          style={{
            height: 10,
            backgroundColor: "#D19063", // trilha da barra (laranja claro)
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <ProgressBar
            progress={0.5}
            color={Colors.Orange[900]} // cor escura da barra cheia
            style={{
              height: 12, // mesma altura da trilha
              borderRadius: 6,
              backgroundColor: Colors.Orange[400],
            }}
          />
        </View>
      </LinearGradient>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardCalendar: {
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.Orange[800],
    backgroundColor: Colors.Orange[100],
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
    backgroundColor: Colors.Orange[400],
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  dayCircleCheck: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: Colors.Orange[600],
  },
  calendarFooter: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
