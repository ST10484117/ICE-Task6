import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Music Player Component
const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const musicData = {
    albumArt: "https://via.placeholder.com/300", // Static album art placeholder
    songTitle: "Chill Vibes",
    artist: "Lo-fi Dreamer",
    genre: "Lo-fi",
  };

  // Handle play/pause toggle
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Styling based on genre (Lo-fi)
  const getBackgroundStyle = () => {
    return {
      backgroundColor: "#F5E8C7", // Soft tones for Lo-fi
      ...styles.container,
    };
  };

  return (
    <View style={getBackgroundStyle()}>
      {/* Album Art */}
      <View style={styles.albumArtContainer}>
        <Text style={styles.albumArtPlaceholder}>Album Art</Text>
      </View>

      {/* Song Info */}
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{musicData.songTitle}</Text>
        <Text style={styles.artist}>{musicData.artist}</Text>
      </View>

      {/* Playback Controls */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlay}>
          <FontAwesome5
            name={isPlaying ? "pause" : "play"}
            size={30}
            color="#333"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="step-forward" size={30} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Optional Buttons */}
      <View style={styles.optionalButtons}>
        <TouchableOpacity>
          <FontAwesome5 name="heart" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="random" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="redo" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
  },
  albumArtContainer: {
    width: 300,
    height: 300,
    backgroundColor: "#E0D7B9", // Soft muted color for Lo-fi
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
  },
  albumArtPlaceholder: {
    color: "#A68A64",
    fontSize: 18,
  },
  songInfo: {
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  artist: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 20,
  },
  optionalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginTop: 20, // Added spacing to replace progress bar area
  },
});

export default MusicPlayer;