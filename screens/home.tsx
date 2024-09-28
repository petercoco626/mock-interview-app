import { Button } from '@/components/base/button';
import Input from '@/components/base/input';
import { ScreenRouteParamType } from '@/constants/screen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  return (
    <View>
      <Text className="text-system-blue">Home 입니다.</Text>
      <Button
        text="interview로 가기"
        onPress={() => navigation.navigate('interview')}
      ></Button>
      <Button
        text="questions으로 가기"
        variant="secondary"
        onPress={() => navigation.navigate('question')}
      ></Button>
      <Input placeholder="안녕하세요" />
    </View>
  );
}
