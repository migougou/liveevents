import { View, Text, ImageBackground } from 'react-native';
import { setUpDate, setUpTime } from '../utilities';

import Countdown from './Countdown';
import styles from './styles';

const ArtistCard = ({ id, artiste }) => (
  <View key={id}>
    <ImageBackground source={{ uri: artiste.acf.imageurl }} style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.timer}>
          <Countdown date={artiste.acf.date} start={artiste.acf.hdebut} end={artiste.acf.hfin}/>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nomArtiste}>{artiste.acf.artiste}</Text>
        <Text style={styles.infoArtiste}>{artiste.acf.scene} | {setUpDate(artiste.acf.date)} | De {setUpTime(artiste.acf.hdebut)} à {setUpTime(artiste.acf.hfin)}</Text>
      </View>
    </ImageBackground>
  </View>
);

export default ArtistCard;
