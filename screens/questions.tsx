import { Text } from '@/components/base/text';
import { GuideOnAddingQuestion } from '@/components/question/guide-on-adding-question';
import { Header } from '@/components/question/header';
import { QuestionList } from '@/components/question/question-list';
import { AddQuestionButton } from '@/components/question/question-list/add-question-button';
import { StartInterviewButtonLayout } from '@/components/question/start-interview-button-layout';
import { useQuestionStore } from '@/stores/question';
import { View } from 'react-native';

export function QuestionScreen() {
  const questions = useQuestionStore((state) => state.questions);

  return (
    <View className="w-full h-full bg-white flex flex-col pb-5">
      <Header />
      <View className="px-4 pt-6 box-border w-full">
        <GuideOnAddingQuestion />
        <View className="flex flex-row items-center my-4">
          <Text customStyle="text-xl_bold mr-1" customFont="font-SUIT_Bold">
            질문 리스트
          </Text>
          <Text
            customStyle="text-sm_bold text-[#999999]"
            customFont="font-SUIT_Bold"
          >
            {questions.length}/100
          </Text>
        </View>
        <AddQuestionButton />
        <QuestionList />
      </View>
      <StartInterviewButtonLayout />
    </View>
  );
}
