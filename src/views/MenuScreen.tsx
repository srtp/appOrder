import { View } from 'react-native';
import React from 'react';
import Layout from '@layouts/Layout';
import SearchBar from '@ui/SearchBar';
import TabCategory from '@ui/TabCategory';
import MenuComponent from '@components/MenuComponent';

function MenuScreen() {
  return (
    <View style={{ height: '100%' }}>
      <Layout
        searchComponent={<SearchBar />}
        tabComponent={<TabCategory />}
        bodyComponent={<MenuComponent />}
      />
    </View>
  );
}

export default MenuScreen;
