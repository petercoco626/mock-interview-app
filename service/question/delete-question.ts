import { DeleteQuestionRequest } from '@/types/question';
import { fetchQuestions } from './fetch-questions';
import { setAsyncStorage } from '@/libs/async-storage';

export async function deleteQuestion({
  question: questionToDelete,
}: DeleteQuestionRequest) {
  try {
    const { questions } = await fetchQuestions();

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
