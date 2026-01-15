import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Provider as PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { getLocalAccount } from "@feats/auth/account.model";
import { onLogout } from "@feats/auth/authEvents";
import { View } from "react-native";
import { ThemeProvider } from "@contexts/ThemeContext";
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [hasAccount, setHasAccount] = useState(null); // null = loading

  useEffect(() => {
    (async () => {
      const acc = await getLocalAccount();
      setHasAccount(!!acc);
    })();
  }, []);

  useEffect(() => {
    const unsub = onLogout(() => {
      setHasAccount(false);
    });
    return unsub;
  }, []);

  if (hasAccount === null) {
    return (
      <PaperProvider>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator animating size="large" />
        </View>
      </PaperProvider>
    );
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator>
            {hasAccount ? (
              <Stack.Screen
                name="Main"
                component={Navigation}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen name="Auth" options={{ headerShown: false }}>
                {(props) => (
                  <AuthNavigator
                    {...props}
                    onAuthenticated={() => setHasAccount(true)}
                  />
                )}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
