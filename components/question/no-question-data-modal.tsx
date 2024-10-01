import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { Text } from '@/components/base/text';
import { View } from 'react-native';

interface NoQuestionDataModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function NoQuestionDataModal({
  isModalOpen,
  onCloseModal,
}: NoQuestionDataModalProps) {
  return (
    <Modal isModalOpen={isModalOpen}>
      <View className="p-4 bg-white space-y-4 rounded-3xl">
        <View className="w-[259px] h-[85px] flex flex-row items-center justify-center">
          <Text customStyle="text-m_medium text-center">
            등록된 질문이 없습니다.{'\n'}
            질문을 먼저 등록해 주세요.
          </Text>
        </View>
        <Button customStyle="w-full" onPress={onCloseModal} text="확인" />
      </View>
    </Modal>
  );
}
