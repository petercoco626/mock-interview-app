import { setAsyncStorage } from '@/libs/async-storage';
import { FetchQuestions } from './fetch-questions';
import { UpdateQuestionRequest } from '@/types/question';

export async function UpdateQuestion({
  question: questionsToUpdate,
}: UpdateQuestionRequest) {
  try {
    const { questions } = await FetchQuestions();

    const matchedQuestionIdx = questions.findIndex(
      (question) => question.created_at !== questionsToUpdate.created_at
    );

    if (matchedQuestionIdx === -1) {
      throw new Error('no matched question idx');
    }

    const updatedQuestions = questions.with(
      matchedQuestionIdx,
      questionsToUpdate
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
