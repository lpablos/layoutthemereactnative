/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banners}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué Hacer En Paris</Text>
          <ScrollView horizontal={true}>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/mejores1.jpg')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/mejores2.jpg')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.mejores}
              source={require('./assets/img/mejores3.jpg')}
            />
          </View>
          <Text style={styles.titulo}>Hospedaje En Los Angeles</Text>
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje1.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje3.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banners: {
    height: 250,
    flex: 1,
  },
  contenedor: {
    marginHorizontal: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: '#3d4042',
  },
  ciudad: {
    with: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    // flex: 1,
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
  },
});

export default App;
