import {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0,0.5,1],
    outputRange: ['10%', '55%','50%']
  });

  const moonTop = moonAnimation.interpolate({
    inputRange: [0,0.5,0.65,0.75,1],
    outputRange: ['10%','50%','52%','53%','55%']
  });


  const moonColor = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['yellow', 'orange', 'black', 'orange', 'yellow']
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eclipse 2024 🌒</Text>
      <View style={styles.sun} /><View/>
      <Animated.View style={[styles.moon, {left: moonLeft ,top: moonTop, backgroundColor: moonColor}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  moon: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 1,
  },
  sun: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'orange',
  },
  text: {
    margin: 20,
    position: 'absolute',
    bottom: '20%',
  }
});