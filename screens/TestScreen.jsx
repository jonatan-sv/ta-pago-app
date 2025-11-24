import { View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";

export default function TestScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Orange[700],
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: insets.top + 10,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <Text>[ Teste ]</Text>
      </View>
    </View>
  );
}
