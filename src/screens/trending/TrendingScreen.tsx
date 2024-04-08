import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { GifItem, SearchBar, EndOfResult } from '../../components';
import { TRENDING_API_URL, SEARCH_API_URL, GIFS_PER_PAGE } from '../../services/apiLinks';
import { Gif } from '../../types/types';

const TrendingGifScreen = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchGif, setSearchGif] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [endOfResults, setEndOfResults] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    loadGifs();
  }, [searchGif]);

  const loadGifs = async () => {
    setLoading(true);
    try {
      const offset = searchGif ? 0 : currentPage * GIFS_PER_PAGE;
      const url = searchGif ? SEARCH_API_URL(searchGif, offset) : TRENDING_API_URL;
      const response = await axios.get(url);
      const newGifs = response.data.data.map((gif: any) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_height.url,
      }));
      if (searchGif) {
        setGifs(newGifs);
        setCurrentPage(1);
      } else {
        setGifs((prevGifs) => [...prevGifs, ...newGifs]);
        setCurrentPage((prevPage) => prevPage + 1);
      }
      setEndOfResults(newGifs.length < GIFS_PER_PAGE);
    } catch (error) {
      console.error('Error loading gifs:', error);
    }
    setLoading(false);
  };

  const loadMoreGifs = () => {
    if (loading || endOfResults) return;
    setLoading(true);
    try {
      const offset = currentPage * GIFS_PER_PAGE;
      const url = searchGif ? SEARCH_API_URL(searchGif, offset) : `${TRENDING_API_URL}&offset=${offset}`;
      axios.get(url).then(response => {
        const newGifs = response.data.data.map((gif: any) => ({
          id: gif.id,
          title: gif.title,
          url: gif.images.fixed_height.url,
        }));
        if (newGifs.length === 0) {
          setEndOfResults(true);
        } else {
          setGifs(prevGifs => [...prevGifs, ...newGifs]);
          setCurrentPage(prevPage => prevPage + 1);
        }
        console.log('Loaded', newGifs.length, 'items');
      });
    } catch (error) {
      console.error('Error loading more gifs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setSearchGif('');
    setCurrentPage(0);
    setEndOfResults(false);
    loadMoreGifs();
    setRefreshing(false);
  };

  const renderFooter = () => {
    if (endOfResults) {
      return <EndOfResult />;
    }
    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchGif={searchGif}
        onSearchGifChange={setSearchGif}
        onSearch={loadGifs}
      />
      <FlatList
        data={gifs}
        renderItem={({ item }) => <GifItem id={item.id} title={item.title} url={item.url} />}
        keyExtractor={(item, index) => item.id + index}
        onEndReached={loadMoreGifs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TrendingGifScreen;
