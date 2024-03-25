const initialState = {
  userName: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'SET_USER_NAME':
      console.log('user dispatch ' + action.payload);
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
