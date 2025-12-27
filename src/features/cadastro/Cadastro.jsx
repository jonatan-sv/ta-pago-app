import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Provider as PaperProvider,
  TextInput,
  Button
} from 'react-native-paper';

export default function Cadastro() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState(false);
  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>

        {/* LOGO */}
        <Image
          source={{
            uri: 'COLE_AQUI_A_URL_DA_SUA_LOGO'
          }}
          style={styles.logo}
        />

        {/* TÍTULO */}
        <Text style={styles.title}>Cadastre-se</Text>

        {/* JÁ POSSUI CONTA */}
        <TouchableOpacity
          onPress={() => {
            // FUTURAMENTE:
            // navigation.navigate('Login')
          }}
        >
          <Text style={styles.subtitle}>
            Já possui uma conta?{' '}
            <Text style={styles.link}>Entre aqui!</Text>
          </Text>
        </TouchableOpacity>

        {/* NOME COMPLETO */}
        <TextInput
          mode="outlined"
          placeholder="Digite o seu nome completo"
          value={nome}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor="#9C3D1E"
          theme={{ roundness: 14 }}
          onFocus={() => setNome('Nome Completo')}
        />

        {/* EMAIL */}
        <TextInput
          mode="outlined"
          placeholder="Digite o seu email"
          value={email}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor="#9C3D1E"
          theme={{ roundness: 14 }}
          onFocus={() => setEmail('usuario@email.com')}
        />

        {/* SENHA */}
        <TextInput
          mode="outlined"
          placeholder="Insira a sua senha"
          value={senha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
          outlineColor="#E4CFC7"
          activeOutlineColor="#9C3D1E"
          theme={{ roundness: 14 }}
          onFocus={() => setSenha('senha123')}
          right={
            <TextInput.Icon
              icon={mostrarSenha ? 'eye-off' : 'eye'}
              color="#9C3D1E"
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
          activeOutlineColor="#9C3D1E"
          theme={{ roundness: 14 }}
          onFocus={() => setConfirmarSenha('senha123')}
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
    backgroundColor: '#FFF3EB',
    paddingHorizontal: 28,
    justifyContent: 'center'
  },

  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#2D1B4E',
    textAlign: 'center',
    marginBottom: 6
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 28
  },

  link: {
    color: '#C13B2A',
    fontWeight: '500'
  },

  input: {
    marginBottom: 14,
    backgroundColor: '#FFF'
  },

  button: {
    borderRadius: 30,
    backgroundColor: '#8B2E1A',
    marginTop: 10,
    marginBottom: 22
  },

  buttonContent: {
    height: 52
  },

  or: {
    textAlign: 'center',
    fontSize: 13,
    color: '#6B6B6B',
    marginBottom: 16
  },

  google: {
    borderRadius: 30,
    borderColor: '#E4CFC7'
  },

  googleContent: {
    height: 50
  }
});
