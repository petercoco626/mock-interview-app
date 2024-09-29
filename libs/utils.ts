// Fisher-Yates 알고리즘?
function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 이렇게도 표현할 수 있네?
  }
  return array;
}

export function extractRandomQuestionsFromTotalQuestions(
  totalQuestions: string[]
) {
  if (totalQuestions.length > 10) {
    // 배열 크기가 10 이상이면 10개의 요소를 랜덤으로 선택
    const randomSelection = [];
    const usedIndices = new Set<number>(); // set에 대한 개념을 따로 알아보자

    while (randomSelection.length < 10) {
      const randomIndex = Math.floor(Math.random() * totalQuestions.length);
      if (!usedIndices.has(randomIndex)) {
        randomSelection.push(totalQuestions[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }

    return shuffle(randomSelection);
  } else {
    // 배열 크기가 10 이하이면 그대로 섞음
    return shuffle([...totalQuestions]);
  }
}
