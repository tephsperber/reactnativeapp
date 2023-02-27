import React from "react";
import { View, FlatList, Text, TextInput, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./css/styles.js";
const DATA = [
  {
    id: 1,
    title: "Add task",
    subtitle: "Creatives for branging",
  },
  {
    id: 2,
    title: "Review",
    subtitle: "Verification process with team",
  },
  {
    id: 3,
    title: "Double Review",
    subtitle: "Double verification process with team",
  },
];

const Item = ({ title, subtitle }) => (
  <View style={styles.item}>
    <View style={styles.titleView}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topText}>
          <Text style={styles.welcome}>Welcome back,</Text>
          <Text style={styles.name}>Carolina Terner </Text>
        </View>
        <View>
          <Text>
            <Image
              style={styles.image}
              source={require("./img/profilePic.png")}
            />
          </Text>
        </View>
      </View>
      <View>
        <TextInput style={styles.input}>
          <Ionicons name="search" size={15} color="black" /> Try to find...
        </TextInput>
      </View>
      <View>
        <Text style={styles.mainTitle}>Task-based explanation process</Text>
      </View>
      <View styles={styles.flatlist}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Item id={item.id} title={item.title} subtitle={item.subtitle} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.flowsContainer}>
        <Text style={styles.flowsTitle}>
          Flows list
          <Ionicons name="caret-down-outline" />
        </Text>
        <Text style={styles.flowsSubtitle}>See all</Text>
      </View>
      <View style={styles.flowsOptions}>
        <View style={styles.flowsOption}>
          <Text style={styles.name}>Document verificartion </Text>
          <Text style={styles.welcome}>3 min ago</Text>
        </View>
        <View>
          <Text>
            <Ionicons name="add-circle" size={35} style={styles.iconPlus} />
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.flowsOptions}>
        <View style={styles.flowsOption}>
          <Text style={styles.name}>Newbie onboarding</Text>
          <Text style={styles.welcome}>5 days ago</Text>
        </View>
        <View>
          <Text>
            <Ionicons name="add-circle" size={35} style={styles.iconPlus} />
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Image
          style={styles.bottomImage}
          source={require("./img/houseIcon.png")}
        />
        <Image
          style={styles.bottomImage}
          source={require("./img/pizzaIcon.png")}
        />
        <Image
          style={styles.bottomImage}
          source={require("./img/configIcon.png")}
        />
      </View>
    </View>
  );
}
