import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Button,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";
import Logo from "@shared/assets/AuthLogo";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* LOGO */}
        <View style={styles.logo}>
          <Logo />
        </View>
        {/* TÍTULO */}
        <Text style={styles.title}>Login</Text>

        {/* CRIAR CONTA */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Cadastro')
          }}
        >
          <Text style={styles.subtitle}>
            Não possui uma conta? <Text style={styles.link}>Crie aqui!</Text>
          </Text>
        </TouchableOpacity>

        {/* EMAIL */}
        <TextInput
          mode="outlined"
          placeholder="Email"
          value={email}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor="#9C3D1E"
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
          activeOutlineColor="#9C3D1E"
          onFocus={() => setSenha("senha123")}
          theme={{ roundness: 14 }}
          right={
            <TextInput.Icon
              icon={mostrarSenha ? "eye-off" : "eye"}
              color="#9C3D1E"
              onPress={() => setMostrarSenha(!mostrarSenha)}
            />
          }
        />

        {/* ESQUECI A SENHA */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueci a senha</Text>
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
        <Text style={styles.or}>Ou</Text>

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
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3EB",
    paddingHorizontal: 28,
    justifyContent: "center",
  },

  logo: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#2D1B4E",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B6B6B",
    marginBottom: 28,
  },

  link: {
    color: "#C13B2A",
    fontWeight: "500",
  },

  input: {
    marginBottom: 14,
    backgroundColor: "#FFF",
  },

  forgot: {
    alignSelf: "flex-end",
    fontSize: 13,
    color: "#C13B2A",
    marginBottom: 26,
  },

  button: {
    borderRadius: 30,
    backgroundColor: "#8B2E1A",
    marginBottom: 22,
  },

  buttonContent: {
    height: 52,
  },

  or: {
    textAlign: "center",
    fontSize: 13,
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
