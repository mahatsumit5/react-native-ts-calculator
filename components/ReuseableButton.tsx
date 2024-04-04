import React, { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function isLastCharacterArthemetic(screenData: string) {
  const length = screenData.length;

  const lastCharacter = screenData.slice(length - 1, length);
  const isOperator = "%+-*/.".includes(lastCharacter);
  return {
    isOperator: isOperator,
    screenData: isOperator ? screenData.slice(0, length - 1) : screenData,
  };
}
interface IButton {
  id: string;
  value: string;
  backgroundColor?: string;
  setScreen: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<string>>;
  screen: string;
}
function ReuseableButton({
  id,
  setScreen,
  value,
  backgroundColor,
  setResult,
  screen,
}: IButton) {
  function handlePress() {
    switch (value) {
      case "C":
        return setScreen(screen.slice(0, -1));
      case "AC":
        setScreen("");
        setResult("");
        return;
      case "=":
        return setResult(eval(screen));
      default:
        const { isOperator, screenData } = isLastCharacterArthemetic(screen);
        if (isOperator) {
          if ("%+-*/.".includes(value)) {
            setScreen(screenData + value);
          } else {
            setScreen((prevVAlue) => prevVAlue + value);
          }
        } else {
          setScreen((prevVAlue) => prevVAlue + value);
        }
    }
  }
  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: backgroundColor ? backgroundColor : "#61777A",
      }}
      onPress={handlePress}
    >
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
}

export default ReuseableButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#61777A",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    marginTop: 10,
    height: 90,
    borderRadius: 100,
    shadowColor: "#BAC0C1",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "600",
  },
});
