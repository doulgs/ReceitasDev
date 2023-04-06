import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
const statusBarHeight = StatusBar.currentHeight;
type Props = {
  handleClose: () => void;
  videoUrl: string;
};

export function VideoView({ handleClose, videoUrl }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.statusBar} /> */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleClose}
        activeOpacity={1}
      >
        <Ionicons name="arrow-back" size={24} color="#FFF" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <WebView style={styles.contentView} source={{ uri: videoUrl }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backButton: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    backgroundColor: "#0f0f0f",
    alignItems: "center",
    paddingStart: 16,
  },
  backText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 16,
  },
  contentView: {
    flex: 1,
    width: "100%",
  },
});
