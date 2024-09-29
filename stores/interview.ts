import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface InterviewState {
  selectedQuestions: string[];
  currentQuestionIdx: number;
  actions: {
    setSelectedQuestions: (questions: string[]) => void;
    nextQuestion: () => void;
    previewQuestion: () => void;
    resetStore: () => void;
  };
}

export const useInterviewStore = create<InterviewState>()(
  devtools(
    (set) => ({
      selectedQuestions: [],
      currentQuestionIdx: 0,
      actions: {
        setSelectedQuestions: (questions: string[]) =>
          set(() => ({ selectedQuestions: questions, currentQuestionIdx: 0 })),
        nextQuestion: () =>
          set((pre) => ({
            currentQuestionIdx:
              pre.currentQuestionIdx < pre.selectedQuestions.length
                ? pre.currentQuestionIdx + 1
                : pre.currentQuestionIdx,
          })),
        previewQuestion: () =>
          set((pre) => ({
            currentQuestionIdx:
              pre.currentQuestionIdx > 0
                ? pre.currentQuestionIdx - 1
                : pre.currentQuestionIdx,
          })),
        resetStore: () =>
          set(() => ({
            currentQuestionIdx: 0,
            selectedQuestions: [],
          })),
      },
    }),
    { name: 'interview-store', enabled: process.env.NODE_ENV === 'development' }
  )
);

export const useInterviewActions = () =>
  useInterviewStore((state) => state.actions);
