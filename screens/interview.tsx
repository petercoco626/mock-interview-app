import { ScreenRouteParamType } from '@/constants/screen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export function InterviewScreen() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  return (
    <View>
      <Text>Interview 입니다.</Text>
      <Button
        title="home 가기"
        onPress={() => navigation.navigate('home')}
      ></Button>
      <Button
        title="questions으로 가기"
        onPress={() => navigation.navigate('question')}
      ></Button>
    </View>
  );
}
