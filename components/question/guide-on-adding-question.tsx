import IcWarningCircle from '@/assets/icons/ic-warning-circle.svg';
import { View } from 'react-native';
import { Text } from '@/components/base/text';

export function GuideOnAddingQuestion() {
  return (
    <View className="w-full rounded-xl p-3 flex flex-row items-center bg-system-blue-light">
      <IcWarningCircle />
      <Text customStyle="text-s_medium text-system-blue ml-2">
        질문은 최대 100개까지 추가할 수 있고, {'\n'}
        문제는 질문 중 랜덤으로 10개씩 나타납니다.
      </Text>
    </View>
  );
}
