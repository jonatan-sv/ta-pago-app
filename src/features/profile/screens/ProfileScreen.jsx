import AppFrame from "@shared/components/AppFrame";
import { StyleSheet, View, Pressable, Alert } from "react-native";
import { Text, Switch } from "react-native-paper";
import { useTheme } from "@contexts/ThemeContext";
import { removeLocalAccount } from "@feats/auth/account.model";
import { triggerLogout } from "@feats/auth/authEvents";

export default function ProfileScreen() {
  const { theme, themeName, toggleTheme } = useTheme();

  const handleSignOut = async () => {
    const ok = await removeLocalAccount();
    if (ok) {
      triggerLogout();
    } else {
      Alert.alert("Erro", "Não foi possível sair da conta");
    }
  };

  return (
    <AppFrame>
      <View style={styles.container}>
        {/* Título */}
        <Text
          variant="headlineMedium"
          style={[styles.title, { color: theme.Text }]}
        >
          Perfil
        </Text>

        {/* Avatar */}
        <View style={styles.avatarArea}>
          <View style={styles.avatar}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <Text style={[styles.name, { color: theme.Text }]}>Viviane</Text>
          <Text style={[styles.email, { color: theme.Text }]}>
            viviane@gmail.com
          </Text>
        </View>

        {/* Informações rápidas */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={[styles.infoValue, { color: theme.Text }]}>85 Kg</Text>
            <Text style={[styles.infoLabel, { color: theme.Text }]}>Peso</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={[styles.infoValue, { color: theme.Text }]}>26</Text>
            <Text style={[styles.infoLabel, { color: theme.Text }]}>Idade</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={[styles.infoValue, { color: theme.Text }]}>1.65</Text>
            <Text style={[styles.infoLabel, { color: theme.Text }]}>
              Altura
            </Text>
          </View>
        </View>

        {/* Medidas corporais */}
        <Text style={[styles.sectionTitle, { color: theme.Text }]}>
          Medidas corporais
        </Text>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Peito</Text>
          <Text style={{ color: theme.Text }}>98 cm</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Cintura</Text>
          <Text style={{ color: theme.Text }}>76 cm</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Quadril</Text>
          <Text style={{ color: theme.Text }}>104 cm</Text>
        </View>

        {/* Hábitos de treino */}
        <Text style={[styles.sectionTitle, { color: theme.Text }]}>
          Hábitos de Treino
        </Text>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Peito</Text>
          <Text style={styles.done}>Concluído</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Cintura</Text>
          <Text style={styles.done}>Concluído</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Quadríceps</Text>
          <Text style={styles.pending}>Incompleto</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Quadril</Text>
          <Text style={styles.done}>Concluído</Text>
        </View>

        {/* Configurações */}
        <Text style={[styles.sectionTitle, { color: theme.Text }]}>
          Configurações da Conta
        </Text>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Editar informações</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Notificações</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Permissões</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <Pressable onPress={handleSignOut}>
          <View style={styles.row}>
            <Text style={{ color: theme.Text }}>Sair da Conta</Text>
            <Text style={{ color: "#E4572E", fontWeight: "bold" }}>›</Text>
          </View>
        </Pressable>

        {/* Comunidade */}
        <Text style={[styles.sectionTitle, { color: theme.Text }]}>
          Comunidade
        </Text>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Siga-nos no Instagram</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Avalie nosso aplicativo</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Compartilhar com amigos</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        {/* Outros */}
        <Text style={[styles.sectionTitle, { color: theme.Text }]}>Outros</Text>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Enviar feedback</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Sobre o app</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ color: theme.Text }}>Exportar dados</Text>
          <Text style={{ color: theme.Text }}>›</Text>
        </View>

        <View style={[styles.row, { alignItems: "center" }]}>
          <Text style={{ color: theme.Text }}>Tema de Alto Contraste</Text>

          <Switch
            value={themeName === "contrast"}
            onValueChange={toggleTheme}
            color="#E4572E"
          />
        </View>

        {/* Rodapé */}
        <Text style={[styles.footer, { color: theme.Text }]}>
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
