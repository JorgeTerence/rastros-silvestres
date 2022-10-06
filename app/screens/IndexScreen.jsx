import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { collection, doc, getDoc } from "firebase/firestore/lite";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/ListItem";
import { DBContext } from "../config/backend";
import DataScreen from './DataScreen';

const Stack = createNativeStackNavigator();

export default () => (
	<Stack.Navigator
		initialRouteName="Index"
		screenOptions={{ headerShown: false }}
	>
		<Stack.Screen component={Screen} name="Main" />
		<Stack.Screen component={DataScreen} name="Data" />
	</Stack.Navigator>
);

const Screen = ({ navigation }) => {
  const db = useContext(DBContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getDoc(doc(collection(db, "summaries"), "animals"))
      .then((res) => setData(res.data()?.summary))
      .catch(console.error);
  }, []);

  return (
    <View>      
      <FlatList
        ListHeaderComponent={() => <Text style={styles.title}>Índex de Animais</Text>}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            action={() => navigation.navigate("Data", item)}
          />
        )}
        keyExtractor={({ name }) => name.toLowerCase()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
});
