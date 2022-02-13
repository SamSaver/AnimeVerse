import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AdvanceSearch() {
  const [type, setType] = React.useState("tv");
  const [rated, setRated] = React.useState("g");
  const [genre, setGenre] = React.useState("");
  const [limit, setLimit] = React.useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Advance Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    zIndex: -1,
    backgroundColor: "#EEEEEE",
    maxHeight: "85%",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
export default AdvanceSearch;
