export function getStorageItem(key, initValue) {
  try {
    //   로컬스토리지는 모든 데이터를 스트링으로 저장한다
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initValue;
  } catch (e) {
    console.error(e);
    return initValue;
  }
}
// 저장하기
export function setStorageItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}
