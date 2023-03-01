import React from 'react';
import { Text } from '@rneui/themed';
import {
  FlatList, ScrollView, StyleSheet, TouchableOpacity,
} from 'react-native';
import { category } from '@models/const/category';
import { useDispatch } from 'react-redux';
import { setActive } from '@stores/slices/categorySlice';
import { useAppSelector } from '@stores/store';

function TabCategory() {
  const active = useAppSelector((state) => state.categoryState);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <FlatList
        horizontal
        data={category}
        keyExtractor={(item) => `${item.title}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={active.title === item.title ? styles.tabActive : styles.tab}
            onPress={() => {
              dispatch(setActive(item));
            }}
          >
            <Text style={styles.Text}>{item.i18n}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
  Text: {
    fontFamily: 'Prompt-Light',
    fontSize: 15,
  },
  tabActive: {
    borderBottomWidth: 1,
    borderColor: '#E7E7E7',
    padding: 10,
  },
});

export default TabCategory;
