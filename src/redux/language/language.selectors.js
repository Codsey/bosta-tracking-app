import { createSelector } from "reselect";

const selectLanguage = (state) => state.language;

export const selectLanguageCode = createSelector(
  [selectLanguage],
  (language) => language.langCode
);
