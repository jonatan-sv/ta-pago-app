import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

export default function TestScreen() {
  const insets = useSafeAreaInsets();

  const [asyncStorageItemSet, setAsyncStorageItemSet] = useState(false);
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const storeData = (value) => {
    AsyncStorage.setItem("user", JSON.stringify(value)).then((res) => {
      setAsyncStorageItemSet(true);
    });
  };

  useEffect(() => {
    AsyncStorage.getItem("user").then((res) => {
      setUser(res);
    });
  }, [asyncStorageItemSet]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Orange[700],
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: insets.top + 10,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <View style={{ width: "80%", gap: 16 }}>
          <TextInput
            mode="outlined"
            value={name}
            cursorColor={Colors.Orange[800]}
            activeOutlineColor={Colors.Orange[800]}
            outlineStyle={{ borderRadius: 4, borderWidth: 0.5 }}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            mode="outlined"
            value={age}
            cursorColor={Colors.Orange[800]}
            activeOutlineColor={Colors.Orange[800]}
            outlineStyle={{ borderRadius: 4, borderWidth: 0.5 }}
            onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          />
        </View>
        <Button mode="contained" onPress={() => storeData({ name, age })}>
          Salvar
        </Button>

        <Text> {user} </Text>
      </View>
    </View>
  );
}
