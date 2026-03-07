import { Header } from './header';
import { useLayoutEffect } from 'react';
import { useInterviewStore } from '@/stores/interview';
import { CurrentQuestion } from './current-question';
import { QuestionIdxController } from './question-idx-controller';
import { FinishInterview } from './finish-interview';
import { AnswerTimer } from './answer-timer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreenRouteParamType } from '@/constants/screen';
import { Dimensions, View } from 'react-native';

export function Interview() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  const { height } = Dimensions.get('window');

  // // TODO : 계산식이 이게 맞는지 ? = box-border라는 개념이 있는지?
  // const calculatedHeight = height - 136 - 16;

  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  useLayoutEffect(() => {
    if (selectedQuestions.length === 0) {
      navigation.navigate('home');
    }
  }, [selectedQuestions]);

  if (selectedQuestions.length === 0) {
    return null;
  }

  if (currentQuestionIdx === selectedQuestions.length) {
    return <FinishInterview />;
  }

  return (
    <View className="w-full h-full bg-white flex flex-col justify-between pb-5">
      <View>
        <Header />
        <View className="w-full px-4 pt-7 box-border">
          <AnswerTimer />
          <CurrentQuestion />
        </View>
      </View>
      <QuestionIdxController />
    </View>
  );
}
