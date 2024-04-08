export const setUserField = (fieldName, value) => ({
  type: 'SET_USER_FIELD',
  payload: {fieldName, value},
});
export const changeAvatar = image => ({
  type: 'CHANGE_AVATAR',
  payload: {image},
});

export const setUserData = userData => ({
  type: 'SET_USER_DATA',
  payload: userData,
});
