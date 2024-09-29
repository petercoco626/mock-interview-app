import { Button } from '@/components/base/button';
import { ScreenRouteParamType } from '@/constants/screen';
import { extractRandomQuestionsFromTotalQuestions } from '@/libs/utils';
import { fetchQuestions } from '@/service/question/fetch-questions';
import { useInterviewActions } from '@/stores/interview';
import { useQuestionActions, useQuestionStore } from '@/stores/question';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert } from 'react-native';

interface StartInterviewButtonProps {
  onClickCallback: () => void;
}
export function StartInterviewButton({
  onClickCallback,
}: StartInterviewButtonProps) {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  const questions = useQuestionStore((state) => state.questions);

  const { setSelectedQuestions } = useInterviewActions();

  const { setQuestions } = useQuestionActions();

  const onStartInterview = () => {
    const extractedQuestions =
      extractRandomQuestionsFromTotalQuestions(questions);

    setSelectedQuestions(extractedQuestions);

    navigation.navigate('interview');
  };

  const getQuestions = async () => {
    try {
      const { questions } = await fetchQuestions();
      setQuestions(questions);
    } catch (e) {
      Alert.alert('정보를 가져오는데 실패했어요...! ㅠ');
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

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
