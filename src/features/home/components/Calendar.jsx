import {
  msArrowBackIosFill,
  msArrowForwardIosFill,
  msCheckFill,
} from "@material-symbols-react-native/outlined-400";
import { LinearGradient } from "expo-linear-gradient";
import { MsIcon } from "material-symbols-react-native";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import Colors from "@shared/constants/Colors";
import Tag from "./StreakTag";

export default function Calendar({ weekInfo }) {
  return (
    <Card mode="contained" style={styles.cardCalendar}>
      <LinearGradient
        colors={["#FEEBD6", "#FBD2AD"]}
        style={{ borderRadius: 14, padding: 16 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="titleMedium">
            {weekInfo.month} - {weekInfo.year}
          </Text>
          <Tag label={weekInfo.streakCount}></Tag>
        </View>

        <View style={styles.weekRow}>
          {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
            <View key={i} style={styles.weekItem}>
              <Text>{d}</Text>
              <View style={styles.dayCircle}>
                {weekInfo.streak[i] && (
                  <View style={styles.dayCircleCheck}>
                    <MsIcon
                      icon={msCheckFill}
                      color={Colors.Orange[100]}
                      size={24}
                    ></MsIcon>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.calendarFooter}>
          <Text variant="bodyMedium">
            {weekInfo.daysCompleted} de {weekInfo.totalDays}
          </Text>
          <View style={{ flexDirection: "row", gap: 12, marginLeft: 16 }}>
            <MsIcon
              icon={msArrowBackIosFill}
              color={Colors.Blue[700]}
              size={16}
            ></MsIcon>
            <MsIcon
              icon={msArrowForwardIosFill}
              color={Colors.Blue[700]}
              size={16}
            ></MsIcon>
          </View>
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
