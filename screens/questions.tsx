import { GuideOnAddingQuestion } from '@/components/question/guide-on-adding-question';
import { Header } from '@/components/question/header';
import { StartInterviewButtonLayout } from '@/components/question/start-interview-button-layout';
import { View } from 'react-native';

export function QuestionScreen() {
  return (
    <View className="w-full h-full">
      <Header />
      <View className="px-4 py-6 box-border w-full h-[calc(100%-136px)]">
        <GuideOnAddingQuestion />
      </View>
      <View className="p-4 w-full h-[80px] box-border flex items-center justify-center">
        <StartInterviewButtonLayout />
      </View>
    </View>
  );
}
