/* eslint-disable react/no-unstable-nested-components */
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from '@views/MenuScreen';
import { colorStyle } from '@styles/colorStyle';
import { fontStyle } from '@styles/fontStyle';

type Props = {}

const Tab = createBottomTabNavigator();
function Route(props: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: { ...styles.primaryFont },
        tabBarIconStyle: { display: 'none' },
        tabBarStyle: { ...styles.primaryBg, ...styles.styleTabBottom },
        headerTitle: () => <Text style={styles.primaryFont}>โต๊ะ 1</Text>,
        headerRight: () => (
          <TouchableOpacity>
            <Text style={styles.primaryFont}>ตระกร้าของฉัน</Text>
          </TouchableOpacity>
        ),
        headerStyle: { ...styles.primaryBg },
      }}
    >
      <Tab.Screen name="เมนู" component={MenuScreen} />
      <Tab.Screen name="ประวัติการสั่ง" component={MenuScreen} />
      <Tab.Screen name="แอดมิน" component={MenuScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  primaryFont: {
    fontFamily: fontStyle.primary,
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
  primaryBg: {
    backgroundColor: colorStyle.primary,
  },
  styleTabBottom: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default Route;
