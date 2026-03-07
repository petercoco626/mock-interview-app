import IcCaretLeft from '@/assets/icons/ic-caret-left.svg';
import clsx from 'clsx';
import { Pressable, View } from 'react-native';
import { Text } from '@/components/base/text';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreenRouteParamType } from '@/constants/screen';

export function Header() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  return (
    <View
      className={clsx(
        'w-full h-[55px] border-b border-[#DDDDDD] px-4 py-2 box-border',
        'flex flex-row items-center justify-between'
      )}
    >
      <Pressable
        onPress={() => navigation.navigate('home')}
        className="w-10 h-10 flex items-center justify-center"
      >
        <IcCaretLeft />
      </Pressable>
      <Text customStyle="text-m_medium">질문 리스트</Text>
      <View className="w-10 h-10" />
    </View>
  );
}
