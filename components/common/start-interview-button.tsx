'use client';

import { Button } from '@/components/base/button';
import { ScreenRouteParamType } from '@/constants/screen';
import { extractRandomQuestionsFromTotalQuestions } from '@/libs/utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface StartInterviewButtonProps {
  onClickCallback: () => void;
}
export function StartInterviewButton({
  onClickCallback,
}: StartInterviewButtonProps) {
  const questions: string[] = [];

  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  const onStartInterview = () => {
    const extractedQuestions =
      extractRandomQuestionsFromTotalQuestions(questions);

    navigation.navigate('interview');
  };

  return (
    <Button
      onPress={() => {
        // 사실 여기서는 전체 onClick을 받기보다는
        // 어차피 질문 갯수에 따라 모달 on/off 차이니까 이렇게만 작성해도 될것 같음.
        if (questions.length === 0) {
          onClickCallback();
          return;
        }
        onStartInterview();
      }}
      customStyle="w-full"
      text="면접 시작"
    />
  );
}
