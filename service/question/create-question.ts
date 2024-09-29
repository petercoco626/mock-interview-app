import { setAsyncStorage } from '@/libs/async-storage';
import { CreateQuestionRequest } from '@/types/question';
import { FetchQuestions } from './fetch-questions';

export async function CreateQuestion({
  question,
}: CreateQuestionRequest): Promise<void> {
  try {
    const { questions } = await FetchQuestions();

    await setAsyncStorage('questions', [...questions, question]);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error('create questions error');
    }
  }
}
