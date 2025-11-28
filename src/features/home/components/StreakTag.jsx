import { msModeHeatFill } from "@material-symbols-react-native/outlined-400";
import { MsIcon } from "material-symbols-react-native";
import { Text, View } from "react-native";
import Colors from "@shared/constants/Colors";

export default function StreakTag({ label }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        backgroundColor: "white",
        padding: 8,
        borderRadius: 8,
      }}
    >
      <MsIcon
        icon={msModeHeatFill}
        color={Colors.Orange[600]}
        size={26}
      ></MsIcon>
      <Text
        style={{
          color: Colors.Blue[700],
          fontWeight: "bold",
          justifyContent: "center",
        }}
      >
        {label}
      </Text>
    </View>
  );
}
