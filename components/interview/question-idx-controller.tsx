import { useInterviewActions, useInterviewStore } from '@/stores/interview';
import { Button } from '../base/button';
import { View } from 'react-native';

export function QuestionIdxController() {
  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const { nextQuestion, previewQuestion } = useInterviewActions();

  if (currentQuestionIdx === selectedQuestions.length - 1) {
    return (
      <View className="p-4 flex flex-row">
        <Button
          variant="secondary"
          customStyle="flex-1 mr-2"
          onPress={previewQuestion}
          text="&lt; 이전"
        />
        <Button
          variant="primary"
          customStyle="flex-1"
          onPress={nextQuestion}
          text="완료"
        />
      </View>
    );
  }

  if (currentQuestionIdx === 0) {
    return (
      <View className="p-4 w-full">
        <Button
          variant="secondary"
          customStyle="w-full"
          onPress={nextQuestion}
          text="다음 &gt;"
        />
      </View>
    );
  }

  return (
    <View className="p-4 flex flex-row">
      <Button
        variant="secondary"
        customStyle="flex-1 mr-2"
        onPress={previewQuestion}
        text="&lt; 이전"
      />

      <Button
        variant="secondary"
        customStyle="flex-1"
        onPress={nextQuestion}
        text="다음 &gt;"
      />
    </View>
  );
}
