import Colors from "@consts/Colors";
import { useState } from "react";
import {
  BottomNavigation,
  Provider as PaperProvider,
} from "react-native-paper";
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
import { MsIcon } from "material-symbols-react-native";
import HomeScreen from "./features/home/screens/HomeScreen";
import TrainingProgress from "./features/training/progress/screens/TrainingProgress";
import TrainingSelectScreen from "./features/training/select/screens/TrainingSelectScreen";
import TestScreen from "./shared/screens/TestScreen";
import RatingScreen from "./features/training/rating/screens/RatingScreen.jsx";

export default function App() {
  const [index, setIndex] = useState(2);

  const [routes] = useState([
    {
      key: "training",
      title: "Treino",
      focusedIcon: () => (
        <MsIcon icon={msExerciseFill} color="white" size={26} />
      ),
      unfocusedIcon: () => <MsIcon icon={msExercise} color="white" size={26} />,
    },
    {
      key: "progress",
      title: "Progresso",
      focusedIcon: () => (
        <MsIcon icon={msFinanceModeFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msFinanceMode} color="white" size={26} />
      ),
    },
    {
      key: "home",
      title: "Início",
      focusedIcon: () => <MsIcon icon={msTodayFill} color="white" size={26} />,
      unfocusedIcon: () => <MsIcon icon={msToday} color="white" size={26} />,
    },
    {
      key: "measures",
      title: "Medidas",
      focusedIcon: () => (
        <MsIcon icon={msStraightenFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msStraighten} color="white" size={26} />
      ),
    },
    {
      key: "profile",
      title: "Perfil",
      focusedIcon: () => (
        <MsIcon icon={msAccountCircleFill} color="white" size={26} />
      ),
      unfocusedIcon: () => (
        <MsIcon icon={msAccountCircle} color="white" size={26} />
      ),
    },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "training":
        return <TrainingSelectScreen setIndex={setIndex} />;

      case "progress":
        return <TestScreen />;

      case "home":
        return <HomeScreen setIndex={setIndex} />;

      case "measures":
        return <TrainingProgress />; // Botei aqui para facilitar o acesso

      case "profile":
        return <RatingScreen />;

      default:
        return null;
    }
  };

  return (
    <PaperProvider>
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
    </PaperProvider>
  );
}
