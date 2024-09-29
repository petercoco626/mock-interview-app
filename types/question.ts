export interface Question {
  created_at: string;
  title: string;
}

export interface FetchQuestionsResponse {
  questions: Question[];
}

export interface CreateQuestionRequest {
  question: Question;
}

export interface UpdateQuestionRequest {
  question: Question;
}

export interface DeleteQuestionRequest {
  question: Question;
}
