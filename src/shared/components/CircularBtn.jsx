import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple, useTheme } from "react-native-paper";
import { MsIcon } from "material-symbols-react-native";

export default function CircularButton({
  icon = null,
  iconSize,
  size = 56,
  onPress = () => {},
  rippleColor,
  backgroundColor,
  textStyle,
  label,
  style,
}) {
  const { colors } = useTheme();
  const _iconSize = iconSize ?? Math.round(size * 0.45);
  const _ripple = rippleColor ?? "rgba(0, 0, 0, 0.12)";
  const _bg = backgroundColor ?? colors.primary;

  return (
    <TouchableRipple
      onPress={onPress}
      borderless={true}
      rippleColor={_ripple}
      style={[{ borderRadius: size / 2, overflow: "hidden" }, style]}
      accessibilityRole="button"
      accessibilityLabel="Botão circular"
    >
      <View
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: _bg,
          },
        ]}
      >
        <MsIcon icon={icon} size={_iconSize} color="black" />
        {label && <Text style={textStyle}>{label}</Text>}
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
