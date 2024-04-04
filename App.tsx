import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Screen from "./components/Screen";
import Header from "./components/Header";
import ButtonComponent from "./components/Button";
import { useState } from "react";
export default function App() {
  const [screen, setScreen] = useState<string>("1+2");
  const [result, setResult] = useState<string>("0");
  return (
    <LinearGradient
      colors={["#262B2B", "#262B2B", "#262B2B"]}
      style={styles.container}
    >
      <StatusBar hidden />
      <Header />
      <Screen result={result} screen={screen} />
      <ButtonComponent
        setScreen={setScreen}
        setResult={setResult}
        screen={screen}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
