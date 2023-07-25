import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const SceneButton = ({ name, scene, onClick }) => (
  <TouchableOpacity key={name} onPress={() => onClick(scene.scene)}>
    <Text style={styles.buttonText}>{scene.name}</Text>
  </TouchableOpacity>
);

export default SceneButton;
