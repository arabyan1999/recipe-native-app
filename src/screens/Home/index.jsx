import { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage";
import { getCategoryName } from "../../data/dataAPI";

const Home = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuImage
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />
            ),
            headerRight: () => <View />,
        });
    }, []);

    const onPressRecipe = (item) => {
        navigation.navigate("Recipe", { item });
    };

    const renderRecipes = ({ item }) => {
        return(
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
            <View style={styles.container}>
                <Image style={styles.photo} source={item.photo_url} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{getCategoryName(item.categoryIdS)}</Text>
            </View>
        </TouchableHighlight>
    )}

    return (
        <View>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={recipes}
                renderItem={renderRecipes}
                keyExtractor={(item) => item.recipeId}
            />
        </View>
    )
}

export default Home;
