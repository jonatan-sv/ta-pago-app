import { msModeHeatFill } from "@material-symbols-react-native/outlined-400";
import { MsIcon } from "material-symbols-react-native";
import { Text, View } from "react-native";
import Colors from "@consts/Colors";
import { useTheme } from "@contexts/ThemeContext";

export default function StreakTag({ label, side = "right" }) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: { right: "row-reverse", left: "row" }[side],
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        backgroundColor: theme.StreakTag,
        padding: 8,
        borderRadius: 8,
      }}
    >
      <MsIcon icon={msModeHeatFill} size={26} color={Colors.Orange[600]} />

      <Text
        variant="labelMedium"
        style={{
          color: theme.Text,
          fontWeight: "bold",
          justifyContent: "center",
        }}
      >
        {label}
      </Text>
    </View>
  );
}
