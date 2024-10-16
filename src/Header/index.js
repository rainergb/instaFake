import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>

      <TouchableOpacity>
        <Image 
          source={require('../img/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>

        <View style={styles.direita}>     
            <TouchableOpacity>
                <Image 
                source={require('../img/heart_off.png')}
                style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('../img/messenger.png')}
                style={styles.icon}
                />
            </TouchableOpacity>
        </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 65,
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    shadowColor: '#ffffff33',
    elevation: 2
  },
  logo: {
    height: 35,
    width: 125

  },
  direita: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 icon: {
    marginLeft: 20,
    height: 27,
    width: 27
 }
});
