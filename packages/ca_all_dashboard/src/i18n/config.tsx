import i18n from "i18next";
import en_sign_in_page from "./en/sign_in_page.json";
import vi_sign_in_page from "./vi/sign_in_page.json";
import {initReactI18next} from "react-i18next";

export const resources = {
  en: {
    sign_in_page: en_sign_in_page,
  },
  vi: {
    sign_in_page: vi_sign_in_page,
  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    ns: ["sign_in_page"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  })
  .then();
