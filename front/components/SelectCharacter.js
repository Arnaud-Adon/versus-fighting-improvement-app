import React from "react";
import { Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SelectCharacter = () => {
  return (
    <View>
      <Text testID="selectCharacterTitle">Selectionnez un personnage</Text>
      <FlatList
        testID="flatlistCharacter"
        renderItem={() => {
          <View>
            <Text>Text1</Text>
            <Text>Text2</Text>
          </View>;
        }}
      />
    </View>
  );
};

export default SelectCharacter;
