import clsx from 'clsx';
import { Pressable, PressableProps } from 'react-native';
import { Text } from './text';

type ButtonVariant = 'primary' | 'secondary' | 'text';

type ButtonSize = 'large' | 'middle' | 'small';

interface ButtonProps extends PressableProps {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  customStyle?: string;
}

export function Button({
  text,
  variant = 'primary',
  size = 'large',
  customStyle = '',
  ...props
}: ButtonProps) {
  const defaultButtonStyle =
    'rounded-xl flex items-center justify-center box-border px-5 border';

  const styleOnSize: Record<
    ButtonSize,
    {
      button: string;
      text: string;
    }
  > = {
    large: {
      button: 'h-12',
      text: 'text-m_bold ',
    },
    middle: {
      button: 'h-10',
      text: 'text-s_bold ',
    },
    small: {
      button: 'h-8',
      text: 'text-xs_bold ',
    },
  };

  const styleOnVariant: Record<
    ButtonVariant,
    {
      button: string;
      text: string;
    }
  > = {
    primary: {
      button:
        'border-transparent bg-system-green-light active:bg-system-green disabled:bg-system-gray',
      text: 'text-white active:text-white-0.5 disabled:text-white-0.5',
    },
    secondary: {
      button:
        'border-system-green-light bg-white active:bg-system-green-light-0.15 disabled:border-system-gray',
      text: 'text-system-green-light disabled:text-system-gray',
    },
    text: {
      button: 'border-transparent',
      text: 'text-[#999999]',
    },
  };

  return (
    <Pressable
      {...props}
      className={clsx(
        defaultButtonStyle,
        styleOnSize[size].button,
        styleOnVariant[variant].button,
        customStyle
      )}
    >
      <Text
        customStyle={clsx(styleOnSize[size].text, styleOnVariant[variant].text)}
        customFont="font-SUIT_Bold"
      >
        {text}
      </Text>
    </Pressable>
  );
}
