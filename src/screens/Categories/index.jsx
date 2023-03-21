import { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/dataAPI";
import MenuImage from "../../components/MenuImage";

const Categories = ({ navigation }) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            flex: 1,
        },
        headerLeft: () => (
            <MenuImage onPress={() => navigation.openDrawer()} />
        ),
        headerRight: () => <View />,
      })
    }, []);

    const onPressCategory = (item) => {
      const title = item.name;
      navigation.navigate("RecipesList", { category: item, title });
    }

    const renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
            <Text style={styles.categoriesName}>{item.name}</Text>
            <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
          </View>
        </TouchableHighlight>
      );
    
      return (
        <View>
          <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
        </View>
      );
}

export default Categories;
