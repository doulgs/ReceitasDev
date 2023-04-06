import { useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Modal,
  Share,
} from "react-native";
import { RouteFoods } from "../../interfaces/IntFoods";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ingredients } from "../../components/Ingredients";
import { Instructions } from "../../components/Instructions";
import { VideoView } from "../../components/Video";

export function Detail() {
  const route = useRoute();
  const { data } = route.params as RouteFoods;
  const navigation = useNavigation();

  const [showVideo, setShowVideo] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.name ? data.name : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("Testando")}>
          <AntDesign name="heart" size={22} color="#ff4141" />
        </Pressable>
      ),
    });
  }, [data, navigation]);

  function handleOpenVideo() {
    setShowVideo(!showVideo);
  }
  async function shareReceipe() {
    try {
      await Share.share({
        url: "",
        message: `Receita: ${data.name}\nQuantidate De Ingredientes ${data.total_ingredients}\nAchei essa receita no app ReceitaDev`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 16 }}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={44} color="#FAFAFA" />
        </View>
        <Image source={{ uri: data.cover }} style={styles.cover} />
      </Pressable>
      <View style={styles.headerDetail}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.ingredientsText}>
            ingredientes ({data.total_ingredients})
          </Text>
        </View>
        <Pressable onPress={shareReceipe}>
          <AntDesign name="sharealt" size={24} color="#121212" />
        </Pressable>
      </View>

      {data.ingredients.map((item) => (
        <Ingredients key={item.id} data={item} />
      ))}

      <View style={styles.instructionaArea}>
        <Text style={styles.instructionaText}>Modo de Preparo</Text>
        <AntDesign name="caretdown" size={24} color="#FFF" />
      </View>

      {data.instructions.map((item, index) => (
        <Instructions key={item.id} data={item} index={index} />
      ))}

      <Modal visible={showVideo} animationType="slide">
        <VideoView
          handleClose={() => setShowVideo(false)}
          videoUrl={data.video}
        />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f9ff",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover: {
    height: 200,
    borderRadius: 16,
    width: "100%",
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  ingredientsText: {
    marginBottom: 16,
    fontSize: 16,
  },
  headerDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  instructionaArea: {
    flexDirection: "row",
    backgroundColor: "#4cbe6c",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: "space-between",
  },
  instructionaText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFF",
  },
});
