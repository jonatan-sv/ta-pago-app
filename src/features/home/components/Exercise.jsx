import {
  msCalendarToday,
  msExercise,
} from "@material-symbols-react-native/outlined-400";
import Colors from "@shared/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { MsIcon } from "material-symbols-react-native";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

import Tag from "@shared/components/Tag";

export default function Trainings({ item }) {
  return (
    <Card style={styles.historyCard} mode="contained">
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

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 30,
            }}
          >
            <Text variant="titleMedium">{item.tipo}</Text>
            <Tag type={item.tag} label={item.label}></Tag>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MsIcon
              icon={msCalendarToday}
              color={Colors.Blue[700]}
              size={14}
            ></MsIcon>
            <Text style={styles.historyDate}>{item.data}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  historyCard: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.Orange[900],
    backgroundColor: "white",
  },
  historyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  historyDate: {
    marginLeft: 4,
    justifyContent: "center",
    color: Colors.Blue[700],
  },
});
