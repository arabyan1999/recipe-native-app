import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;

const numColumns = 3;
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width: (screenWidth - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 60
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    textAlign: 'center'
  },
  photo: {
    width: (screenWidth - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 60
  }
});

export default styles;
