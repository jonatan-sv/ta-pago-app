import AppFrame from "@shared/components/AppFrame";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <AppFrame>
      <View style={styles.container}>

        {/* Título */}
        <Text variant="headlineMedium" style={styles.title}>
          Perfil
        </Text>

        {/* Avatar */}
        <View style={styles.avatarArea}>
          <View style={styles.avatar}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <Text style={styles.name}>Viviane</Text>
          <Text style={styles.email}>viviane@gmail.com</Text>
        </View>

        {/* Informações rápidas */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>85 Kg</Text>
            <Text style={styles.infoLabel}>Peso</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>26</Text>
            <Text style={styles.infoLabel}>Idade</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>1.65</Text>
            <Text style={styles.infoLabel}>Altura</Text>
          </View>
        </View>

        {/* Medidas corporais */}
        <Text style={styles.sectionTitle}>Medidas corporais</Text>

        <View style={styles.row}>
          <Text>Peito</Text>
          <Text>98 cm</Text>
        </View>

        <View style={styles.row}>
          <Text>Cintura</Text>
          <Text>76 cm</Text>
        </View>

        <View style={styles.row}>
          <Text>Quadril</Text>
          <Text>104 cm</Text>
        </View>

        {/* Hábitos de treino */}
        <Text style={styles.sectionTitle}>Hábitos de Treino</Text>

        <View style={styles.row}>
          <Text>Peito</Text>
          <Text style={styles.done}>Concluído</Text>
        </View>

        <View style={styles.row}>
          <Text>Cintura</Text>
          <Text style={styles.done}>Concluído</Text>
        </View>

        <View style={styles.row}>
          <Text>Quadríceps</Text>
          <Text style={styles.pending}>Incompleto</Text>
        </View>

        <View style={styles.row}>
          <Text>Quadril</Text>
          <Text style={styles.done}>Concluído</Text>
        </View>

        {/* Configurações */}
        <Text style={styles.sectionTitle}>Configurações da Conta</Text>

        <View style={styles.row}>
          <Text>Editar informações</Text>
          <Text>›</Text>
        </View>

        <View style={styles.row}>
          <Text>Notificações</Text>
          <Text>›</Text>
        </View>

        <View style={styles.row}>
          <Text>Permissões</Text>
          <Text>›</Text>
        </View>

        {/* Comunidade */}
        <Text style={styles.sectionTitle}>Comunidade</Text>

        <View style={styles.row}>
          <Text>Siga-nos no Instagram</Text>
          <Text>›</Text>
        </View>

        <View style={styles.row}>
          <Text>Avalie nosso aplicativo</Text>
          <Text>›</Text>
        </View>

        <View style={styles.row}>
          <Text>Compartilhar com amigos</Text>
          <Text>›</Text>
        </View>

        {/* Outros */}
        <Text style={styles.sectionTitle}>Outros</Text>

        <View style={styles.row}>
          <Text>Enviar feedback</Text>
          <Text>›</Text>
        </View>

        <View style={styles.row}>
          <Text>Sobre o app</Text>
          <Text>›</Text>
        </View>

        <View style={styles.row}>
          <Text>Exportar dados</Text>
          <Text>›</Text>
        </View>

        {/* Rodapé */}
        <Text style={styles.footer}>
          Termos de Uso · Política de Privacidade
        </Text>

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

  avatarArea: {
    alignItems: "center",
    marginBottom: 24,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#E4572E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  avatarIcon: {
    fontSize: 32,
    color: "#E4572E",
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },

  email: {
    fontSize: 13,
    opacity: 0.7,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  infoItem: {
    alignItems: "center",
    flex: 1,
  },

  infoValue: {
    fontWeight: "bold",
  },

  infoLabel: {
    fontSize: 12,
    opacity: 0.7,
  },

  sectionTitle: {
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  done: {
    color: "#2E7D32",
    fontWeight: "bold",
  },

  pending: {
    color: "#E4572E",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    fontSize: 12,
    opacity: 0.6,
    marginTop: 24,
  },
});
