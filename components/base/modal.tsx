import { ReactNode } from 'react';
import { Modal as ReactNativeModal, View } from 'react-native';

interface ModalProps {
  isModalOpen: boolean;
  children: ReactNode;
}

export function Modal({ isModalOpen, children }: ModalProps) {
  return (
    <ReactNativeModal
      animationType="fade"
      transparent={true}
      visible={isModalOpen}
    >
      <View className="w-full h-full bg-modal-background flex flex-row items-center justify-center">
        {children}
      </View>
    </ReactNativeModal>
  );
}
