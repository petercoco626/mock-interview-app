import { ScrollView } from 'react-native';
import { useQuestionStore } from '@/stores/question';
import { QuestionCard } from './question-card';

export function QuestionList() {
  const questions = useQuestionStore((state) => state.questions);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mt-4 mb-[250px]"
    >
      {questions.map((question, index) => (
        <QuestionCard
          key={question.created_at}
          question={question}
          isLastIndex={questions.length - 1 === index}
        />
      ))}
    </ScrollView>
  );
}
