import { Text } from '@/components/base/text';
import { ScrollView, View } from 'react-native';
import { AddQuestionButton } from './add-question-button';
import { useQuestionStore } from '@/stores/question';
import { QuestionCard } from './question-card';

interface QuestionListProps {
  questionListHeight: number;
}

export function QuestionList({ questionListHeight }: QuestionListProps) {
  const questions = useQuestionStore((state) => state.questions);

  return (
    <View className="mt-[22px]">
      <View className="flex flex-row items-center mb-4">
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-4"
        style={{
          height: questionListHeight,
        }}
      >
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            isLastIndex={questions.length - 1 === index}
          />
        ))}
      </ScrollView>
    </View>
  );
}
