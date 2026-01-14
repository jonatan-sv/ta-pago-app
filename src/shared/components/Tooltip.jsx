import { Portal } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";

export default function Tooltip({ visible, message }) {
  if (!visible) return null;

  return (
    <Portal>
      <View style={styles.tooltipContainer} pointerEvents="box-none">
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>{message}</Text>
        </View>
      </View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  tooltipContainer: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    alignItems: "center",
    zIndex: 999,
  },
  tooltip: {
    backgroundColor: "#B33F0B",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 4,
  },
  tooltipText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
  },
});
