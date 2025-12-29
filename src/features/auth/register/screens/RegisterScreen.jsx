import Colors from "@consts/Colors";
import Logo from "@shared/assets/AuthLogo";
import AppFrame from "@shared/components/AppFrame";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <AppFrame>
      <View style={styles.container}>
        {/* LOGO */}
        <View style={styles.logo}>
          <Logo />
        </View>

        {/* TÍTULO */}
        <Text variant="headlineSmall" style={styles.title}>
          Cadastre-se
        </Text>

        {/* JÁ POSSUI CONTA */}
        <TouchableOpacity
          onPress={() => {
            // FUTURAMENTE:
            // navigation.navigate('Login')
          }}
        >
          <Text variant="titleMedium" style={styles.subtitle}>
            Já possui uma conta?{" "}
            <Text variant="titleMedium" style={styles.link}>
              Entre aqui!
            </Text>
          </Text>
        </TouchableOpacity>

        {/* NOME COMPLETO */}
        <TextInput
          mode="outlined"
          placeholder="Digite o seu nome completo"
          value={nome}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor={Colors.Orange[700]}
          theme={{ roundness: 14 }}
          onFocus={() => setNome("Nome Completo")}
        />

        {/* EMAIL */}
        <TextInput
          mode="outlined"
          placeholder="Digite o seu email"
          value={email}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor={Colors.Orange[700]}
          theme={{ roundness: 14 }}
          onFocus={() => setEmail("usuario@email.com")}
        />

        {/* SENHA */}
        <TextInput
          mode="outlined"
          placeholder="Insira a sua senha"
          value={senha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor={Colors.Orange[700]}
          theme={{ roundness: 14 }}
          onFocus={() => setSenha("senha123")}
          right={
            <TextInput.Icon
              icon={mostrarSenha ? "eye-off" : "eye"}
              color={Colors.Orange[700]}
              onPress={() => setMostrarSenha(!mostrarSenha)}
            />
          }
        />

        {/* CONFIRMAÇÃO DE SENHA */}
        <TextInput
          mode="outlined"
          placeholder="Confirme a sua senha"
          value={confirmarSenha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor={Colors.Orange[700]}
          theme={{ roundness: 14 }}
          onFocus={() => setConfirmarSenha("senha123")}
        />

        {/* BOTÃO CADASTRAR */}
        <Button
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
          onPress={() => {}}
        >
          Cadastre-se
        </Button>

        {/* OU */}
        <Text variant="titleMedium" style={styles.or}>
          Ou
        </Text>

        {/* GOOGLE (DESATIVADO) */}
        <Button
          mode="outlined"
          icon="google"
          disabled
          style={styles.google}
          contentStyle={styles.googleContent}
        >
          Continuar com o Google
        </Button>
      </View>
    </AppFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 13,
    justifyContent: "center",
  },

  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 60,
  },

  title: {
    fontWeight: "bold",
    color: Colors.Blue[700],
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    textAlign: "center",
    color: "#6B6B6B",
    marginBottom: 28,
  },

  link: {
    color: Colors.Orange[700],
    fontWeight: "bold",
  },

  input: {
    marginBottom: 14,
    backgroundColor: "#FFF",
  },

  button: {
    borderRadius: 30,
    backgroundColor: Colors.Orange[800],
    marginTop: 10,
    marginBottom: 22,
  },

  buttonContent: {
    height: 52,
  },

  or: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#6B6B6B",
    marginBottom: 16,
  },

  google: {
    borderRadius: 30,
    borderColor: "#E4CFC7",
  },

  googleContent: {
    height: 50,
  },
});
