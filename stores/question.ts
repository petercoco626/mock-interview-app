import { MockQuestions } from '@/constants/mock-questions';
import { Question } from '@/types/question';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface QuestionState {
  questions: Question[];
  actions: {
    setQuestions: (questions: Question[]) => void;
  };
}

export const useQuestionStore = create<QuestionState>()(
  devtools(
    (set) => ({
      questions: [],
      actions: {
        setQuestions: (questions: Question[]) => set(() => ({ questions })),
      },
    }),
    { name: 'question-store', enabled: process.env.NODE_ENV === 'development' }
  )
);

export const useQuestionActions = () =>
  useQuestionStore((state) => state.actions);
