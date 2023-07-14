import { View, Text, ImageBackground } from 'react-native';
import Countdown from './Countdown';
import styles from './styles';

const ArtistCard = ({ id, artiste }) => (
  <View key={id} style={styles.card}>
    <ImageBackground source={{ uri: artiste.acf.imageurl }} style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.timer}>
          <Countdown date={artiste.acf.date} start={artiste.acf.hdebut} end={artiste.acf.hfin}/>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.artist}>{artiste.acf.artiste}</Text>
        <Text style={styles.infoCarte}>{artiste.acf.scene}</Text>
        <Text style={styles.infoCarte}>
          {artiste.acf.date.slice(6, 8)} Juin
        </Text>
        <Text style={styles.infoCarte}>
          {artiste.acf.hdebut.slice(0, 5)} - {artiste.acf.hfin.slice(0, 5)}
        </Text>
      </View>
    </ImageBackground>
  </View>
);

export default ArtistCard;
