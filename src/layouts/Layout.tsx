/* eslint-disable react/require-default-props */
import {
  View, StyleSheet,
} from 'react-native';
import React from 'react';

type Props = {
    searchComponent?: React.ReactNode
    tabComponent?:React.ReactNode
    bodyComponent?:React.ReactNode
}
function Layout(props: Props) {
  const { searchComponent, tabComponent, bodyComponent } = props;
  return (
    <View style={style.container}>
      <View style={style.containerSecond}>{searchComponent || null}</View>
      <View style={style.containerTab}>
        {tabComponent || null}
      </View>
      <View style={style.containerBody}>{bodyComponent || null}</View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D52D2C',
  },
  containerSecond: {
    flex: 1,
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
  },
  containerTab: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerBody: {
    paddingTop: 10,
    flex: 10,
    backgroundColor: 'white',
  },

});

export default Layout;
