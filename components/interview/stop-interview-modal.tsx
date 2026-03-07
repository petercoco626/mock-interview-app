import { Button } from '../base/button';
import { Modal } from '../base/modal';
import { useInterviewActions } from '@/stores/interview';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreenRouteParamType } from '@/constants/screen';
import { View } from 'react-native';
import { Text } from '../base/text';

interface StopInterviewModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function StopInterviewModal({
  isModalOpen,
  onCloseModal,
}: StopInterviewModalProps) {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  const { resetStore } = useInterviewActions();

  const handleRouteHome = () => {
    navigation.navigate('home');
    resetStore();
  };

  return (
    <Modal isModalOpen={isModalOpen}>
      <View className="p-4 bg-white space-y-4 rounded-3xl">
        <View className="w-[259px] h-[85px] flex flex-row items-center justify-center">
          <Text customStyle="text-m_medium text-center">
            답변을 그만하고 홈으로 돌아갈까요?
          </Text>
        </View>
        <View className="w-full flex flex-row">
          <Button
            variant="secondary"
            customStyle="flex-1 mr-2"
            onPress={onCloseModal}
            text="취소"
          />
          <Button
            customStyle="flex-1"
            onPress={handleRouteHome}
            text="홈으로"
          />
        </View>
      </View>
    </Modal>
  );
}
