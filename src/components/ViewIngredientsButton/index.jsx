import { TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ViewIngredientsButton = ({ onPress }) => (
  <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>View Ingredients</Text>
    </View>
  </TouchableHighlight>
);

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
};

export default ViewIngredientsButton;
