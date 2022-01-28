import { languageActionTypes } from "./language.types";

const INITIAL_STATE = {
  langCode: null,
};

const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case languageActionTypes.SET_LANGUAGE:
      return {
        ...state,
        langCode: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
