import { userActionTypes } from "./action.type";
const INITIAL_STATE = {
  currentUser: null
};

const userReducers = (state = INITIAL_STATE, action) =>{
  switch (action.type){
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }

}

export default userReducers;