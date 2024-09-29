'use client';

import { useToggle } from '@/hooks/use-toggle';
import { StartInterviewButton } from '../common/start-interview-button';
import { NoQuestionDataModal } from './no-question-data-modal';

export function StartInterviewButtonLayout() {
  const {
    toggle: isModalOn,
    handleToggleOn: openModal,
    handleToggleOff: closeModal,
  } = useToggle();

  return (
    <>
      <StartInterviewButton onClickCallback={openModal} />
      {isModalOn && (
        <NoQuestionDataModal
          isModalOpen={isModalOn}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
}
