import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Telas
import RegisterScreen from "@feats/auth/register/screens/RegisterScreen";
import LoginScreen from "@feats/auth/login/screens/LoginScreen";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator({ onAuthenticated }) {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Register">
        {(props) => (
          <RegisterScreen {...props} onRegistered={onAuthenticated} />
        )}
      </AuthStack.Screen>

      <AuthStack.Screen name="Login">
        {(props) => <LoginScreen {...props} onLogin={onAuthenticated} />}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
