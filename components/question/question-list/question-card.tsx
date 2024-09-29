import { Text } from '@/components/base/text';
import { Question } from '@/types/question';
import { View } from 'react-native';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <View className="w-full p-3 rounded-xl bg-[#EDEDED] mb-3">
      <Text customStyle="">{question.title}</Text>
    </View>
  );
}
