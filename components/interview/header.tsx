import clsx from 'clsx';
import IcCaretLeft from '@/assets/icons/ic-caret-left.svg';
import { useToggle } from '@/hooks/use-toggle';
import { StopInterviewModal } from './stop-interview-modal';
import { useInterviewStore } from '@/stores/interview';
import { Pressable, View } from 'react-native';
import { Text } from '../base/text';

export function Header() {
  const {
    toggle: isModalOn,
    handleToggleOn: openModal,
    handleToggleOff: closeModal,
  } = useToggle();

  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  return (
    <>
      <View
        className={clsx(
          'w-full h-[55px] border-b border-[#DDDDDD] px-4 py-2 box-border',
          'flex flex-row items-center justify-between'
        )}
      >
        <Pressable
          onPress={openModal}
          className="w-10 h-10 flex items-center justify-center"
          aria-label="면접을 멈출건지에 대한 모달을 띄웁니다"
        >
          <IcCaretLeft />
        </Pressable>
        <Text customStyle="text-m_medium">
          {currentQuestionIdx + 1}/{selectedQuestions.length}
        </Text>
        <View className="w-10 h-10" />
      </View>
      {isModalOn && (
        <StopInterviewModal isModalOpen={isModalOn} onCloseModal={closeModal} />
      )}
    </>
  );
}
