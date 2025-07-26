export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

export function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}
