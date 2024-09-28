import { ScreenRouteParamType } from '@/constants/screen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  return (
    <View>
      <Text>Home 입니다.</Text>
      <Button
        title="interview로 가기"
        onPress={() => navigation.navigate('interview')}
      ></Button>
      <Button
        title="questions으로 가기"
        onPress={() => navigation.navigate('question')}
      ></Button>
    </View>
  );
}
