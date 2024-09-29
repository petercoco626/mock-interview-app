import { View } from 'react-native';
import { Text } from '@/components/base/text';
import { RouteQuestionPageButton } from '@/components/home/route-question-page-button';
import { StartInterviewButtonLayout } from '@/components/home/start-interview-button-layout';

export function HomeScreen() {
  return (
    <View className="w-full h-full p-4 box-border">
      <View className="w-full h-full flex flex-col items-center justify-center gap-y-6">
        <Text customStyle="text-black text-[40px]" customFont="font-Gmarket">
          모의 면접
        </Text>
        <View className="w-[180px] h-[180px] bg-red-300" />
        <View className="w-full">
          <StartInterviewButtonLayout />
          <RouteQuestionPageButton />
        </View>
      </View>
    </View>
  );
}
