import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { SearchBarProps } from '../../types/types';

const SearchBar: React.FC<SearchBarProps> = ({ searchGif, onSearchGifChange, onSearch }) => {
  const [tempSearchGif, setTempSearchGif] = useState('');

  const handleSearch = () => {
    console.log('Search', tempSearchGif)
    onSearchGifChange(tempSearchGif);
    onSearch();
  };

  const handleClearSearch = () => {
    console.log('Clear', tempSearchGif)
    setTempSearchGif('');
    onSearchGifChange('');
    onSearch();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search GIFs"
        value={tempSearchGif}
        onChangeText={setTempSearchGif}
        style={styles.input}
      />
      <Button title="Search" onPress={handleSearch} />
      <Button title="Clear" onPress={handleClearSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  input: {
    flex: 1, 
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export { SearchBar };
