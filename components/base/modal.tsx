import { ReactNode } from 'react';
import {
  Modal as ReactNativeModal,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

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
      <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })}>
        <View className="w-full h-full bg-modal-background flex flex-row items-center justify-center">
          {children}
        </View>
      </KeyboardAvoidingView>
    </ReactNativeModal>
  );
}
