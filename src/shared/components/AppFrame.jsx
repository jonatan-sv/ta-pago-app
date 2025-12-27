import Colors from "@consts/Colors";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Componente que envolve as telas do app, fornecendo uma moldura consistente
 */
export default function AppFrame({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.Orange[700] }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingTop: 17,
          paddingHorizontal: 12,
          marginTop: insets.top + 10,
          marginHorizontal: 10,
          backgroundColor: Colors.Orange[100],
        }}
        // Espaço no final da página
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {children}
      </ScrollView>
    </View>
  );
}
