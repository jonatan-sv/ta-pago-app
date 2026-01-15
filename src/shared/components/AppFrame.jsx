import Colors from "@consts/Colors";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@contexts/ThemeContext";
import { ThemeContext } from "@react-navigation/native";

/**
 * Componente que envolve as telas do app, fornecendo uma moldura consistente
 */
export default function AppFrame({ children }) {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.Frame }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingTop: 17,
          paddingHorizontal: 12,
          marginTop: insets.top + 10,
          marginHorizontal: 10,
          backgroundColor: theme.Background,
        }}
        // Espaço no final da página
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {children}
      </ScrollView>
    </View>
  );
}
