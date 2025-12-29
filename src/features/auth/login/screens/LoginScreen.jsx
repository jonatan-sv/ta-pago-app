import Colors from "@consts/Colors";
import Logo from "@shared/assets/AuthLogo";
import AppFrame from "@shared/components/AppFrame";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
          Login
        </Text>

        {/* CRIAR CONTA */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Cadastro')
          }}
        >
          <Text variant="titleMedium" style={styles.subtitle}>
            Não possui uma conta?{" "}
            <Text variant="titleMedium" style={styles.link}>
              Crie aqui!
            </Text>
          </Text>
        </TouchableOpacity>

        {/* EMAIL */}
        <TextInput
          mode="outlined"
          placeholder="Email"
          value={email}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor={Colors.Orange[700]}
          onFocus={() => setEmail("usuario@email.com")}
          theme={{ roundness: 14 }}
        />

        {/* SENHA */}
        <TextInput
          mode="outlined"
          placeholder="Senha"
          value={senha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor={Colors.Orange[700]}
          onFocus={() => setSenha("senha123")}
          theme={{ roundness: 14 }}
          right={
            <TextInput.Icon
              icon={mostrarSenha ? "eye-off" : "eye"}
              color={Colors.Orange[700]}
              onPress={() => setMostrarSenha(!mostrarSenha)}
            />
          }
        />

        {/* ESQUECI A SENHA */}
        <TouchableOpacity>
          <Text variant="titleSmall" style={styles.forgot}>
            Esqueci a senha
          </Text>
        </TouchableOpacity>

        {/* BOTÃO ENTRAR */}
        <Button
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
          onPress={() => setIndex(2)}
        >
          Entrar
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

  forgot: {
    alignSelf: "flex-end",
    fontWeight: "bold",
    color: Colors.Orange[700],
    marginBottom: 26,
  },

  button: {
    borderRadius: 30,
    backgroundColor: Colors.Orange[800],
    marginBottom: 22,
  },

  buttonContent: {
    height: 52,
  },

  or: {
    textAlign: "center",
    fontWeight: "bold",
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
