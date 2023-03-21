import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const recipeNumColumns = 2;

const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

export const RecipeCard = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: RECIPE_ITEM_MARGIN,
        marginTop: RECIPE_ITEM_MARGIN,
        width: (screenWidth - (recipeNumColumns + 1) * RECIPE_ITEM_MARGIN) / recipeNumColumns,
        height: RECIPE_ITEM_HEIGHT + 75,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 1.5,
    },
    photo: {
        width: (screenWidth - (recipeNumColumns + 1) * RECIPE_ITEM_MARGIN) / recipeNumColumns,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
      },
      category: {
        marginTop: 5,
        marginBottom: 5
      }
})