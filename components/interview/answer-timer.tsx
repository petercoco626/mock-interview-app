import { useInterviewActions, useInterviewStore } from '@/stores/interview';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@/components/base/text';
import IcPlay from '@/assets/icons/ic-play.svg';
import IcPause from '@/assets/icons/ic-pause.svg';

interface ConfigurationOnTimerToReady {
  startTime: number;
  finishTime: number;
  isTimerOn: boolean;
}

const configurationOnTimerToReady: ConfigurationOnTimerToReady = {
  startTime: 5,
  finishTime: -1,
  isTimerOn: true,
};

const configurationOnTimerToAnswer: ConfigurationOnTimerToReady = {
  startTime: 60,
  finishTime: -60 * 10 - 1,
  isTimerOn: false,
};

export function AnswerTimer() {
  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  const { nextQuestion } = useInterviewActions();

  const {
    time: timeToReady,
    onResumeTimer: onResumeTimerToReady,
    onStopTimer: onStopTimerToReady,
    isTimerStopped: isTimerToReadyStopped,
    resetTimer: resetTimerToReady,
  } = useTimer({
    startTime: configurationOnTimerToReady.startTime,
    finishTime: configurationOnTimerToReady.finishTime,
    isTimerOn: configurationOnTimerToReady.isTimerOn,
  });

  const {
    time: timeToAnswer,
    onResumeTimer: onResumeTimerToAnswer,
    onStopTimer: onStopTimerToAnswer,
    isTimerStopped: isTimerToAnswerStopped,
    resetTimer: resetTimerToAnswer,
  } = useTimer({
    startTime: configurationOnTimerToAnswer.startTime,
    finishTime: configurationOnTimerToAnswer.finishTime,
    isTimerOn: configurationOnTimerToAnswer.isTimerOn,
  });

  // 준비시간이 모두 완료되면 답변시간 타이머를 ON 시킨다.
  useEffect(() => {
    if (
      timeToReady === configurationOnTimerToReady.finishTime &&
      !isTimerToReadyStopped &&
      isTimerToAnswerStopped
    ) {
      onResumeTimerToAnswer();
      onStopTimerToReady();
    }
  }, [timeToReady, isTimerToAnswerStopped, isTimerToReadyStopped]);

  useEffect(() => {
    if (timeToAnswer === configurationOnTimerToAnswer.finishTime) {
      nextQuestion();
    }
  }, [timeToAnswer]);

  useEffect(() => {
    // 변경될때마다 초기화
    resetTimerToReady();
    resetTimerToAnswer();
  }, [currentQuestionIdx]);

  if (timeToReady !== configurationOnTimerToReady.finishTime) {
    return (
      <View className="flex flex-col items-center gap-y-2 w-full rounded-lg bg-[#EDEDED] p-3 box-border">
        <Text customStyle="text-m_medium text-[#333333] text-center">
          준비하세요.
        </Text>
        <Text
          customStyle="text-center text-[#666666] text-xxxl_bold"
          customFont="font-SUIT_Bold"
        >
          {covertTimeToMMSS(timeToReady)}
        </Text>
        <View className="w-full flex flex-row justify-center">
          {isTimerToReadyStopped && (
            <Pressable
              onPress={
                isTimerToReadyStopped
                  ? onResumeTimerToReady
                  : onStopTimerToReady
              }
              aria-label="답변 준비 타이머를 재개합니다."
            >
              <IcPlay />
            </Pressable>
          )}
          {!isTimerToReadyStopped && (
            <Pressable
              onPress={onStopTimerToReady}
              aria-label="답변 준비 타이머를 일시중지합니다."
            >
              <IcPause />
            </Pressable>
          )}
        </View>
      </View>
    );
  }

  if (timeToReady === configurationOnTimerToReady.finishTime) {
    return (
      <View
        className={clsx(
          'flex flex-col items-center gap-y-2 w-full rounded-lg p-3 box-border',
          timeToAnswer < 0 ? 'bg-[#FFC7C3]' : 'bg-system-blue-light'
        )}
      >
        <Text customStyle="text-m_medium text-[#333333] text-center">
          답변해 주세요.
        </Text>
        <Text
          customStyle={clsx(
            'text-center text-xxxl_bold',
            timeToAnswer < 0 ? 'text-[#FF685F]' : 'text-system-blue'
          )}
        >
          {timeToAnswer < 0 && '-'}
          {covertTimeToMMSS(timeToAnswer)}
        </Text>
        <View className="w-full flex flex-row justify-center">
          {isTimerToAnswerStopped && (
            <Pressable
              onPress={onResumeTimerToAnswer}
              aria-label="답변 타이머를 재개합니다"
            >
              <IcPlay />
            </Pressable>
          )}
          {!isTimerToAnswerStopped && (
            <Pressable
              onPress={onStopTimerToAnswer}
              aria-label="답변 타이머를 일시중지합니다"
            >
              <IcPause />
            </Pressable>
          )}
        </View>
      </View>
    );
  }
}

function covertTimeToMMSS(time: number) {
  const absTimer = Math.abs(time);

  const minutes = Math.floor(absTimer / 60);

  const seconds = Math.floor(absTimer % 60);

  return `${minutes >= 10 ? minutes : `0${minutes}`}:${
    seconds >= 10 ? seconds : `0${seconds}`
  }`;
}

interface useTimerParams {
  startTime: number;
  finishTime: number;
  isTimerOn: boolean;
}

function useTimer({ startTime, finishTime, isTimerOn }: useTimerParams) {
  const [time, setTime] = useState(startTime);

  const [isTimerStopped, setIsTimerStopped] = useState(!isTimerOn);

  const onStopTimer = () => {
    setIsTimerStopped(true);
  };
  const onResumeTimer = () => {
    setIsTimerStopped(false);
  };
  const resetTimer = () => {
    setTime(startTime);
    setIsTimerStopped(!isTimerOn);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isTimerStopped && time > finishTime) {
      timer = setTimeout(() => {
        setTime((pre) => pre - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [time, isTimerStopped]);

  return {
    time: time,
    onStopTimer,
    onResumeTimer,
    isTimerStopped,
    resetTimer,
  };
}
