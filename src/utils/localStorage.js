//these are helper functions I use in the blogSlice
//so as to add the language and set the language direction
//I needed the getLangDirFromLocalStorage function so as to
//set the initialState of th BlogSlice language direction

export const getLangFromLocalStorage = () => {
  const result = localStorage.getItem('i18nextLng');
  return result;
};
export const getLangDirFromLocalStorage = () => {
  const lang = getLangFromLocalStorage();
  let result;
  if (lang === 'he') {
    result = 'rtl';
  } else {
    result = 'ltr';
  }
  return result;
};
