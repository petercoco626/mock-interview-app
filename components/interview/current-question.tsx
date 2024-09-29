import { useInterviewStore } from '@/stores/interview';
import { View } from 'react-native';
import { Text } from '@/components/base/text';

export function CurrentQuestion() {
  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  return (
    <View className="bg-[#DAF3F3] w-full p-3 rounded-xl mt-4">
      <Text customStyle="text-xxxl_bold text-system-green-light text-center mb-2">
        Q
      </Text>
      <Text customStyle="text-m_medium text-[#333333] text-center break-keep">
        {selectedQuestions[currentQuestionIdx]}
      </Text>
    </View>
  );
}
