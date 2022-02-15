import React from "react";
import { StyleSheet, Keyboard, View, Alert, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppButton from "./AppButton";
import { type_data, rated_data, genre_data } from "../assets/data";

const { width, height } = Dimensions.get("window");

function AdvanceSearch({ queryListSetter }) {
  const [type, setType] = React.useState(0);
  const [rated, setRated] = React.useState(0);
  const [genre, setGenre] = React.useState(0);
  const [limit, setLimit] = React.useState(0);

  const handlePress = async () => {
    let query = "";

    if (type !== 0 && type !== "") {
      query += `&type=${type}`;
    }

    if (rated !== 0 && rated !== "") {
      query += `&rated=${rated}`;
    }

    if (genre !== 0 && genre !== "") {
      query += `&genre=${genre}`;
    }

    if (limit !== 0 && limit !== "") {
      query += `&limit=${limit}`;
    }

    if (query === "") {
      Alert.alert("Please select atleast one filter");
      return;
    }

    Keyboard.dismiss();

    let res = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=" + query
    ).then((res) => res.json());

    if (res.error) {
      Alert.alert("Error", "Something went wrong, please try again later");
      return;
    }

    queryListSetter(res.results);
  };

  return (
    <View style={styles.container}>
      <View style={styles.picker_group}>
        <View style={styles.picker_div}>
          <Picker
            selectedValue={type}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
          >
            {type_data.map((item) => (
              <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.picker_div}>
          <Picker
            selectedValue={rated}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setRated(itemValue)}
          >
            {rated_data.map((item) => (
              <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.picker_group}>
        <View style={styles.picker_div}>
          <Picker
            selectedValue={genre}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}
          >
            {genre_data.map((item) => (
              <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.picker_div}>
          <Picker
            selectedValue={limit}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setLimit(itemValue)}
          >
            {[0, 10, 20, 30, 40, 50].map((item) => (
              <Picker.Item
                key={item}
                label={!item ? "limit" : item.toString()}
                value={item}
              />
            ))}
          </Picker>
        </View>
      </View>
      <AppButton title="GO" styles={styles} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: 0.15 * height,
    alignSelf: "center",
    padding: 2,
  },
  picker_group: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker_div: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    width: "100%",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FC4F4F",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default AdvanceSearch;
