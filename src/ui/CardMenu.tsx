import { View, Text, Image } from 'react-native';
import React from 'react';
import { Card } from '@rneui/base';
import { DetailFoods } from '@models/interfaces/TypeFood';

type Props = {
    data: DetailFoods
}

function CardMenu(props: Props) {
  const { data } = props;
  return (
    <Card containerStyle={{}} wrapperStyle={{}} key={data.id}>
      <Card.Title>{data.i18n}</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: 'relative',
          alignItems: 'center',
        }}
      >
        <Image
          style={{ width: '100%', height: 100 }}
          resizeMode="contain"
          source={{
            uri:
'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
          }}
        />
        <Text>Pranshu Chittora</Text>
      </View>
    </Card>
  );
}

export default CardMenu;
