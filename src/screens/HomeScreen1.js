import React from "react";
import { View, Text, StyleSheet, Button, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from 'navbar1/assets/home.png';
import background from 'navbar1/assets/fondo.jpg';

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
      <Text style={{fontSize: 20}}>Bienvenido usuario</Text>
        <Image source={logo} style={styles.logo} />
      
      <Button
        title="SII ITCJ"
        onPress={() => navigation.navigate("SISE UTCJ")}
      />
      <Button
       title="WEB ITCJ"
       onPress={() => navigation.navigate("MAPA")}
       />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  background: {
    flex: 1,
    resizeMode: 'cover', // Cubrir todo el área visible
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)', // Fondo semi-transparente
    color: '#000000',
  },
});

export default HomeScreen1;
