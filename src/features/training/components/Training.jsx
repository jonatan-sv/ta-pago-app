import Tag from "@shared/components/Tag";
import Colors from "@consts/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

export default function Training({ item }) {
  return (
    <Card style={styles.todayCard} mode="contained">
      <View style={styles.todayHeader}>
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
            <Text style={{ color: "white" }}>{item.id}</Text>
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
            <Text variant="titleLarge">{item.tipo}</Text>
            <Tag type={item.intensity.toLowerCase()} label={item.intensity} />
          </View>
          {/* TODO: Arrumar o estilo */}
          <View style={styles.exerciseList}>
            {item.muscles.map((muscle, i) => (
              <Text key={i} variant="bodyMedium">
                ▸ {muscle}
              </Text>
            ))}
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
    borderColor: Colors.Orange[900],
    backgroundColor: "white",
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
