import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Card from "./components/Card";
import { TarotCards } from "./components/TarotsData";

const TarotsScreen = () => {
  const shuffleBack = useSharedValue<boolean>(false);

  return (
    <View style={styles.container}>
      {TarotCards.map((card, index) => (
        <Card
          source={card.source}
          key={index}
          index={index}
          shuffleBack={shuffleBack}
        />
      ))}
    </View>
  );
};

export default TarotsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});
