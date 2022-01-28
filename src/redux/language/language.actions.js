import { languageActionTypes } from "./language.types";

export const setLanguage = (langCode) => ({
  type: languageActionTypes.SET_LANGUAGE,
  payload: langCode,
});
