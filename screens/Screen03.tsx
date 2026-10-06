import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Screen03({
  route,
  navigation,
}: any) {
  const { bike } = route.params;

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>
          ←
        </Text>
      </TouchableOpacity>

      <View style={styles.imageBox}>
        <Image
          source={bike.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.name}>
        {bike.name}
      </Text>

      <View style={styles.priceRow}>
        <Text style={styles.discount}>
          15% OFF | 350$
        </Text>

        <Text style={styles.oldPrice}>
          449$
        </Text>
      </View>

      <Text style={styles.descriptionTitle}>
        Description
      </Text>

      <Text style={styles.description}>
        It is a very important form of writing as
        we write almost everything in paragraphs,
        be it an answer, essay, story, emails, etc.
      </Text>

      <View style={styles.bottom}>
        <Text style={styles.heart}>
          ♡
        </Text>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Add to card
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 35,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
  },

  backText: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  imageBox: {
    backgroundColor: '#FDECEC',
    height: 330,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '95%',
    height: '95%',
  },

  name: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  discount: {
    fontSize: 16,
    color: '#777',
    marginRight: 35,
  },

  oldPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },

  descriptionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 25,
  },

  description: {
    marginTop: 15,
    fontSize: 15,
    lineHeight: 24,
    color: '#777',
  },

  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 25,
  },

  heart: {
    fontSize: 32,
    marginRight: 15,
  },

  button: {
    flex: 1,
    backgroundColor: '#F44343',
    paddingVertical: 15,
    borderRadius: 30,
  },

  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});