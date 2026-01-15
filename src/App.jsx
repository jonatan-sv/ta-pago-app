import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Provider as PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import RegisterScreen from "./features/auth/register/screens/RegisterScreen";
import { getLocalAccount } from "./features/auth/account.model";
import { View } from "react-native";
import { ThemeProvider } from "@contexts/ThemeContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [hasAccount, setHasAccount] = useState(null); // null = loading

  useEffect(() => {
    (async () => {
      const acc = await getLocalAccount();
      setHasAccount(!!acc);
    })();
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
              <Stack.Screen name="Register" options={{ headerShown: false }}>
                {(props) => (
                  <RegisterScreen
                    {...props}
                    onRegistered={() => setHasAccount(true)}
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
