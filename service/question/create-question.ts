import { setAsyncStorage } from '@/libs/async-storage';
import { CreateQuestionRequest } from '@/types/question';
import { fetchQuestions } from './fetch-questions';

export async function createQuestion({
  question,
}: CreateQuestionRequest): Promise<void> {
  try {
    const { questions } = await fetchQuestions();

    await setAsyncStorage('questions', [question, ...questions]);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error('create questions error');
    }
  }
}
