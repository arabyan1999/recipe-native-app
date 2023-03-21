import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import menuImg from "../../../assets/icons/menu.png"

const MenuImage = ({ onPress }) => (
    <TouchableOpacity style={styles.headerButtonContainer} onPress={onPress}>
        <Image style={styles.headerButtonImage} source={menuImg} />
    </TouchableOpacity>
)

MenuImage.propTypes = {
    onPress: PropTypes.func,
};

export default MenuImage;
