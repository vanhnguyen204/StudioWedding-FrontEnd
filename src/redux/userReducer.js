const initialState = {
  userName: null,
  fullName: '',
  image: '',
  role: '',
  address: '',
  phoneNumber: '',
  email: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'SET_USER_FIELD':
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'CHANGE_AVATAR':
      return {
        ...state,
        image: action.payload.image,
      };
    default:
      return state;
  }
};
