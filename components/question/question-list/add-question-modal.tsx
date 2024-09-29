import { Button } from '@/components/base/button';
import { Modal } from '@/components/base/modal';
import { Text } from '@/components/base/text';
import { ScreenRouteParamType } from '@/constants/screen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

interface AddQuestionModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function AddQuestionModal({
  isModalOpen,
  onCloseModal,
}: AddQuestionModalProps) {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  return (
    <Modal isModalOpen={isModalOpen}>
      <View className="p-4 bg-white space-y-4 rounded-3xl">
        <View className="w-[259px] h-[85px] flex flex-col items-center justify-center">
          <Text customStyle="text-m_medium text-center">
            등록된 질문이 없습니다.{'\n'}
            질문을 먼저 등록할까요?
          </Text>
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
            onPress={() => navigation.navigate('question')}
            text="질문 추가"
          />
        </View>
      </View>
    </Modal>
  );
}
