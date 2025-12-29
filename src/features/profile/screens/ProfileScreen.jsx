import AppFrame from "@shared/components/AppFrame";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <AppFrame>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Perfil do Usuário
        </Text>
        {/* Conteúdo do perfil */}
      </View>
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 16,
  },
});
