import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const SceneButton = ({ scene, isSelected, onClick }) => {
  const handlePress = () => {
    onClick(scene.name);
  }

  return (
    <TouchableOpacity key={scene.name} onPress={handlePress}>
      <Text style={isSelected ? styles.buttonTextSelected : styles.buttonText}>{scene.name}</Text>
    </TouchableOpacity>
  );
};

export default SceneButton;