import { Button } from '@/components/base/button';
import { useToggle } from '@/hooks/use-toggle';
import { AddQuestionModal } from './add-question-modal';
import { useQuestionStore } from '@/stores/question';
import { Alert } from 'react-native';

export function AddQuestionButton() {
  const {
    toggle: isAddQuestionModalOpen,
    handleToggleOn: openAddQuestionModal,
    handleToggleOff: closeAddQuestionModal,
  } = useToggle();

  const questions = useQuestionStore((state) => state.questions);

  const handleAddQuestionButtonClick = () => {
    if (questions.length === 100) {
      Alert.alert('질문은 100개 넘게 등록할 수 없어요 !');
      return;
    }

    openAddQuestionModal();
  };

  return (
    <>
      <Button
        text="+ 질문 추가"
        variant="secondary"
        onPress={handleAddQuestionButtonClick}
      />
      {isAddQuestionModalOpen && (
        <AddQuestionModal
          isModalOpen={isAddQuestionModalOpen}
          onCloseModal={closeAddQuestionModal}
        />
      )}
    </>
  );
}
