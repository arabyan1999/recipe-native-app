import { TouchableHighlight, Image, Text, View } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';

const MenuButton = ({ title, onPress, source }) => (
    <TouchableHighlight onPress={onPress} style={styles.btnClickContain} underlayColor="rgba(128, 128, 128, 0.1)">
        <View style={styles.btnContainer}>
            <Image source={source} style={styles.btnIcon} />
            <Text style={styles.btnText}>{title}</Text>
        </View>
    </TouchableHighlight>
)

export default MenuButton;

MenuButton.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.string,
    title: PropTypes.string,
}
