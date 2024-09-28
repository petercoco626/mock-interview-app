import clsx from 'clsx';
import { ReactNode } from 'react';
import { Text as ReactNativeText } from 'react-native';

interface TextProps {
  customFont?: string;
  customStyle: string;
  children: ReactNode;
}

export function Text({
  children,
  customStyle,
  customFont = 'font-SUIT',
}: TextProps) {
  return (
    <ReactNativeText className={clsx(customStyle, customFont)}>
      {children}
    </ReactNativeText>
  );
}
