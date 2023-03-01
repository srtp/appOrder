import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { useGetAllDataQuery } from '@stores/services/food';
import CardMenu from '@ui/CardMenu';
import { filterFoodData } from '@utils/filterMenu';
import { useAppSelector } from '@stores/store';

function MenuComponent() {
  const active = useAppSelector((state) => state.categoryState);
  const { data, isLoading, error } = useGetAllDataQuery();
  const items = filterFoodData(data!, active.title);

  if (isLoading) {
    <Text>loading...</Text>;
  }

  if (error) {
    <Text>error</Text>;
  }
  return (
    <ScrollView>
      {active.title !== 'all' ? items?.map((item) => (
        <View key={item.title}>
          { item.info.map((theData) => (
            <View key={theData.id}>
              <CardMenu data={theData} />
            </View>
          ))}
        </View>
      )) : data?.map((all) => (
        <View key={all.title}>
          <Text>{all.i18n}</Text>
          {all.info.map((info) => (
            <View key={info.id}>
              <CardMenu data={info} />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

export default MenuComponent;
