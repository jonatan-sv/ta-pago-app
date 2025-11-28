import Colors from "@shared/constants/Colors";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Tag({ type, label }) {
  return (
    <View
      style={{
        backgroundColor: Colors.Tag[type],
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text variant="labelSmall">{label}</Text>
    </View>
  );
}
