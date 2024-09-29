import { Text } from '@/components/base/text';
import { Question } from '@/types/question';
import { Alert, Pressable, View } from 'react-native';
import IcThreeDots from '@/assets/icons/ic-dots-three-vertical.svg';
import { useToggle } from '@/hooks/use-toggle';
import { UpdateQuestionModal } from './update-question-modal';
import { deleteQuestion } from '@/service/question/delete-question';
import { useQuestionActions } from '@/stores/question';
import clsx from 'clsx';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const {
    toggle: isSubMenuListOpen,
    handleToggleOn: openSubMenuList,
    handleToggleOff: closeSubMenuList,
  } = useToggle();

  return (
    <>
      <View
        className={clsx(
          'w-full p-3 rounded-xl bg-[#EDEDED] mb-3',
          'flex flex-row justify-between items-start',
          'relative'
        )}
      >
        <Text customStyle="text-m_bold text-[#99999]">Q</Text>
        <Text customStyle="text-[#333333]">{question.title}</Text>
        <Pressable onPress={openSubMenuList}>
          <IcThreeDots />
        </Pressable>
        {isSubMenuListOpen && (
          <SubMenuList question={question} onCloseSubMenu={closeSubMenuList} />
        )}
      </View>
    </>
  );
}

function SubMenuList({
  question,
  onCloseSubMenu,
}: {
  question: Question;
  onCloseSubMenu: () => void;
}) {
  const {
    toggle: isUpdateQuestionModalOpen,
    handleToggleOn: openUpdateQuestionModal,
    handleToggleOff: closeUpdateQuestionModal,
  } = useToggle();

  const { setQuestions } = useQuestionActions();

  const handleDeleteQuestion = async () => {
    try {
      const response = await deleteQuestion({ question });

      setQuestions(response);

      onCloseSubMenu(); // 사실 어차피 사라질거임.
    } catch (e) {
      Alert.alert('질문 삭제에 실패하였습니다 ㅠ');
    }
  };

  return (
    <>
      <View
        className={clsx(
          'p-3 bg-white space-y-2 rounded-xl',
          'absolute top-0 right-[14px]'
        )}
        style={{
          zIndex: 100,
        }}
      >
        <Pressable onPress={openUpdateQuestionModal} className="w-14">
          <Text customStyle="text-m_bold text-[#666666]">수정</Text>
        </Pressable>
        <Pressable onPress={handleDeleteQuestion} className="w-14">
          <Text customStyle="text-m_bold text-[#FF685F]">삭제</Text>
        </Pressable>
      </View>
      {isUpdateQuestionModalOpen && (
        <UpdateQuestionModal
          isModalOpen={isUpdateQuestionModalOpen}
          onCloseModal={() => {
            closeUpdateQuestionModal();
            onCloseSubMenu();
          }}
          selectedQuestion={question}
        />
      )}
    </>
  );
}
