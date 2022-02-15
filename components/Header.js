import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import AdvanceSearch from "./AdvanceSearch";
import AppButton from "./AppButton";
import CheckBox from "./CheckBox";
// import DropdownComponent from "./DropdownComponent";

export function Header({ queryListSetter, isEnabled, toggleSwitch }) {
  const [search, setSearch] = React.useState("");

  const handlePress = async () => {
    if (search.length === 0) {
      Alert.alert("Please enter a search term");
      return;
    }

    Keyboard.dismiss();
    let res = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=" +
        encodeURI(search) +
        "/Zero&page=1"
    ).then((res) => res.json());

    queryListSetter(res.results);
  };

  return (
    // Main Container
    <View style={styles.container}>
      {/* Title Space */}
      <TouchableOpacity
        onPress={() => {
          queryListSetter([]), setSearch("");
          if (isEnabled) {
            toggleSwitch();
          }
        }}
        style={styles.title}
      >
        <Text style={styles.title1}> Anime</Text>
        <Text style={styles.title2}>Verse</Text>
      </TouchableOpacity>

      {/* Search View */}
      {!isEnabled && (
        <View style={styles.search_div}>
          <TextInput
            style={styles.search_box}
            value={search}
            selectionColor={"red"}
            onChangeText={setSearch}
            placeholder="Search"
          />
          <AppButton onPress={handlePress} title="GO" styles={styles} />
        </View>
      )}

      {isEnabled && <AdvanceSearch queryListSetter={queryListSetter} />}

      <CheckBox
        style={styles.checkbox}
        isEnabled={isEnabled}
        toggleSwitch={toggleSwitch}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#EEEEEE",
  },
  title: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FC4F4F",
    marginLeft: 10,
  },
  title2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
  },
  search_div: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
  search_box: {
    width: "70%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 5,
    shadowColor: "black",
    paddingLeft: 10,
    borderWidth: 0,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FC4F4F",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  checkbox: {
    flex: 0,
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 20,
  },
});
