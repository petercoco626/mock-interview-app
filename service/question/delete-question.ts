import { DeleteQuestionRequest } from '@/types/question';
import { FetchQuestions } from './fetch-questions';
import { setAsyncStorage } from '@/libs/async-storage';

export async function DeleteQuestion({
  question: questionToDelete,
}: DeleteQuestionRequest) {
  try {
    const { questions } = await FetchQuestions();

    const updatedQuestions = questions.filter(
      (question) => question.created_at !== questionToDelete.created_at
    );

    await setAsyncStorage('questions', updatedQuestions);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error('delete questions error');
    }
  }
}
