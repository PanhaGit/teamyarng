import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // load translations from /locales
  .use(LanguageDetector) // detect browser language
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "kh"], // your languages
    fallbackLng: "en", // default language
    detection: { order: ["path", "cookie", "localStorage", "navigator"] },
    backend: { loadPath: "/locales/{{lng}}/translation.json" },
    react: { useSuspense: false }, // optional
  });

export default i18n;
