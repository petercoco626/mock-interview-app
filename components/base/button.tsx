import clsx from 'clsx';
import { Text, Pressable, PressableProps, StyleSheet } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'text';

type ButtonSize = 'large' | 'middle' | 'small';

interface ButtonProps extends PressableProps {
  text: string;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className = '',
  text,
  variant = 'primary',
  size = 'large',
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
      text: 'text-m_medium ',
    },
    middle: {
      button: 'h-10',
      text: 'text-s_medium ',
    },
    small: {
      button: 'h-8',
      text: 'text-xs_medium ',
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
        'border-system-green-light active:bg-system-green-light-0.15 disabled:border-system-gray',
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
        className
      )}
    >
      <Text
        className={clsx(styleOnSize[size].text, styleOnVariant[variant].text)}
      >
        {text}
      </Text>
    </Pressable>
  );
}
