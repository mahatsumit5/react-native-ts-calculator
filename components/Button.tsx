import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import ReuseableButton from "./ReuseableButton";
import { calculatorButtons } from "../button";

function ButtonComponent({
  setScreen,
  screen,
  setResult,
}: {
  screen: string;
  setScreen: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<string>>;
}) {
  return (
    <View style={styles.container}>
      {calculatorButtons.map((item) => (
        <ReuseableButton
          id={item.id}
          value={item.value}
          backgroundColor={item.backgroundColor}
          key={item.id}
          setScreen={setScreen}
          setResult={setResult}
          screen={screen}
        />
      ))}
    </View>
  );
}

export default ButtonComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 6,
  },
});
