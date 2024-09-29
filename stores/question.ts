import { MockQuestions } from '@/constants/mock-questions';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface QuestionState {
  questions: string[];
  actions: {
    setQuestions: (questions: string[]) => void;
  };
}

export const useQuestionStore = create<QuestionState>()(
  devtools(
    (set) => ({
      questions: MockQuestions,
      actions: {
        setQuestions: (questions: string[]) => set(() => ({ questions })),
      },
    }),
    { name: 'question-store', enabled: process.env.NODE_ENV === 'development' }
  )
);

export const useQuestionActions = () =>
  useQuestionStore((state) => state.actions);
