import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "local_account";

export async function getLocalAccount() {
  try {
    const json = await AsyncStorage.getItem(KEY);
    if (!json) return null;
    return JSON.parse(json);
  } catch (e) {
    console.warn("getLocalAccount error", e);
    return null;
  }
}

export async function saveLocalAccount(account) {
  try {
    const json = JSON.stringify(account);
    await AsyncStorage.setItem(KEY, json);
    return true;
  } catch (e) {
    console.warn("saveLocalAccount error", e);
    return false;
  }
}

export async function removeLocalAccount() {
  try {
    await AsyncStorage.removeItem(KEY);
    return true;
  } catch (e) {
    console.warn("removeLocalAccount error", e);
    return false;
  }
}

export default { getLocalAccount, saveLocalAccount, removeLocalAccount };
