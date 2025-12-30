import Colors from "@consts/Colors";
import {
  msAccountCircle,
  msAccountCircleFill,
  msExercise,
  msExerciseFill,
  msFinanceMode,
  msFinanceModeFill,
  msStraighten,
  msStraightenFill,
  msToday,
  msTodayFill,
} from "@material-symbols-react-native/outlined-400";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { NavigationProvider } from "@contexts/NavigationContext";
import HomeScreen from "@feats/home/screens/HomeScreen";
import TrainingProgress from "@feats/training/progress/screens/TrainingProgress";
import TrainingSelectScreen from "@feats/training/select/screens/TrainingSelectScreen";
import TestScreen from "@shared/screens/TestScreen";
import Login from "@feats/auth/login/screens/LoginScreen.jsx";
import Register from "@feats/auth/register/screens/RegisterScreen.jsx";
import ProfileScreen from "@feats/profile/screens/ProfileScreen.jsx";
import RouteItem from "@shared/RouteItem";

export default function Navigation() {
  const [index, setIndex] = useState(6);
  const Stack = createNativeStackNavigator();

  const [routes] = useState([
    RouteItem("training", "Treino", msExerciseFill, msExercise),
    RouteItem("progress", "Progresso", msFinanceModeFill, msFinanceMode),
    RouteItem("home", "Início", msTodayFill, msToday),
    RouteItem("measures", "Medidas", msStraightenFill, msStraighten),
    RouteItem("profile", "Perfil", msAccountCircleFill, msAccountCircle),
    RouteItem("login", "Login", msAccountCircleFill, msAccountCircle),
    RouteItem("register", "Registro", msAccountCircleFill, msAccountCircle),
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "training":
        return (
          <View style={{ flex: 1 }}>
            <Stack.Navigator>
              <Stack.Screen
                name="TrainingSelect"
                component={TrainingSelectScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrainingProgress"
                component={TrainingProgress}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </View>
        );

      case "progress":
        return <TestScreen />;

      case "home":
        return <HomeScreen />;

      case "measures":
        return <TestScreen />;

      case "profile":
        return <ProfileScreen />;

      case "login":
        return <Login />;

      case "register":
        return <Register />;

      default:
        return null;
    }
  };

  return (
    <NavigationProvider value={{ index, setIndex }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={false}
        barStyle={{ backgroundColor: Colors.Orange[700] }}
        activeColor="white"
        inactiveColor="white"
        activeIndicatorStyle={{ backgroundColor: Colors.Orange[600] }}
        getLazy={() => false}
      />
    </NavigationProvider>
  );
}
