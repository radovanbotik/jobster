const addUsertoLocalStorage = user => {
  localStorage.setItem("user", JSON.stringify(user));
};
const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
const getUserFromLocalStorage = () => {
  const res = localStorage.getItem("user");
  return res ? JSON.parse(res) : null;
};

export {
  addUsertoLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
