import clsx from 'clsx';
import { TextInput, TextInputProps, View } from 'react-native';

interface InputFieldProps extends TextInputProps {
  touched?: boolean;
}

const textInputWrapperDefaultStyle =
  'w-full h-12 px-4 box-border rounded-xl border-[1px] border-[#B6B4CD] focus:border-system-green-light';

const textInputDefaultStyle = 'text-black text-m_light';

const textInputPlaceholderStyle = 'rgba(206,206,206,1)';

export default function Input({ ...props }: InputFieldProps) {
  return (
    <View className={clsx(textInputWrapperDefaultStyle)}>
      <TextInput
        {...props}
        placeholderTextColor={textInputPlaceholderStyle}
        className={clsx('w-full h-full', textInputDefaultStyle)}
      />
    </View>
  );
}
