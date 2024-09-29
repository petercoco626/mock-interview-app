import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { Text } from '@/components/base/text';
import { createQuestion } from '@/service/question/create-question';
import { useQuestionActions } from '@/stores/question';
import { Question } from '@/types/question';
import { useState } from 'react';
import { Alert, Dimensions, TextInput, View } from 'react-native';

const MAX_QUESTION_TEXT_LENGTH = 200;
interface AddQuestionModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function AddQuestionModal({
  isModalOpen,
  onCloseModal,
}: AddQuestionModalProps) {
  const { width } = Dimensions.get('window');

  const calculatedWidth = width - 32;

  const [questionTitle, setQuestionTitle] = useState('');

  const { createQuestion: createQuestionInStore } = useQuestionActions();

  const handleSaveQuestion = async () => {
    if (questionTitle.length === 0) {
      Alert.alert('1글자 이상을 입력해주세요 !');
      return;
    }

    const createdAt = new Date().toISOString();

    const newQuestion: Question = {
      created_at: createdAt,
      title: questionTitle,
    };

    try {
      await createQuestion({
        question: newQuestion,
      });

      createQuestionInStore(newQuestion);

      setQuestionTitle('');

      onCloseModal();
    } catch (e) {
      Alert.alert('질문 저장에 실패했습니다 ㅠ');
    }
  };
  const handleQuestionTitle = (text: string) => {
    if (text.length > MAX_QUESTION_TEXT_LENGTH) return;
    setQuestionTitle(text);
  };

  return (
    <Modal isModalOpen={isModalOpen}>
      <View
        className="p-6 bg-white rounded-3xl space-y-4"
        style={{
          width: calculatedWidth,
        }}
      >
        <Text customStyle="text-l_bold">질문작성</Text>
        <View className="w-full h-[160px] rounded-xl bg-[#EDEDED] p-3">
          <TextInput
            placeholder="모의 면접 질문을 적어주세요."
            placeholderTextColor={'#BBBBBB'}
            textAlignVertical="top"
            onChangeText={handleQuestionTitle}
            value={questionTitle}
            maxLength={MAX_QUESTION_TEXT_LENGTH}
            multiline={true}
            className="w-full h-[120px] text-m_medium box-border"
          />
          <View className="flex flex-row justify-end">
            <Text customStyle="text-xs_bold text-[#999999]">
              {questionTitle.length}/{MAX_QUESTION_TEXT_LENGTH}
            </Text>
          </View>
        </View>
        <View className="w-full flex flex-row">
          <Button
            variant="secondary"
            customStyle="flex flex-1 mr-2"
            onPress={onCloseModal}
            text="취소"
          />
          <Button
            customStyle="flex flex-1"
            onPress={handleSaveQuestion}
            text="저장"
          />
        </View>
      </View>
    </Modal>
  );
}
