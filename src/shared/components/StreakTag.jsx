import { msModeHeatFill } from "@material-symbols-react-native/outlined-400";
import { MsIcon } from "material-symbols-react-native";
import { Text, View } from "react-native";
import Colors from "@consts/Colors";

export default function StreakTag({ label, side = "right" }) {
  return (
    <View
      style={{
        flexDirection: { right: "row-reverse", left: "row" }[side],
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        backgroundColor: "white",
        padding: 8,
        borderRadius: 8,
      }}
    >
      <MsIcon icon={msModeHeatFill} size={26} color={Colors.Orange[600]} />

      <Text
        variant="labelMedium"
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
