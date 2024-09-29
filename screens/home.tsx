import { Button } from '@/components/base/button';
import Input from '@/components/base/input';
import { Modal } from '@/components/base/modal';
import { ScreenRouteParamType } from '@/constants/screen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import IcPlay from '@/assets/icons/ic-play.svg';
import { Text } from '@/components/base/text';
import { getAsyncStorage, setAsyncStorage } from '@/libs/async-storage';

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<ScreenRouteParamType>>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [count, setCount] = useState(0);

  const getQuestions = async () => {
    const questions = await getAsyncStorage('questions');
    console.log(questions);
  };

  useEffect(() => {
    getQuestions();
  }, [count]);

  return (
    <View>
      <Text customStyle="text-black text-[40px]" customFont="font-Gmarket">
        모의 면접 suit
      </Text>
      <Text customStyle="text-black text-[40px]">모의 면접 suit</Text>
      <Button
        text="interview로 가기"
        onPress={async () => {
          await setAsyncStorage('questions', {
            title: 'fdsf',
          });
          setCount((pre) => pre + 1);
        }}
      ></Button>

      <Button
        text="modal open"
        variant="secondary"
        onPress={() => setIsModalOpen(true)}
      ></Button>
      <Modal isModalOpen={isModalOpen}>
        <Button
          text="modal close"
          onPress={() => setIsModalOpen(false)}
        ></Button>
      </Modal>
      <IcPlay width={24} height={24} />
    </View>
  );
}
