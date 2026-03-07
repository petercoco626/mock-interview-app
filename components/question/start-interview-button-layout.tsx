import { useToggle } from '@/hooks/use-toggle';
import { StartInterviewButton } from '../common/start-interview-button';
import { NoQuestionDataModal } from './no-question-data-modal';
import { View } from 'react-native';
import clsx from 'clsx';

export function StartInterviewButtonLayout() {
  const {
    toggle: isModalOn,
    handleToggleOn: openModal,
    handleToggleOff: closeModal,
  } = useToggle();

  return (
    <View
      className={clsx(
        'p-4 w-full box-border',
        'absolute left-0 bottom-0',
        'bg-white'
      )}
    >
      <StartInterviewButton onClickCallback={openModal} />
      {isModalOn && (
        <NoQuestionDataModal
          isModalOpen={isModalOn}
          onCloseModal={closeModal}
        />
      )}
    </View>
  );
}
