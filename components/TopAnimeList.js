import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import AnimeCard from "./AnimeCard";

function TopAnimeList() {
  const [topAnime, setTopAnime] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.jikan.moe/v3/top/anime/1/airing")
      .then((res) => res.json())
      .then((res) => {
        setTopAnime(res.top.slice(0, 10));
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Top Anime</Text>
        {topAnime.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            title={anime.title}
            image_url={anime.image_url}
            episodes={anime.episodes}
            start_date={anime.start_date}
            end_date={anime.end_date}
            url={anime.url}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    zIndex: -1,
    backgroundColor: "#EEEEEE",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default TopAnimeList;
