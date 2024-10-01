import { useInterviewActions } from '@/stores/interview';
import { Button } from '../base/button';
import { useQuestionStore } from '@/stores/question';
import { extractRandomQuestionsFromTotalQuestions } from '@/libs/utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreenRouteParamType } from '@/constants/screen';
import { Image, View } from 'react-native';
import { Text } from '../base/text';
import ImgFinishInterview from '@/assets/images/img-finish-interview.gif';

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
    <View className="w-full h-full p-4 box-border flex flex-col items-center justify-center bg-white">
      <Text customStyle="text-[40px] font-bold mb-6" customFont="font-Gmarket">
        면접 완료!
      </Text>
      <Image className="w-[180px] h-[180px]" source={ImgFinishInterview} />
      <View className="space-y-2 w-full mt-6">
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
