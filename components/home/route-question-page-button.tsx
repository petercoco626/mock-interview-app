import { Button } from '@/components/base/button';
import { ScreenRouteParamType } from '@/constants/screen';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export function RouteQuestionPageButton() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  return (
    <Button
      customStyle="w-full mt-2"
      variant="secondary"
      text="질문 추가"
      onPress={() => navigation.navigate('question')}
    />
  );
}
