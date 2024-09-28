import { ScreenRouteParamType } from '@/constants/screen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export function QuestionScreen() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  return (
    <View>
      <Text>Questions 입니다.</Text>
      <Button
        title="home 가기"
        onPress={() => navigation.navigate('home')}
      ></Button>
      <Button
        title="interview으로 가기"
        onPress={() => navigation.navigate('interview')}
      ></Button>
    </View>
  );
}
