import { Text } from '@/components/base/text';
import { Question } from '@/types/question';
import { Alert, Pressable, View } from 'react-native';
import IcThreeDots from '@/assets/icons/ic-dots-three-vertical.svg';
import { useToggle } from '@/hooks/use-toggle';
import { UpdateQuestionModal } from './update-question-modal';
import { deleteQuestion } from '@/service/question/delete-question';
import { useQuestionActions } from '@/stores/question';
import clsx from 'clsx';
import OutsidePressHandler from 'react-native-outside-press';

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
    <View
      className={clsx(
        'w-full p-3 rounded-xl bg-[#EDEDED] mb-3',
        'flex flex-row justify-between items-start',
        'relative'
      )}
      style={{
        zIndex: isSubMenuListOpen ? 1 : 0,
      }}
    >
      <View className="flex flex-row items-start">
        <Text customStyle="text-m_bold text-[#999999] mr-2">Q</Text>
        <Text customStyle="text-s_medium text-[#333333] w-[80%]">
          {question.title}
        </Text>
      </View>
      <Pressable onPress={openSubMenuList}>
        <IcThreeDots />
      </Pressable>
      {isSubMenuListOpen && (
        <OutsidePressHandler
          onOutsidePress={closeSubMenuList}
          className={clsx('absolute top-8 right-[14px]')}
        >
          <SubMenuList question={question} onCloseSubMenu={closeSubMenuList} />
        </OutsidePressHandler>
      )}
    </View>
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
        className={clsx('p-3 bg-white space-y-2 rounded-xl')}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
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
