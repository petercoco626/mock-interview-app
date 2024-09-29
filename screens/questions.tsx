import { GuideOnAddingQuestion } from '@/components/question/guide-on-adding-question';
import { Header } from '@/components/question/header';
import { QuestionList } from '@/components/question/question-list';
import { StartInterviewButtonLayout } from '@/components/question/start-interview-button-layout';
import { Dimensions, View } from 'react-native';

export function QuestionScreen() {
  const { height } = Dimensions.get('window');

  const calculatedHeight = height - 136 - 16;

  return (
    <View className="w-full h-full bg-white">
      <Header />
      <View
        className="px-4 py-6 box-border w-full"
        style={{ height: calculatedHeight }}
      >
        <GuideOnAddingQuestion />
        <QuestionList questionListHeight={calculatedHeight - 56 - 48 - 100} />
      </View>
      <View className="p-4 w-full h-[80px] box-border flex items-center justify-center">
        <StartInterviewButtonLayout />
      </View>
    </View>
  );
}
