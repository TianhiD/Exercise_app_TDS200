import React from "react";
import { TouchableOpacity, Text , StyleSheet } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
})

