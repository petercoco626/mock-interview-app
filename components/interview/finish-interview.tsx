import { useInterviewActions } from '@/stores/interview';
import { Button } from '../base/button';
import { useQuestionStore } from '@/stores/question';
import { extractRandomQuestionsFromTotalQuestions } from '@/libs/utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreenRouteParamType } from '@/constants/screen';
import { View } from 'react-native';
import { Text } from '../base/text';

export function FinishInterview() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  const questions = useQuestionStore((state) => state.questions);

  const { setSelectedQuestions } = useInterviewActions();

  const onRestartInterview = () => {
    const extractedQuestions =
      extractRandomQuestionsFromTotalQuestions(questions);

    setSelectedQuestions(extractedQuestions);
  };

  return (
    <View className="w-full h-full p-4 box-border flex flex-col items-center justify-center gap-y-6">
      <Text customStyle="text-xxxl_bold">
        질문을 모두{'\n'}
        완료했어요!
      </Text>
      <View className="w-[180px] h-[180px] bg-system-gray" />
      <View className="space-y-2 w-full">
        <Button
          onPress={onRestartInterview}
          customStyle="w-full"
          text="재시작"
        />
        <Button
          onPress={() => navigation.navigate('question')}
          variant="secondary"
          customStyle="w-full"
          text="질문 리스트"
        />

        <Button
          onPress={() => navigation.navigate('home')}
          customStyle="w-full"
          variant="text"
          text="홈으로"
        />
      </View>
    </View>
  );
}
