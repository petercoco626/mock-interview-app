import AsyncStorage from '@react-native-async-storage/async-storage';

type storageKeyType = 'questions';

export const getAsyncStorage = async (key: storageKeyType) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
  } catch (e) {
    throw new Error('error on getting storage data');
  }
};

export const setAsyncStorage = async <T>(key: storageKeyType, value: T) => {
  try {
    const stringfiedValue = JSON.stringify(value);

    await AsyncStorage.setItem(key, stringfiedValue);
  } catch (e) {
    throw new Error('error on creating storage data');
  }
};

export const removeAsyncStorage = async (key: storageKeyType) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    throw new Error('error remove storage key');
  }
};
