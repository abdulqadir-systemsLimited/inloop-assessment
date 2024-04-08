import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { GifItemProps } from '../../types/types';


const GifItem: React.FC<GifItemProps> = ({ title, url }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: {title}</Text>
      {loading && <ActivityIndicator color={colors.purple} size={100} style={styles.activityIndicator} />}
      <Image source={{ uri: url }} style={styles.image} onLoad={() => setLoading(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    elevation: 10,
    backgroundColor: colors.feildLabelColor,
    alignItems: 'center',
    borderRadius: 20,
    padding: 30,
  },
  title: {
    color: colors.primary,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { GifItem };
