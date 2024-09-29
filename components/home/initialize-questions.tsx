import { removeAsyncStorage } from '@/libs/async-storage';
import { fetchQuestions } from '@/service/question/fetch-questions';
import { useQuestionActions } from '@/stores/question';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export function InitializeQuestions() {
  const { setQuestions } = useQuestionActions();

  const getQuestions = async () => {
    try {
      const { questions } = await fetchQuestions();
      setQuestions(questions);
    } catch (e) {
      Alert.alert('정보를 가져오는데 실패했어요...! ㅠ');
    }
  };
  const deleteAllQuestions = async () => {
    await removeAsyncStorage('questions');
  };

  useEffect(() => {
    getQuestions();
    // deleteAllQuestions();
  }, []);

  return null;
}
