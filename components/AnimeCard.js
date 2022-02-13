import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from "react-native";

import CustomModal from "./CustomModal";

const { width, height } = Dimensions.get("window");

function AnimeCard({
  title,
  image_url,
  episodes,
  start_date,
  end_date,
  synopsis,
  url,
}) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const pressHandler = () => {
    if (url === undefined) {
      return;
    }

    setModalVisible(true);
  };

  return (
    <TouchableOpacity
      onPress={() => pressHandler(synopsis)}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: image_url }}
        fadeDuration={800}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
      <Text style={styles.subtext}>
        <Text style={{ fontWeight: "bold" }}>Episodes: </Text>
        {episodes == null ? "Ongoing" : episodes}
      </Text>

      <Text style={styles.subtext}>
        <Text style={{ fontWeight: "bold" }}>Duration: </Text>

        <Text style={{ color: "#8946A6" }}>
          {start_date === null ? "Upcoming" : start_date.split("T")[0]} -{" "}
          {end_date === null ? "Ongoing" : end_date.split("T")[0]}
        </Text>
      </Text>
      {modalVisible && (
        <CustomModal
          title={title}
          synopsis={synopsis}
          url={url}
          visibility={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 5,
    width: width * 0.7,
    elevation: 5,
  },
  image: {
    height: height * 0.3,
    width: width * 0.7,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    padding: 10,
    width: "100%",
    backgroundColor: "#FFBBBB",
  },
  subtext: {
    fontSize: 15,
    color: "black",
    marginLeft: 10,
    marginTop: 5,
    padding: 10,
    paddingTop: 0,
    alignSelf: "flex-start",
  },
});

export default AnimeCard;
