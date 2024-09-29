import { getAsyncStorage } from '@/libs/async-storage';
import { FetchQuestionsResponse, Question } from '@/types/question';

export async function FetchQuestions(): Promise<FetchQuestionsResponse> {
  try {
    const questions = (await getAsyncStorage('questions')) as Question[] | null;

    return {
      questions: questions || [],
    };
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error('fetch questions error');
    }
  }
}
