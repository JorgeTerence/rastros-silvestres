import { FontAwesome5 } from "@expo/vector-icons";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DBContext, StorageContext } from "../config/backend";

export default ({ navigation, route }) => {
  const { name } = route.params;

  const db = useContext(DBContext);
  const storage = useContext(StorageContext);

  const [data, setData] = useState({});
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    // Get data
    const search = query(collection(db, "animals"), where("name", "==", name));
    getDocs(search).then((res) => setData(res.docs[0].data()));

    // Get image
    const imageRef = ref(storage, `pictures/animals/${name}`);
    getDownloadURL(imageRef).then((uri) => setImageUri(uri));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "85%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backArrow}
          >
            <FontAwesome5 name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <DataPack>
          <Text style={styles.title}>{data.name}</Text>
        </DataPack>
        <DataPack>
          <Text style={styles.subtitle}>{data.scientificName}</Text>
        </DataPack>
        <DataPack>
          <Image source={{ uri: imageUri }} style={styles.picture} />
        </DataPack>
        <DataPack>
          <Data subject="Classificação" data={data.classification} />
          <Data subject="Alimentação" data={data.feeding} />
          <Data subject="Descrição" data={data.description} />
          <Data
            subject="Estado de Concervação"
            data={data.conservationStatus}
          />
          <Data subject="Dietas" data={data.diets} />
          <Data subject="Outros nomes" data={data.otherNames} />
        </DataPack>
      </View>
    </ScrollView>
  );
};

const DataPack = ({ children }) => <View style={styles.pack}>{children}</View>;

const Data = ({ subject, data }) => (
  <View style={styles.data}>
    <Text>
      <Text style={styles.bold}>{subject}: </Text>
      {data}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
  },
  picture: {
    width: "100%",
    height: undefined,
    aspectRatio: 3 / 2,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "monospace",
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  backArrow: {
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  pack: {
    backgroundColor: "white",
    width: "85%",
    shadowColor: "black",
    elevation: 2,
    padding: 10,
    marginBottom: 15,
  },
  data: {
    marginBottom: 10,
  },
  bold: { fontWeight: "bold" },
});
