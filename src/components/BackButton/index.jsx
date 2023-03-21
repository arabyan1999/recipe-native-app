import { TouchableHighlight, Image } from "react-native";
import PropTypes from 'prop-types';
import styles from './styles'

const BackButton = ({ onPress }) => (
    <TouchableHighlight onPress={onPress} style={styles.btnContainer}>
        <Image source={require("../../../assets/icons/backArrow.png")} style={styles.btnIcon} />
    </TouchableHighlight>
)

export default BackButton;

BackButton.propTypes = {
    onPress: PropTypes.func,
};
