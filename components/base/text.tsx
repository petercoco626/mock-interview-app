import clsx from 'clsx';
import { ReactNode } from 'react';
import { Text as ReactNativeText } from 'react-native';

interface TextProps {
  customFont?:
    | 'font-SUIT_Thin'
    | 'font-SUIT_Medium'
    | 'font-SUIT_Bold'
    | 'font-SUIT_ExtraBold'
    | 'font-Gmarket';
  customStyle: string;
  children: ReactNode;
}

export function Text({
  children,
  customStyle,
  customFont = 'font-SUIT_Medium',
}: TextProps) {
  return (
    <ReactNativeText className={clsx(customStyle, customFont)}>
      {children}
    </ReactNativeText>
  );
}

//
