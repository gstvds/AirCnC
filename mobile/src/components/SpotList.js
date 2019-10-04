// This component will handle all the spots and arrange them in a list
// FlatList is a component made to handle lists. Everytime we need to use a list inside React Native, we should use this component.
import React, { useEffect, useState } from "react";
import { withNavigation } from "react-navigation"; // SpotList is not a page like Login, List, etc.. So it does not have the acces to the property navigation. To deal with this, react-navigation uses withNavigation
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "../styles/SpotStyles";

import api from "../services/api";

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech } // transforma a rota spots em /spots?tech=
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  // Function to navigate user through the app, after clicking to make a reservation
  function handleNavigate(id) {
    navigation.navigate("Book", { id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empresas que usam <Text style={styles.bold}>{tech}</Text>
      </Text>

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnail_url }}
            />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>
              {item.price ? `R$${item.price}/dia` : "GRATUITO"}
            </Text>
            <TouchableOpacity
              onPress={() => handleNavigate(item._id)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default withNavigation(SpotList); // We changed export default to here so we could use withNavigation
