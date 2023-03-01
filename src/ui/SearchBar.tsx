/* eslint-disable import/extensions */
import { StyleSheet } from 'react-native';
import React from 'react';
import { SearchBar as Search } from '@rneui/themed';
import { fontStyle } from '../styles/fontStyle';

function SearchBar() {
  return (
    <Search
      placeholder="ค้นหา"
      platform="android"
      inputStyle={styles.primaryFont}
      inputContainerStyle={{
        borderWidth: 1,
        borderColor: '#E7E7E7',
        borderRadius: 10,
        borderBottomWidth: 1,
      }}
    />
  );
}

const styles = StyleSheet.create({
  primaryFont: {
    fontFamily: fontStyle.primary,
  },
});

export default SearchBar;
